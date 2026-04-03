/**
 * Nhạc nền đồng bộ giữa các trang: sessionStorage lưu vị trí + trạng thái bật/tắt do user chọn.
 * Mặc định coi là bật nhạc (chỉ tắt khi đã lưu '0' do user bấm tắt).
 */
(function () {
    var KEY_PLAYING = 'modoll_music_playing';
    var KEY_TIME = 'modoll_music_time';
    var bound = false;

    function getAudio() {
        return document.getElementById('modollMusic');
    }
    function getBtn() {
        return document.getElementById('modollMusicToggle');
    }

    /** Chỉ lưi thời điểm phát (không ghi KEY_PLAYING từ audio.paused — tránh autoplay bị chặn → lưu nhầm '0'). */
    function saveTime() {
        var audio = getAudio();
        if (!audio) return;
        try {
            if (!isNaN(audio.currentTime) && audio.currentTime >= 0) {
                sessionStorage.setItem(KEY_TIME, String(audio.currentTime));
            }
        } catch (e) {}
    }

    /** Chỉ gọi sau khi user bấm nút bật/tắt. */
    function savePlayingChoice() {
        var audio = getAudio();
        if (!audio) return;
        try {
            sessionStorage.setItem(KEY_PLAYING, audio.paused ? '0' : '1');
        } catch (e) {}
    }

    function setPlayingUI(on) {
        var btn = getBtn();
        if (!btn) return;
        btn.classList.toggle('is-on', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
    }

    function init() {
        var audio = getAudio();
        var btn = getBtn();
        if (!audio || !btn) return;
        if (bound) return;
        bound = true;

        audio.loop = true;

        var lastSave = 0;
        audio.addEventListener('timeupdate', function () {
            var now = Date.now();
            if (now - lastSave < 80) return;
            lastSave = now;
            saveTime();
        });

        audio.addEventListener('play', function () {
            setPlayingUI(true);
        });

        btn.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();
            if (audio.paused) {
                var p = audio.play();
                if (p !== undefined) {
                    p.then(function () {
                        savePlayingChoice();
                        saveTime();
                    }).catch(function () {
                        setPlayingUI(true);
                        try {
                            sessionStorage.setItem(KEY_PLAYING, '1');
                        } catch (e) {}
                    });
                } else {
                    savePlayingChoice();
                    saveTime();
                }
            } else {
                audio.pause();
                setPlayingUI(false);
                savePlayingChoice();
                saveTime();
            }
        });

        function playAfterUserRules() {
            setPlayingUI(true);
            var p = audio.play();
            if (p !== undefined) {
                p.then(function () {
                    saveTime();
                }).catch(function () {
                    setPlayingUI(true);
                });
            }
        }

        /**
         * Gọi play() sau khi seek xong (seeked) để tránh giật do decode/seek chồng lên nhau.
         */
        function tryResume() {
            var t = 0;
            try {
                t = parseFloat(String(sessionStorage.getItem(KEY_TIME) || '0'), 10) || 0;
            } catch (e) {}

            var wantPlay = true;
            try {
                if (sessionStorage.getItem(KEY_PLAYING) === '0') wantPlay = false;
            } catch (e) {}

            if (!wantPlay) {
                setPlayingUI(false);
                return;
            }

            function clampTime(sec) {
                var d = audio.duration;
                if (d && !isNaN(d) && d > 0) {
                    return Math.min(Math.max(0, sec), Math.max(0, d - 0.05));
                }
                return Math.max(0, sec);
            }

            function runSeekThenPlay() {
                if (t < 0.25) {
                    playAfterUserRules();
                    return;
                }
                var target = clampTime(t);
                var finished = false;
                function done() {
                    if (finished) return;
                    finished = true;
                    playAfterUserRules();
                }
                var onSeeked = function () {
                    audio.removeEventListener('seeked', onSeeked);
                    done();
                };
                audio.addEventListener('seeked', onSeeked);
                try {
                    if (typeof audio.fastSeek === 'function') {
                        try {
                            audio.fastSeek(target);
                        } catch (e) {
                            audio.currentTime = target;
                        }
                    } else {
                        audio.currentTime = target;
                    }
                } catch (e) {
                    audio.removeEventListener('seeked', onSeeked);
                    done();
                    return;
                }
                setTimeout(function () {
                    if (!finished) {
                        audio.removeEventListener('seeked', onSeeked);
                        done();
                    }
                }, 200);
            }

            if (audio.readyState >= 1) {
                runSeekThenPlay();
            } else {
                audio.addEventListener('loadedmetadata', function once() {
                    audio.removeEventListener('loadedmetadata', once);
                    runSeekThenPlay();
                });
            }
        }

        if (audio.readyState >= 1) {
            tryResume();
        } else {
            audio.addEventListener('loadedmetadata', function once() {
                audio.removeEventListener('loadedmetadata', once);
                tryResume();
            });
        }

        window.addEventListener('pagehide', saveTime);
        window.addEventListener('beforeunload', saveTime);
        document.addEventListener('visibilitychange', function () {
            if (document.visibilityState === 'hidden') saveTime();
        });
    }

    function scheduleInit() {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
        } else {
            init();
        }
    }

    scheduleInit();
    document.addEventListener('modoll:layout-ready', init);
})();
