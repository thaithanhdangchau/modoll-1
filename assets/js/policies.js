const texts = {
            'en': {
                'nav_home': 'HOME', 'nav_shop': 'SHOP', 'nav_custom': 'CUSTOMIZE', 'nav_about': 'ABOUT US', 'nav_contact': 'CONTACT', 'nav_blog': 'BLOG',
                'side_title': 'POLICY GUIDE',
                'nav_p1': 'Purchase Policy', 'nav_p2': 'Payment Policy', 'nav_p3': 'Shipping & Delivery', 'nav_p4': 'Customization & Revision Policy', 'nav_p5': 'Return & Refund Policy', 'nav_p6': 'FAQ',
                'main_title': 'Policies & Customer Care',
                't_p1': 'Purchase Policy', 'desc_p1': 'Order process to get your customized wooden dolls, converting your memories into personalized artworks.', 'flow1': 'Select Product', 'flow2': 'Customize Details', 'flow3': 'Real-time Preview', 'flow4': 'Add to Cart & Checkout', 'oc_title': 'Order Confirmation Process', 'oc_desc': 'Once checked out, our team reviews the design. We will contact you within 24h if any manual adjustments or special details need discussion.',
                't_p2': 'Payment Policy', 'desc_p2': 'Payment methods you can opt-to: bank transfer, online payment.', 'dp_title': 'Deposit Rules', 'dp_low_t': 'orders <400K:', 'dp_low_d': 'Full payment required.', 'dp_high_t': 'orders >400K:', 'dp_high_d': '50% deposit required.', 'rem_t': 'Remaining Payment:', 'rem_d': 'Must be completed before shipping.',
                't_p3': 'Shipping & Delivery', 'sd1_t': 'Estimated Production Time', 'sd1_v': '(e.g., 3-5 days)', 'sd2_t': 'Estimated Shipping Time', 'sd2_v': '(e.g., 2-4 days)', 'sd3_t': 'Shipping Fees', 'sd3_v': '(Calculated at checkout)', 'sd_alert_t': 'Urgent Orders Note:', 'sd_alert_d': 'Please contact us directly if you need a rushed order.',
                't_p4': 'Customization & Revision Policy', 'rev_desc': 'Get a real-time preview before production. All custom details are verified before our artisans begin carving and painting.', 'lim_t': 'Revision Limits', 'lim_1': 'Minor Edits (free)', 'lim_2': 'Major Changes (extra cost)', 'type_t': 'Design Types', 'type_1': 'Template Orders', 'type_2': 'AI-Generated Designs', 'type_3': 'Hand-drawn Custom Requests',
                't_p5': 'Return & Refund Policy', 'rt1_t': 'Damaged/Wrong Product', 'rt1_v': 'Condition for return', 'rt2_t': 'Personalized Product', 'rt2_v': 'NON-REFUNDABLE', 'rn1': 'Request Support', 'rn2': 'Inspection', 'rn3': 'Decision',
                't_p6': 'Frequently Asked Questions (FAQ)', 'q1_q': 'Q: How long does customization take?', 'q1_a': 'A: It usually takes about 3-5 days for our artisans to manually carve and paint your custom wooden doll and frame, depending on the complexity of the design.', 'q2_q': 'Q: Can I change my design after ordering?', 'q2_a': 'A: You can request minor changes within the first 12 hours. Once production begins, changes cannot be accommodated without additional fees.', 'q3_q': 'Q: Will the product look exactly like preview?', 'q3_a': 'A: The live 3D preview is a highly accurate digital representation. However, because each piece is uniquely hand-painted on natural wood, slight variations in color and texture may occur, adding to its artisanal charm.', 'q4_q': 'Q: What if I need it urgently?', 'q4_a': 'A: Please check the special urgent order note in Shipping & Delivery section and contact our support team immediately. We offer expedited rush processing for an additional fee depending on availability.',
                'btn_cust': 'Start Customizing', 'btn_cont': 'Contact Us for Support',
                'ft_shop': 'SHOP', 'ft_dolls': 'Dolls', 'ft_frames': 'Frames', 'ft_items': 'Items', 'ft_themes': 'Themes', 'ft_contact': 'Contact Us',
                'ft_support': 'SUPPORT', 'ft_faq': 'FAQ', 'ft_shipping': 'Shipping', 'ft_contact2': 'Contact',
                'ft_company': 'COMPANY', 'ft_about': 'About Us', 'ft_blog': 'Blog', 'ft_careers': 'Careers', 'ft_policies': 'Policies',
                'ft_sub_title': 'Subscribe for Updates & Offers.', 'ft_sub_btn': 'Join Now'
            },
            'vi': {
                'nav_home': 'TRANG CHỦ', 'nav_shop': 'CỬA HÀNG', 'nav_custom': 'TÙY CHỈNH', 'nav_about': 'VỀ CHÚNG TÔI', 'nav_contact': 'LIÊN HỆ', 'nav_blog': 'BLOG',
                'side_title': 'HƯỚNG DẪN CHÍNH SÁCH',
                'nav_p1': 'Chính sách Mua hàng', 'nav_p2': 'Chính sách Thanh toán', 'nav_p3': 'Vận chuyển & Giao hàng', 'nav_p4': 'Chính sách Chỉnh sửa thiết kế', 'nav_p5': 'Chính sách Đổi trả', 'nav_p6': 'FAQ (Câu Hỏi Thường Gặp)',
                'main_title': 'Chính Sách & Chăm Sóc Khách Hàng',
                't_p1': 'Chính Sách Mua Hàng', 'desc_p1': 'Quy trình đặt hàng để nhận bức tranh gỗ búp bê được cá nhân hoá, biến kỷ niệm thành tác phẩm nghệ thuật.', 'flow1': 'Chọn Sản Phẩm', 'flow2': 'Tùy Chỉnh Chi Tiết', 'flow3': 'Xem Trước 3D', 'flow4': 'Giỏ Hàng & Thanh Toán', 'oc_title': 'Quy Trình Xác Nhận', 'oc_desc': 'Sau khi thanh toán, đội ngũ thiết kế sẽ rà soát đơn hàng. Chúng tôi sẽ liên hệ trong 24h nếu cần thảo luận về chi tiết đặc biệt.',
                't_p2': 'Chính Sách Thanh Toán', 'desc_p2': 'Các phương thức thanh toán hỗ trợ: chuyển khoản, thanh toán trực tuyến.', 'dp_title': 'Quy Định Đặt Cọc', 'dp_low_t': 'Đơn <400K:', 'dp_low_d': 'Yêu cầu thanh toán 100%.', 'dp_high_t': 'Đơn >400K:', 'dp_high_d': 'Yêu cầu cọc 50%.', 'rem_t': 'Thanh Toán Còn Lại:', 'rem_d': 'Phải được hoàn tất trước khi giao hàng.',
                't_p3': 'Vận Chuyển & Giao Hàng', 'sd1_t': 'Thời Gian Chế Tác Dự Kiến', 'sd1_v': '(Vui lòng đợi 3-5 ngày)', 'sd2_t': 'Thời Gian Giao Hàng', 'sd2_v': '(Khoảng 2-4 ngày)', 'sd3_t': 'Phí Giao Hàng', 'sd3_v': '(Tính toán tại bước thanh toán)', 'sd_alert_t': 'Lưu Ý Đơn Gấp:', 'sd_alert_d': 'Vui lòng liên hệ trực tiếp nếu bạn cần giao hàng hỏa tốc.',
                't_p4': 'Chính Sách Chỉnh Sửa Định Thiết Kế', 'rev_desc': 'Nhận bản xem trước thời gian thực trước khi sản xuất. Mọi chi tiết tùy chỉnh được xác nhận kỹ trước khi nghệ nhân tiến hành chạm khắc.', 'lim_t': 'Giới Hạn Chỉnh Sửa', 'lim_1': 'Chỉnh sửa nhỏ (Miễn phí)', 'lim_2': 'Thay đổi lớn (Tính phí thêm)', 'type_t': 'Các Loại Thiết Kế', 'type_1': 'Đơn hàng theo mẫu', 'type_2': 'Thiết kế tạo bởi AI', 'type_3': 'Yêu cầu vẽ tay độc bản',
                't_p5': 'Chính Sách Đổi Trả & Hoàn Tiền', 'rt1_t': 'Sản Phẩm Lỗi/Hư Hỏng', 'rt1_v': 'Điều kiện để đổi trả', 'rt2_t': 'Sản Phẩm Cá Nhân Hóa', 'rt2_v': 'KHÔNG HOÀN TIỀN', 'rn1': 'Yêu Cầu Hỗ Trợ', 'rn2': 'Kiểm Tra', 'rn3': 'Quyết Định',
                't_p6': 'Câu Hỏi Thường Gặp (FAQ)', 'q1_q': 'H: Chế tác mất bao lâu?', 'q1_a': 'Đ: Thường mất 3-5 ngày để nghệ nhân chạm khắc và vẽ tay búp bê của bạn, tùy thuộc vào độ phức tạp của thiết kế.', 'q2_q': 'H: Tôi có thể đổi thiết kế sau khi đặt không?', 'q2_a': 'Đ: Bạn có thể yêu cầu sửa đổi nhỏ trong 12 giờ đầu. Sau khi bắt đầu sản xuất, việc thay đổi sẽ phát sinh phụ phí.', 'q3_q': 'H: Sản phẩm có giống y hệt bản xem trước không?', 'q3_a': 'Đ: Bản xem trước rất sát với thực tế. Tuy nhiên vì vẽ tay 100% trên bề mặt gỗ tự nhiên, sẽ có vân gỗ và màu sắc thay đổi nhẹ, tạo nên nét đẹp thủ công độc nhất.', 'q4_q': 'H: Nếu tôi cần gấp thì sao?', 'q4_a': 'Đ: Vui lòng xem ghi chú "Đơn Gấp" ở phần Vận chuyển và liên hệ trợ giúp ngay. Chúng tôi có hỗ trợ dịch vụ làm gấp (có phụ phí).',
                'btn_cust': 'THIẾT KẾ NGAY', 'btn_cont': 'Liên Hệ Hỗ Trợ',
                'ft_shop': 'CỬA HÀNG', 'ft_dolls': 'Búp Bê', 'ft_frames': 'Khung Tranh', 'ft_items': 'Phụ Kiện', 'ft_themes': 'Chủ Đề', 'ft_contact': 'Liên Hệ',
                'ft_support': 'HỖ TRỢ', 'ft_faq': 'Hỏi Đáp', 'ft_shipping': 'Giao Hàng', 'ft_contact2': 'Liên Hệ',
                'ft_company': 'CÔNG TY', 'ft_about': 'Về Chúng Tôi', 'ft_blog': 'Blog', 'ft_careers': 'Tuyển Dụng', 'ft_policies': 'Chính Sách',
                'ft_sub_title': 'Đăng ký nhận Ưu đãi.', 'ft_sub_btn': 'Tham Gia'
            },
            'fr': {
                'nav_home': 'ACCUEIL', 'nav_shop': 'BOUTIQUE', 'nav_custom': 'PERSONNALISER', 'nav_about': 'À PROPOS', 'nav_contact': 'CONTACT', 'nav_blog': 'BLOG',
                'side_title': 'GUIDE DES POLITIQUES',
                'nav_p1': 'Politique d\'achat', 'nav_p2': 'Politique de paiement', 'nav_p3': 'Livraison & Expédition', 'nav_p4': 'Personnalisation & Révisions', 'nav_p5': 'Retours & Remboursements', 'nav_p6': 'FAQ',
                'main_title': 'Politiques & Service client',
                't_p1': 'Politique d\'achat', 'desc_p1': 'Parcours de commande pour vos poupées en bois personnalisées : transformez vos souvenirs en œuvres d\'art uniques.', 'flow1': 'Choisir le produit', 'flow2': 'Personnaliser', 'flow3': 'Aperçu en direct', 'flow4': 'Panier & Paiement', 'oc_title': 'Confirmation de commande', 'oc_desc': 'Après validation, notre équipe vérifie la création. Nous vous contactons sous 24 h si des ajustements ou précisions sont nécessaires.',
                't_p2': 'Politique de paiement', 'desc_p2': 'Modes de paiement acceptés : virement bancaire, paiement en ligne.', 'dp_title': 'Règles d\'acompte', 'dp_low_t': 'commandes < 400 K :', 'dp_low_d': 'Paiement intégral requis.', 'dp_high_t': 'commandes > 400 K :', 'dp_high_d': 'Acompte de 50 % requis.', 'rem_t': 'Solde restant :', 'rem_d': 'À régler avant expédition.',
                't_p3': 'Livraison & Expédition', 'sd1_t': 'Délai de fabrication estimé', 'sd1_v': '(ex. 3 à 5 jours)', 'sd2_t': 'Délai de livraison estimé', 'sd2_v': '(ex. 2 à 4 jours)', 'sd3_t': 'Frais de port', 'sd3_v': '(Calculés au paiement)', 'sd_alert_t': 'Commande urgente :', 'sd_alert_d': 'Contactez-nous directement si vous avez besoin d\'une livraison accélérée.',
                't_p4': 'Personnalisation & Révisions', 'rev_desc': 'Aperçu en temps réel avant fabrication. Tous les détails personnalisés sont validés avant le travail de nos artisans.', 'lim_t': 'Limites de révision', 'lim_1': 'Modifications mineures (gratuites)', 'lim_2': 'Changements majeurs (surcoût)', 'type_t': 'Types de création', 'type_1': 'Commandes sur modèle', 'type_2': 'Créations assistées par IA', 'type_3': 'Demandes dessinées à la main',
                't_p5': 'Retours & Remboursements', 'rt1_t': 'Produit endommagé / erreur', 'rt1_v': 'Conditions de retour', 'rt2_t': 'Produit personnalisé', 'rt2_v': 'NON REMBOURSABLE', 'rn1': 'Demande d\'assistance', 'rn2': 'Vérification', 'rn3': 'Décision',
                't_p6': 'Questions fréquentes (FAQ)', 'q1_q': 'Q : Combien de temps prend la personnalisation ?', 'q1_a': 'R : En général 3 à 5 jours pour la sculpture et la peinture à la main, selon la complexité du design.', 'q2_q': 'Q : Puis-je modifier après commande ?', 'q2_a': 'R : Petites modifications possibles dans les 12 premières heures. Une fois la production lancée, tout changement peut entraîner des frais supplémentaires.', 'q3_q': 'Q : Le produit sera-t-il identique à l\'aperçu ?', 'q3_a': 'R : L\'aperçu 3D est très fidèle. Chaque pièce étant peinte à la main sur du bois naturel, de légères variations de couleur et de veinure sont possibles — c\'est le charme de l\'artisanat.', 'q4_q': 'Q : Et si j\'ai besoin d\'urgence ?', 'q4_a': 'R : Voir la note « commande urgente » dans Livraison et contactez le support. Traitement accéléré possible sous réserve de disponibilité (frais supplémentaires).',
                'btn_cust': 'Commencer la personnalisation', 'btn_cont': 'Nous contacter',
                'ft_shop': 'BOUTIQUE', 'ft_dolls': 'Poupées', 'ft_frames': 'Cadres', 'ft_items': 'Accessoires', 'ft_themes': 'Thèmes', 'ft_contact': 'Contact',
                'ft_support': 'AIDE', 'ft_faq': 'FAQ', 'ft_shipping': 'Livraison', 'ft_contact2': 'Contact',
                'ft_company': 'ENTREPRISE', 'ft_about': 'À propos', 'ft_blog': 'Blog', 'ft_careers': 'Carrières', 'ft_policies': 'Politiques',
                'ft_sub_title': 'Inscrivez-vous aux offres.', 'ft_sub_btn': 'S\'inscrire'
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
