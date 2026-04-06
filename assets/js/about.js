const texts = {
            'en': {
                'nav_home': 'HOME', 'nav_shop': 'SHOP', 'nav_custom': 'CUSTOMIZE', 'nav_about': 'ABOUT US', 'nav_contact': 'CONTACT', 'nav_blog': 'BLOG',
                'ab_title': 'About Us', 
                'ab_msg': 'We believe every memory has a story worth telling.', 
                'ab_quote': '"We turn your memories into handcrafted wooden art"',
                'img_ph1': 'Your Memories', 'img_ph2': 'Our Workshop',
                's2_title': 'Brand Story', 
                's2_text': 'Our journey started with a simple idea: turning fleeting moments into timeless wooden products. We meticulously hand-craft every piece to ensure your most cherished memories are celebrated forever.',
                's3_title': 'Vision & Mission', 
                'v_title': 'Vision', 'v_desc': 'To become the leading personalized gift brand that connects hearts globally.', 
                'm_title': 'Mission', 'm_desc': 'Delivering meaningful, high-quality customized products that capture your unique essence.',
                's4_title': 'Brand Identity', 
                'id1_title': 'Handmade', 'id1_desc': 'Meticulously created by artisan hands', 
                'id2_title': 'Personalization', 'id2_desc': 'Tailored precisely to your unique story', 
                'id3_title': 'Emotional', 'id3_desc': 'Gifts designed to deeply touch the heart', 
                'id4_title': 'Quality', 'id4_desc': 'Built to last with high-quality standards',
                's5_title': 'Production Process & Quality', 
                'p1_title': 'Customization', 'p1_desc': 'Choose your details', 
                'p2_title': 'Design Processing', 'p2_desc': 'AI & Manual review', 
                'p3_title': 'Production', 'p3_desc': 'Artisan Handcrafting', 
                'p4_title': 'Quality Check', 'p4_desc': 'Rigorous inspection', 
                'p5_title': 'Delivery', 'p5_desc': 'Safe, secure & ready',
                's6_title': 'Functional & Emotional Value', 
                'val1_title': 'Functional Value', 'v1_a': 'Durable Material (Premium Wood)', 'v1_b': 'High Customization Options', 'v1_c': 'A Veritable Unique Product', 
                'val2_title': 'Emotional Value', 'v2_a': 'Preserving Personalized Memories', 'v2_b': 'Highly Meaningful Gifts', 'v2_c': 'Fostering Emotional Connection',
                'cta_msg': 'Ready to start designing your own memories?', 
                'cta_quote': '"Make your memories last forever"', 
                'btn_create': 'Create Your Own Now',
                'ft_shop': 'SHOP', 'ft_dolls': 'Dolls', 'ft_frames': 'Frames', 'ft_items': 'Items', 'ft_themes': 'Themes', 'ft_contact': 'Contact Us',
                'ft_support': 'SUPPORT', 'ft_faq': 'FAQ', 'ft_shipping': 'Shipping', 'ft_contact2': 'Contact',
                'ft_company': 'COMPANY', 'ft_about': 'About Us', 'ft_blog': 'Blog', 'ft_careers': 'Careers', 'ft_policies': 'Policies',
                'ft_sub_title': 'Subscribe for Updates & Offers.', 'ft_sub_btn': 'Join Now'
            },
            'vi': {
                'nav_home': 'TRANG CHỦ', 'nav_shop': 'CỬA HÀNG', 'nav_custom': 'TÙY CHỈNH', 'nav_about': 'VỀ CHÚNG TÔI', 'nav_contact': 'LIÊN HỆ', 'nav_blog': 'BLOG',
                'ab_title': 'Về Chúng Tôi', 
                'ab_msg': 'Chúng tôi tin rằng mỗi kỷ niệm đều có một câu chuyện đáng để trân trọng và lưu giữ.', 
                'ab_quote': '"Biến khoảnh khắc của bạn thành tác phẩm nghệ thuật gỗ thủ công"',
                'img_ph1': 'Kỷ Niệm Của Bạn', 'img_ph2': 'Xưởng Chế Tác',
                's2_title': 'Câu Chuyện Thương Hiệu', 
                's2_text': 'Hành trình của chúng tôi bắt đầu từ một ý tưởng đơn giản: biến những khoảnh khắc thoáng qua thành những tác phẩm gỗ vượt thời gian. Chúng tôi chế tác thủ công tỉ mỉ từng chi tiết để tôn vinh những kỷ niệm quý giá nhất của bạn.',
                's3_title': 'Tầm Nhìn & Sứ Mệnh', 
                'v_title': 'Tầm Nhìn', 'v_desc': 'Trở thành thương hiệu quà tặng cá nhân hóa hàng đầu, đưa sản phẩm thủ công kết nối trái tim trên toàn cầu.', 
                'm_title': 'Sứ Mệnh', 'm_desc': 'Mang đến những sản phẩm tùy biến chất lượng cao, lưu giữ trọn vẹn bản sắc độc đáo của bạn.',
                's4_title': 'Nhận Diện Thương Hiệu', 
                'id1_title': 'Chế Tác Thủ Công', 'id1_desc': 'Hoàn thiện tỉ mỉ bởi đôi bàn tay nghệ nhân', 
                'id2_title': 'Cá Nhân Hóa', 'id2_desc': 'Thiết kế riêng theo câu chuyện độc bản của bạn', 
                'id3_title': 'Kết Nối Cảm Xúc', 'id3_desc': 'Những món quà được thiết kế để chạm đến rung động trái tim', 
                'id4_title': 'Cam Kết Chất Lượng', 'id4_desc': 'Tiêu chuẩn cao cấp, bền bỉ với thời gian',
                's5_title': 'Quy Trình Sản Xuất & Chất Lượng', 
                'p1_title': 'Tùy Chỉnh', 'p1_desc': 'Chọn chi tiết của bạn', 
                'p2_title': 'Xử Lý Thiết Kế', 'p2_desc': 'Duyệt qua AI & Thủ công', 
                'p3_title': 'Sản Xuất', 'p3_desc': 'Chạm khắc tỉ mỉ', 
                'p4_title': 'Kiểm Tra', 'p4_desc': 'Kiểm định nghiêm ngặt', 
                'p5_title': 'Giao Hàng', 'p5_desc': 'Gói ghém yêu thương chờ gửi',
                's6_title': 'Giá Trị Công Năng & Cảm Xúc', 
                'val1_title': 'Giá Trị Công Năng', 'v1_a': 'Chất liệu bền bỉ (Gỗ cao cấp)', 'v1_b': 'Khả năng tùy chỉnh vô tận', 'v1_c': 'Sản phẩm hoàn toàn độc bản', 
                'val2_title': 'Giá Trị Cảm Xúc', 'v2_a': 'Lưu giữ những kỷ niệm cá nhân', 'v2_b': 'Món quà mang ý nghĩa sâu sắc', 'v2_c': 'Nuôi dưỡng sự gắn kết tình cảm',
                'cta_msg': 'Bạn đã sẵn sàng để chế tác món quà của riêng mình chưa?', 
                'cta_quote': 'Thiết kế búp bê gỗ theo phong cách của bạn!', 
                'btn_create': 'THIẾT KẾ NGAY',
                'ft_shop': 'CỬA HÀNG', 'ft_dolls': 'Búp Bê', 'ft_frames': 'Khung Tranh', 'ft_items': 'Phụ Kiện', 'ft_themes': 'Chủ Đề', 'ft_contact': 'Liên Hệ',
                'ft_support': 'HỖ TRỢ', 'ft_faq': 'Hỏi Đáp', 'ft_shipping': 'Giao Hàng', 'ft_contact2': 'Liên Hệ',
                'ft_company': 'CÔNG TY', 'ft_about': 'Về Chúng Tôi', 'ft_careers': 'Tuyển Dụng', 'ft_policies': 'Chính Sách',
                'ft_sub_title': 'Đăng ký nhận Ưu đãi.', 'ft_sub_btn': 'Tham Gia'
            }
        };

        function setLanguage(lang) {
            if (typeof modollApplyLangUI === 'function') modollApplyLangUI(lang);
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (texts[lang] && texts[lang][key]) {
                    el.textContent = texts[lang][key];
                }
            });
        }

        setLanguage(typeof modollGetSavedLang === 'function' ? modollGetSavedLang() : 'en');
