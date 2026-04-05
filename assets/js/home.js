const texts = {
    'en': {
        'nav_home': 'Home', 'nav_shop': 'Shop', 'nav_custom': 'Customize', 'nav_about': 'About Us', 'nav_contact': 'Contact', 'nav_blog': 'Blog',
        'hero_title': 'Create Unforgettable Emotional Gifts, Handmade With Love',
        'hero_subtitle': 'Personalize every detail of your unique wooden doll and custom frame artwork.',
        'btn_start': 'Start Customizing', 'btn_explore': 'Explore Products',
        'cat_dolls': 'Wooden Dolls', 'cat_frames': 'Frame Backgrounds', 'cat_accessories': 'Custom Accessories', 'cat_addons': 'Custom Add-ons',
        'step1_title': 'Choose Your Product Base', 'step1_desc': 'Choose size and dimensionsize your product base.',
        'step2_title': 'Customize Characters & Scenery', 'step2_desc': 'Customize your own characters & scenery.',
        'step3_title': 'Real-time Live Preview', 'step3_desc': 'Previews all real-time visual items.',
        'step4_title': 'Order & Receive', 'step4_desc': 'Order & receive areas and shopping products.',
        'blog_title': 'Our Community (Sharing Stories)',
        'b1_title': 'A Timeless Anniversary Gift: A Customer\'s Story', 'b1_desc': 'A timeless anniversary gift. A customer\'s story shared among family...',
        'b2_title': 'From a Blank Plank to Personal Magic: An Artisan\'s Journey', 'b2_desc': 'Master artisan carving a doll, a journey through craftsmanship...',
        'b3_title': 'A Doll for David: Designing Joy for a Special Occasion', 'b3_desc': 'Simple ipsum dolor sit amet, enim more tempus hameo...',
        'b4_title': 'Liam and Anya: Art that Healed Distance', 'b4_desc': 'A long distance connection, a story of love bridging the gap...',
        'why_title': 'WHY CHOOSE MODOLL?',
        'w1_title': 'Wood - Material of Warmth and Longevity',
        'w2_title': 'Maximum Personalized Experience',
        'w3_title': 'Emotional Connection',
        'preview_title': 'See Your Custom Creation Live! Easy Editing.', 'btn_try': 'Try Customizing Now',
        'rev_title': 'Our Customers\' Stories & Reviews', 
        'r1_text': '"I ordered a custom couple set for our 10th anniversary, and it was the most touching gift we have ever received. The attention to detail on the outfits and the way our smiles were captured in wood left us speechless. It is now the center of our home."', 
        'r2_text': '"Finding a gift that truly represents my family was hard until I found Modoll. The artisans worked tirelessly to recreate our graduation photo with such precision. Every time I look at the dolls, I am reminded of that proud day. Truly a masterpiece of emotion."',
        'r3_text': '"The quality and craftsmanship of these dolls are beyond anything I expected. I bought one for my best friend\'s wedding and she cried tears of joy. It is more than just wood; it is a preserved moment of love that we will cherish forever. Simply beautiful!"',
        'r1_name': 'Ngoc Hai', 'r2_name': 'Hong Ngoc', 'r3_name': 'Minh Thuy',
        'ba_before': 'Before (Photo)', 'ba_after': 'After (Product)',
        'c_title': 'Craftsmanship & Materials',
        'c1': 'Premium Wood', 'c1_sub': '(Sustainable)', 'c2': 'Hand-Painted', 'c2_sub': '(Detail Work)',
        'c3': 'Durable Finish', 'c3_sub': '(Long lasting)', 'c4': 'Gift Box', 'c4_sub': '(Ready to Give)',
        'i_title': 'Gift Ideas & Inspiration', 'i1_title': '5 Unique Ways to Personalize Your Doll', 'i2_title': 'How to Create a Meaningful Frame',
        'idx': 'Simple ipsum dolor sit amet, enim more tempus hameo &...',
        'f_title': 'Ready To Create Your Own Perfect Gift?', 'f_desc': 'Personalize every detail of your unique wooden doll and custom frame artwork. Harmonize memories to your home and eyes.',
        'f_btn': 'Create Your Own Now',
        'ft_shop': 'Shop', 'ft_dolls': 'Dolls', 'ft_frames': 'Frames', 'ft_items': 'Items', 'ft_themes': 'Themes', 'ft_contact': 'Contact Us',
        'ft_support': 'Support', 'ft_faq': 'FAQ', 'ft_shipping': 'Shipping', 'ft_contact2': 'Contact',
        'ft_company': 'Company', 'ft_about': 'About Us', 'ft_blog': 'Blog', 'ft_careers': 'Careers', 'ft_policies': 'Policies',
        'ft_sub_title': 'Subscribe for Updates & Offers.', 'ft_sub_btn': 'Join Now'
    },
    'vi': {
        'nav_home': 'Trang Chủ', 'nav_shop': 'Cửa Hàng', 'nav_custom': 'Tùy Chỉnh', 'nav_about': 'Về chúng tôi', 'nav_contact': 'Liên Hệ', 'nav_blog': 'Blog',
        'hero_title': 'Tạo Ra Những Món Quà Cảm Xúc, Thủ Công Đầy Yêu Thương',
        'hero_subtitle': 'Cá nhân hoá từng chi tiết trên búp bê và khung tranh của bạn.',
        'btn_start': 'Tùy chỉnh ngay', 'btn_explore': 'Xem sản phẩm',
        'cat_dolls': 'Búp bê gỗ', 'cat_frames': 'Nền Khung', 'cat_accessories': 'Phụ Kiện', 'cat_addons': 'Chi Tiết Thêm',
        'step1_title': 'Chọn Mẫu Cơ Bản', 'step1_desc': 'Chọn cỡ và không gian nền.',
        'step2_title': 'Tùy Chỉnh Nhân Vật', 'step2_desc': 'Vẽ nên câu chuyện riêng.',
        'step3_title': 'Xem Trước 3D', 'step3_desc': 'Trải nghiệm trực quan.',
        'step4_title': 'Đặt Mua Chờ Nhận', 'step4_desc': 'Giao hàng tận tay.',
        'blog_title': 'Cộng Đồng Chia Sẻ Kỷ Niệm',
        'b1_title': 'Quà Kỷ Niệm Vượt Thời Gian', 'b1_desc': 'Câu chuyện khách hàng về món quà kết nối nhiều thế hệ...',
        'b2_title': 'Hành Trình Chế Tác', 'b2_desc': 'Từ khúc gỗ vô hồn đến phép màu cá nhân...',
        'b3_title': 'Búp Bê Cho David', 'b3_desc': 'Thiết kế niềm vui cho dịp đặc biệt...',
        'b4_title': 'Liam và Anya: Nghệ Thuật Chữa Lành Khoảng Cách', 'b4_desc': 'Tình yêu hàn gắn xuyên biên giới...',
        'why_title': 'VÌ SAO CHỌN MODOLL?',
        'w1_title': 'Gỗ - Chất liệu của sự ấm áp và trường tồn',
        'w2_title': 'Trải nghiệm cá nhân hóa tối đa',
        'w3_title': 'Kết nối cảm xúc',
        'preview_title': 'Trải nghiệm sản phẩm của bạn ngay - đơn giản đến bất ngờ!', 'btn_try': 'Thử tùy chỉnh ngay',
        'rev_title': 'Câu Chuyện Khách Hàng', 
        'r1_text': '"Tôi đã đặt một bộ búp bê cặp đôi cho kỷ niệm 10 năm ngày cưới, và đó là món quà xúc động nhất mà chúng tôi từng nhận được. Sự tỉ mỉ trong từng đường nét trang phục và cách biểu cảm nụ cười được tái hiện trên gỗ khiến chúng tôi thực sự ngỡ ngàng. Nó đã trở thành tâm điểm trong ngôi nhà của chúng tôi."', 
        'r2_text': '"Tìm kiếm một món quà đại diện được cho cả gia đình thực sự khó khăn cho đến khi tôi biết tới Modoll. Các nghệ nhân đã làm việc không ngừng nghỉ để tái hiện bức ảnh tốt nghiệp của chúng tôi một cách chính xác đến từng chi tiết nhỏ. Mỗi khi nhìn vào, tôi lại nhớ về ngày tự hào ấy."',
        'r3_text': '"Chất lượng và sự tinh xảo của những búp bê này vượt xa mong đợi của tôi. Tôi đã mua một bộ cho đám cưới của bạn thân và cô ấy đã rơi nước mắt vì hạnh phúc. Đây không chỉ là gỗ; đó là một khoảnh khắc yêu thương được lưu giữ mãi mãi. Thật sự rất tuyệt vời!"',
        'r1_name': 'Ngọc Hải', 'r2_name': 'Hồng Ngọc', 'r3_name': 'Minh Thúy',
        'ba_before': 'Trước (Ảnh)', 'ba_after': 'Sau (Hình Mẫu)',
        'c_title': 'Nghệ Thuật & Chất Liệu',
        'c1': 'Gỗ Thượng Hạng', 'c1_sub': '(Bền vững)', 'c2': 'Sơn Tay', 'c2_sub': '(Sắc nét)',
        'c3': 'Bảo Vệ Tốt', 'c3_sub': '(Lâu phai)', 'c4': 'Hộp Quà', 'c4_sub': '(Trao tận tay)',
        'i_title': 'Ý Tưởng Quà Tặng', 'i1_title': '5 Cách Độc Đáo Để Cá Nhân Hóa Búp Bê', 'i2_title': 'Cách Tạo Một Khung Hình Ý Nghĩa',
        'idx': 'Khám phá ngay để biến kỷ niệm thành tác phẩm nghệ thuật...',
        'f_title': 'Bạn đã sẵn sàng để chế tác món quà của riêng mình chưa?', 'f_desc': 'Thiết kế búp bê gỗ theo phong cách của bạn!',
        'f_btn': 'THIẾT KẾ NGAY',
        'ft_shop': 'Cửa Hàng', 'ft_dolls': 'Búp bê', 'ft_frames': 'Khung', 'ft_items': 'Đồ đính kèm', 'ft_themes': 'Chủ đề', 'ft_contact': 'Liên hệ',
        'ft_support': 'Hỗ Trợ', 'ft_faq': 'Hỏi Đáp', 'ft_shipping': 'Vận Chuyển', 'ft_contact2': 'Liên hệ',
        'ft_company': 'Công Ty', 'ft_about': 'Về chúng tôi', 'ft_blog': 'Blog', 'ft_careers': 'Tuyển dụng', 'ft_policies': 'Chính sách',
        'ft_sub_title': 'Đăng ký nhận tin', 'ft_sub_btn': 'Tham gia'
    },
    'fr': {
        'nav_home': 'Accueil', 'nav_shop': 'Boutique', 'nav_custom': 'Personnaliser', 'nav_about': 'À propos', 'nav_contact': 'Contact', 'nav_blog': 'Blog',
        'hero_title': 'Créez des Cadeaux Émotionnels Uniques, Faits Main avec Amour',
        'hero_subtitle': 'Personnalisez chaque détail de vos figurines en bois và khung tranh.',
        'btn_start': 'Personnaliser maintenant', 'btn_explore': 'Voir les produits',
        'cat_dolls': 'Figurines en bois', 'cat_frames': 'Fonds de cadres', 'cat_accessories': 'Accessoires', 'cat_addons': 'Détails suppl.',
        'step1_title': 'Choisir le modèle de base', 'step1_desc': 'Choisissez la taille et l\'espace de fond.',
        'step2_title': 'Personnaliser les personnages', 'step2_desc': 'Donnez vie à votre propre histoire.',
        'step3_title': 'Aperçu 3D', 'step3_desc': 'Une expérience visuelle immersive.',
        'step4_title': 'Commander et recevoir', 'step4_desc': 'Livraison directement chez vous.',
        'blog_title': 'Communauté : Partage de Souvenirs',
        'b1_title': 'Un cadeau d\'anniversaire intemporel', 'b1_desc': 'Témoignage d\'un client sur un cadeau qui lie les générations...',
        'b2_title': 'Le voyage de la création', 'b2_desc': 'D\'un morceau de bois à la magie de la personnalisation...',
        'b3_title': 'Une figurine pour David', 'b3_desc': 'Concevoir la joie pour une occasion très spéciale...',
        'b4_title': 'Liam et Anya : L\'art qui efface les distances', 'b4_desc': 'Une histoire d\'amour qui guérit par-delà les frontières...',
        'why_title': 'POURQUOI CHOISIR MODOLL ?',
        'w1_title': 'Bois : Chaleur et Longévité',
        'w2_title': 'Expérience de personnalisation ultime',
        'w3_title': 'Connexion émotionnelle profonde',
        'preview_title': 'Découvrez votre création maintenant - d\'une simplicité surprenante !', 'btn_try': 'Essayer maintenant',
        'rev_title': 'Histoires de nos Clients', 
        'r1_text': '"J’ai commandé un couple de poupées pour notre 10ᵉ anniversaire de mariage, et c’est le cadeau le plus émouvant que nous ayons jamais reçu. La minutie dans chaque detail des tenues et la manière dont les expressions du sourire sont reproduites sur le bois nous ont vraiment émerveillés. C’est devenu la pièce maîtresse de notre maison."', 
        'r2_text': '"Trouver un cadeau qui représente toute la famille était vraiment difficile, jusqu’à ce que je découvre Modoll. Les artisans ont travaillé sans relâche pour recréer fidèlement notre photo de remise de diplôme, jusque dans les moindres détails. Chaque fois que je la regarde, je me rappelle ce jour rempli de fierté."',
        'r3_text': '"La qualité et le raffinement de ces poupées dépassent largement mes attentes. J’ai acheté un ensemble pour le mariage de ma meilleure amie et elle en a eu les larmes aux yeux de bonheur. Ce n’est pas seulement du bois ; c’est un moment d’amour conservé pour toujours. C’est vraiment magnifique !"',
        'r1_name': 'Ngoc Hai', 'r2_name': 'Hong Ngoc', 'r3_name': 'Minh Thuy',
        'ba_before': 'Avant (Photo)', 'ba_after': 'Après (Produit)',
        'c_title': 'Artisanat & Matériaux',
        'c1': 'Bois de Qualité', 'c1_sub': '(Durable)', 'c2': 'Peint à la Main', 'c2_sub': '(Précision)',
        'c3': 'Protection Optimale', 'c3_sub': '(Anti-ternissement)', 'c4': 'Coffret Cadeau', 'c4_sub': '(Prêt à offrir)',
        'i_title': 'Idées Cadeaux & Inspiration', 'i1_title': '5 façons uniques de personnaliser vos figurines', 'i2_title': 'Comment créer un cadre mémorable',
        'idx': 'Découvrez comment transformer vos souvenirs en œuvres d\'art...',
        'f_title': 'Êtes-vous prêt à créer votre propre cadeau ?', 'f_desc': 'Concevez vos propres figurines en bois selon votre style !',
        'f_btn': 'DESIGNER MAINTENANT',
        'ft_shop': 'Boutique', 'ft_dolls': 'Figurines', 'ft_frames': 'Cadres', 'ft_items': 'Accessoires', 'ft_themes': 'Thèmes', 'ft_contact': 'Contact',
        'ft_support': 'Assistance', 'ft_faq': 'FAQ', 'ft_shipping': 'Livraison', 'ft_contact2': 'Contact',
        'ft_company': 'Entreprise', 'ft_about': 'À propos', 'ft_blog': 'Blog', 'ft_careers': 'Carrières', 'ft_policies': 'Politiques',
        'ft_sub_title': 'S\'inscrire aux actualités', 'ft_sub_btn': 'Rejoindre'
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

/* REVIEWS SLIDER INTERACTION - INFINITE LOOP */
(function initReviewSlider() {
    const slider = document.getElementById('reviewSlider');
    if (!slider) return;

    const track = slider.querySelector('.review-track');
    let isDragging = false;
    let startX = 0;
    let currentTranslate = 0;
    let previousTranslate = 0;
    let currentIndex = 0;
    let autoSlideInterval;

    // We have 6 slides (2 sets of 3)
    const totalSlides = 6;
    const slideWidth = 100 / totalSlides;

    slider.addEventListener('mousedown', dragStart);
    slider.addEventListener('touchstart', dragStart);
    slider.addEventListener('mouseup', dragEnd);
    slider.addEventListener('mouseleave', dragEnd);
    slider.addEventListener('touchend', dragEnd);
    slider.addEventListener('mousemove', drag);
    slider.addEventListener('touchmove', drag);

    function dragStart(event) {
        isDragging = true;
        startX = getPositionX(event);
        clearInterval(autoSlideInterval);
        track.style.transition = 'none';
        slider.style.cursor = 'grabbing';
    }

    function drag(event) {
        if (isDragging) {
            const currentPosition = getPositionX(event);
            currentTranslate = previousTranslate + currentPosition - startX;
            track.style.transform = `translateX(${currentTranslate}px)`;
        }
    }

    function dragEnd() {
        isDragging = false;
        slider.style.cursor = 'grab';
        track.style.transition = 'transform 0.5s ease-out';

        const movedBy = currentTranslate - previousTranslate;
        if (movedBy < -100) currentIndex += 1;
        if (movedBy > 100) currentIndex -= 1;

        updateSliderPosition();
        startAutoSlide();
    }

    function updateSliderPosition() {
        // Seamless Loop Logic
        if (currentIndex < 0) {
            // If dragging past start, jump to second set
            track.style.transition = 'none';
            currentIndex = 2; // Index of last unique slide in first set (0, 1, 2)
            setTranslateByIndex();
            // Then let the transition happen if called from drag
            setTimeout(() => {
                track.style.transition = 'transform 0.5s ease-out';
            }, 10);
        } else if (currentIndex >= 3) {
            // If dragging past first set, it's fine, but if it reaches 4, 5, 
            // after the transition to say index 3 (which is slide 1 copy), we reset
            setTranslateByIndex();
            
            // Wait for transition to finish
            if (currentIndex === 3) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentIndex = 0;
                    setTranslateByIndex();
                }, 500);
            }
        } else {
            setTranslateByIndex();
        }
    }

    function setTranslateByIndex() {
        currentTranslate = currentIndex * -(slider.offsetWidth);
        previousTranslate = currentTranslate;
        track.style.transform = `translateX(${currentTranslate}px)`;
    }

    function getPositionX(event) {
        return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
    }

    function startAutoSlide() {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(() => {
            currentIndex++;
            track.style.transition = 'transform 0.5s ease-out';
            setTranslateByIndex();

            if (currentIndex === 3) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentIndex = 0;
                    setTranslateByIndex();
                }, 500);
            }
        }, 5000);
    }

    startAutoSlide();
})();
