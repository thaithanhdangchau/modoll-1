/** Nav + placeholder (soon / custom) — dùng với lang.js */
const texts = {
    en: {
        nav_home: 'Home',
        nav_shop: 'Shop',
        nav_custom: 'Customize',
        nav_about: 'About Us',
        nav_contact: 'Contact',
        nav_blog: 'Blog',
        cs_h1: 'Coming soon',
        cs_p: 'This page is under construction. Check back later.',
        cs_btn: 'Back to home',
        cu_sub: 'Customize',
        cu_p: 'The personalization studio is not available yet. Stay tuned.'
    },
    vi: {
        nav_home: 'Trang Chủ',
        nav_shop: 'Cửa Hàng',
        nav_custom: 'Tùy Chỉnh',
        nav_about: 'Về chúng tôi',
        nav_contact: 'Liên Hệ',
        nav_blog: 'Blog',
        cs_h1: 'Sắp ra mắt',
        cs_p: 'Trang đang được hoàn thiện. Vui lòng quay lại sau.',
        cs_btn: 'Về trang chủ',
        cu_sub: 'Tùy chỉnh',
        cu_p: 'Studio cá nhân hóa chưa mở. Hãy đón xem.'
    }
};

function setLanguage(lang) {
    if (typeof modollApplyLangUI === 'function') modollApplyLangUI(lang);
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        var key = el.getAttribute('data-i18n');
        if (texts[lang] && texts[lang][key]) {
            el.textContent = texts[lang][key];
        }
    });
}

setLanguage(typeof modollGetSavedLang === 'function' ? modollGetSavedLang() : 'en');
