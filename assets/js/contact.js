const texts = {
    en: {
        nav_home: 'HOME',
        nav_shop: 'SHOP',
        nav_custom: 'CUSTOMIZE',
        nav_about: 'ABOUT US',
        nav_contact: 'CONTACT',
        nav_blog: 'BLOG',
        ct_title: "Let's design your memory together.",
        ct_intro: 'Share with us your moments and ideas. We will reply quickly with a clear suggestion for your own customized wooden gift.',
        ct_pill_1: 'Response in 24h',
        ct_pill_2: 'Mood-first consultation',
        ct_pill_3: 'EN / VI / FR support',
        ct_card_title: 'Support Hours',
        ct_hours_week: 'Mon - Sat:',
        ct_hours_sun: 'Sunday:',
        ct_hours_note: 'For urgent gifts, please mark "Rush order" in your message.',
        form_title: 'Send us your brief',
        form_desc: 'Share your contact info and what you want to customize. We will send a proposal and estimated quote.',
        lb_name: 'Your name',
        lb_email: 'Email',
        lb_topic: 'Request type',
        opt_postpurchase: 'Postpurchase support',
        opt_special_orders: 'Special orders',
        opt_questions_feedback: 'Questions/feedbacks for Modoll Team',
        lb_message: 'Message',
        ph_message: 'Describe your story, preferred style, expected date...',
        btn_submit: 'Send message',
        info_title: 'Direct channels',
        visit_title: 'Visit our studio',
        btn_about_link: 'Explore our story',
        faq_title: 'Quick FAQ',
        faq_q1: 'Can I attach a photo reference?',
        faq_a1: 'Yes. Share your references in the message and we will guide the best format in our reply.',
        faq_q2: 'How long for first mockup?',
        faq_a2: 'Usually within 24-48 hours after we confirm your requirements.',
        faq_q3: 'Do you support urgent orders?',
        faq_a3: 'Yes, depending on current capacity. Please mark your deadline clearly.',
        ft_shop: 'SHOP',
        ft_dolls: 'Dolls',
        ft_frames: 'Frames',
        ft_items: 'Items',
        ft_themes: 'Themes',
        ft_contact: 'Contact Us',
        ft_support: 'SUPPORT',
        ft_faq: 'FAQ',
        ft_shipping: 'Shipping',
        ft_contact2: 'Contact',
        ft_company: 'COMPANY',
        ft_about: 'About Us',
        ft_blog: 'Blog',
        ft_careers: 'Careers',
        ft_policies: 'Policies',
        ft_sub_title: 'Subscribe for Updates & Offers.',
        ft_sub_btn: 'Join Now'
    },
    vi: {
        nav_home: 'TRANG CHỦ',
        nav_shop: 'CỬA HÀNG',
        nav_custom: 'TÙY CHỈNH',
        nav_about: 'VỀ CHÚNG TÔI',
        nav_contact: 'LIÊN HỆ',
        nav_blog: 'BLOG',
        ct_title: 'Cùng nhau thiết kế kỷ niệm của bạn.',
        ct_intro: 'Hãy chia sẻ với chúng tôi khoảnh khắc và ý tưởng của bạn. Chúng tôi sẽ phản hồi nhanh với gợi ý rõ ràng cho món quà gỗ được tùy chỉnh riêng cho bạn.',
        ct_pill_1: 'Phản hồi trong 24h',
        ct_pill_2: 'Tư vấn theo mood board',
        ct_pill_3: 'Hỗ trợ EN / VI / FR',
        ct_card_title: 'Khung giờ hỗ trợ',
        ct_hours_week: 'Thứ Hai – Thứ Bảy:',
        ct_hours_sun: 'Chủ nhật:',
        ct_hours_note: 'Nếu cần gấp, vui lòng ghi "Đơn hàng gấp" trong nội dung.',
        form_title: 'Gửi thông tin yêu cầu',
        form_desc: 'Để lại thông tin liên hệ và nhu cầu tùy chỉnh. Chúng tôi sẽ gửi đề xuất và báo giá ước tính.',
        lb_name: 'Họ tên',
        lb_email: 'Email',
        lb_topic: 'Loại yêu cầu',
        opt_postpurchase: 'Hỗ trợ sau mua hàng',
        opt_special_orders: 'Đơn hàng đặc biệt',
        opt_questions_feedback: 'Câu hỏi / góp ý cho đội ngũ Modoll',
        lb_message: 'Nội dung',
        ph_message: 'Mô tả câu chuyện, phong cách mong muốn, ngày cần nhận...',
        btn_submit: 'Gửi tin nhắn',
        info_title: 'Kênh liên hệ trực tiếp',
        visit_title: 'Ghé thăm studio',
        btn_about_link: 'Xem câu chuyện thương hiệu',
        faq_title: 'Câu hỏi nhanh',
        faq_q1: 'Tôi có thể gửi ảnh tham khảo không?',
        faq_a1: 'Có. Bạn cứ để thông tin trong tin nhắn, chúng tôi sẽ hướng dẫn định dạng phù hợp khi phản hồi.',
        faq_q2: 'Bao lâu có mockup đầu tiên?',
        faq_a2: 'Thường trong 24–48 giờ sau khi xác nhận yêu cầu.',
        faq_q3: 'Có nhận đơn gấp không?',
        faq_a3: 'Có, tùy công suất theo từng thời điểm. Vui lòng ghi rõ deadline.',
        ft_shop: 'CỬA HÀNG',
        ft_dolls: 'Búp bê',
        ft_frames: 'Khung',
        ft_items: 'Phụ kiện',
        ft_themes: 'Chủ đề',
        ft_contact: 'Liên hệ',
        ft_support: 'HỖ TRỢ',
        ft_faq: 'Hỏi đáp',
        ft_shipping: 'Giao hàng',
        ft_contact2: 'Liên hệ',
        ft_company: 'CÔNG TY',
        ft_about: 'Về chúng tôi',
        ft_blog: 'Blog',
        ft_careers: 'Tuyển dụng',
        ft_policies: 'Chính sách',
        ft_sub_title: 'Đăng ký nhận ưu đãi.',
        ft_sub_btn: 'Tham gia'
    }
};

function setLanguage(lang) {
    if (typeof modollApplyLangUI === 'function') modollApplyLangUI(lang);
    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (texts[lang] && texts[lang][key]) {
            el.textContent = texts[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (texts[lang] && texts[lang][key]) {
            el.setAttribute('placeholder', texts[lang][key]);
        }
    });
}

setLanguage(typeof modollGetSavedLang === 'function' ? modollGetSavedLang() : 'en');

(function initContactFaqAccordion() {
    var root = document.getElementById('contactFaq');
    if (!root) return;
    var items = root.querySelectorAll('details');
    items.forEach(function (details) {
        details.addEventListener('toggle', function () {
            if (!details.open) return;
            items.forEach(function (other) {
                if (other !== details) other.open = false;
            });
        });
    });
})();
