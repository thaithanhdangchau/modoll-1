/**
 * Nạp header + footer chung từ assets/partials/*.html.
 * Cần mở site qua HTTP (localhost / Live Server) để fetch hoạt động.
 *
 * Trên <body>: data-site-page="home|about|blog|custom|shop|contact|none"
 * (blog = seo.html & blog-article.html; custom = custom.html; none = không highlight nav)
 *
 * Trước script này: <script>window.MODOLL_PAGE_SCRIPTS = ['assets/js/music-nav.js', '...'];</script>
 */
(function () {
    var HEADER_URL = 'assets/partials/header.html';
    var FOOTER_URL = 'assets/partials/footer.html';
    var MUSIC_URL = 'assets/music/honey_jam.mp3';

    /** Bắt đầu tải MP3 cùng lúc với layout (trước khi inject header) để giảm khoảng trống khi chuyển trang. */
    function preloadMusic() {
        var id = 'modoll-music-preload';
        if (document.getElementById(id)) return;
        var link = document.createElement('link');
        link.id = id;
        link.rel = 'preload';
        link.href = MUSIC_URL;
        link.as = 'audio';
        document.head.appendChild(link);
    }
    preloadMusic();

    function loadScript(src) {
        return new Promise(function (resolve, reject) {
            var s = document.createElement('script');
            s.src = src;
            s.async = false;
            s.onload = function () {
                resolve();
            };
            s.onerror = function () {
                reject(new Error('Failed to load ' + src));
            };
            document.body.appendChild(s);
        });
    }

    function setNavActive() {
        var page = document.body.getAttribute('data-site-page');
        if (!page || page === 'none') return;
        document.querySelectorAll('.nav-item[data-nav]').forEach(function (el) {
            el.classList.toggle('active', el.getAttribute('data-nav') === page);
        });
    }

    function run() {
        var sh = document.getElementById('site-header');
        var sf = document.getElementById('site-footer');
        if (!sh || !sf) {
            console.warn('modoll layout: missing #site-header or #site-footer');
            return Promise.resolve();
        }

        return Promise.all([
            fetch(HEADER_URL).then(function (r) {
                if (!r.ok) throw new Error('header ' + r.status);
                return r.text();
            }),
            fetch(FOOTER_URL).then(function (r) {
                if (!r.ok) throw new Error('footer ' + r.status);
                return r.text();
            })
        ])
            .then(function (parts) {
                sh.outerHTML = parts[0].trim();
                sf.outerHTML = parts[1].trim();
                setNavActive();
                document.dispatchEvent(new CustomEvent('modoll:layout-ready'));
                var list = window.MODOLL_PAGE_SCRIPTS || [];
                var chain = Promise.resolve();
                list.forEach(function (src) {
                    chain = chain.then(function () {
                        return loadScript(src);
                    });
                });
                return chain;
            })
            .catch(function (err) {
                console.error('modoll layout:', err);
                if (sh) {
                    sh.innerHTML =
                        '<p style="padding:16px;background:#fee;border:2px solid #c00;">Không tải được header/footer. Hãy mở site qua máy chủ cục bộ (ví dụ Live Server), không dùng file://</p>';
                }
            });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', run);
    } else {
        run();
    }
})();
