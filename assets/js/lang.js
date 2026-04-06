/**
 * Đồng bộ EN / VI: localStorage + cookie (path=/).
 * Lưu ngay khi bấm nút (capture) để không mất lựa chọn khi chuyển trang nhanh.
 */
(function () {
    var KEY = 'modoll-lang';
    var COOKIE = 'modoll-lang';
    var LANGS = ['en', 'vi'];

    function readCookie() {
        var m = document.cookie.match(new RegExp('(?:^|;\\s*)' + COOKIE + '=([^;]*)'));
        if (!m) return null;
        try {
            return decodeURIComponent(m[1].trim());
        } catch (e) {
            return null;
        }
    }

    function writeCookie(lang) {
        document.cookie =
            COOKIE +
            '=' +
            encodeURIComponent(lang) +
            ';path=/;max-age=31536000;SameSite=Lax';
    }

    function persistOnly(lang) {
        if (LANGS.indexOf(lang) < 0) return;
        try {
            localStorage.setItem(KEY, lang);
        } catch (e) {}
        writeCookie(lang);
    }

    /** Gọi trước onclick: luôn ghi storage khi user bấm EN/VI */
    document.addEventListener(
        'click',
        function (e) {
            var t = e.target;
            if (!t || !t.closest) return;
            var btn = t.closest('.lang-btn');
            if (!btn) return;
            var lang = btn.getAttribute('data-lang');
            if (LANGS.indexOf(lang) < 0) return;
            persistOnly(lang);
        },
        true
    );

    window.modollGetSavedLang = function () {
        try {
            var v = localStorage.getItem(KEY);
            if (LANGS.indexOf(v) >= 0) return v;
        } catch (e) {}
        var c = readCookie();
        if (c && LANGS.indexOf(c) >= 0) return c;
        return 'en';
    };

    window.modollApplyLangUI = function (lang) {
        if (LANGS.indexOf(lang) < 0) lang = 'en';
        document.querySelectorAll('.lang-btn').forEach(function (btn, i) {
            var btnLang = btn.getAttribute('data-lang');
            if (btnLang) {
                btn.classList.toggle('active', btnLang === lang);
            } else {
                btn.classList.toggle('active', i === LANGS.indexOf(lang));
            }
        });
        document.documentElement.lang = lang === 'vi' ? 'vi' : 'en';
        persistOnly(lang);
    };
})();
