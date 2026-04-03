/**
 * Customize studio — i18n + bước + mood board + preview (CSS variables).
 */
const customTexts = {
    en: {
        nav_home: 'HOME',
        nav_shop: 'SHOP',
        nav_custom: 'CUSTOMIZE',
        nav_about: 'ABOUT US',
        nav_contact: 'CONTACT',
        nav_blog: 'BLOG',
        cu_title: 'DOLL CUSTOMIZE STUDIO',
        cu_intro: 'Pick a mood, walk through each step, and watch your wooden doll preview update. Save your draft to continue later.',
        cu_preview_hint: 'Preview — final wood carving may vary slightly.',
        cu_mood: 'Mood & palette',
        cu_step1: '1. Base',
        cu_step2: '2. Face',
        cu_step3: '3. Hair',
        cu_step4: '4. Outfit',
        cu_step5: '5. Review',
        'p1_title': 'Doll base',
        'p1_desc': 'Choose the scale of your set — we carve from a single plank story.',
        'p1_shape': 'Body silhouette',
        'p1_shape_desc': 'Cylindrical peg or tapered cone — like classic wooden blanks.',
        'opt_shape_pillar': 'Cylinder',
        'opt_shape_cone': 'Triangle / cone',
        'p2_title': 'Face expression',
        'p2_desc': 'Soft smile or playful wink — matches your frame story.',
        'p3_title': 'Hair style',
        'p3_desc': 'Silhouette for carving reference — final wood tone follows your mood board.',
        'p4_title': 'Outfit theme',
        'p4_desc': 'Color block for preview — embroidery details in checkout.',
        'p5_title': 'Summary',
        'p5_desc': 'Review your choices. Add to cart will open when the shop goes live.',
        'opt_single': 'Single doll',
        'opt_couple': 'Couple pair',
        'opt_family': 'Family set',
        'opt_smile': 'Warm smile',
        'opt_wink': 'Playful wink',
        'opt_calm': 'Calm eyes',
        'opt_h1': 'Long waves',
        'opt_h2': 'Bob cut',
        'opt_h3': 'Curly',
        'opt_h4': 'Short crop',
        'opt_o1': 'Pastel pink',
        'opt_o2': 'Mint garden',
        'opt_o3': 'Cream classic',
        'opt_o4': 'Natural wood',
        'sum_label': 'Estimated from',
        'sum_note': 'Final quote after size & frame add-ons.',
        'btn_reset': 'Reset draft',
        'btn_next_frame': 'Frame & add-ons',
        'btn_cart': 'Add to cart',
        'btn_cart_hint': 'Coming soon',
        fc_title: 'Enhance your product',
        fc_sub: 'Add special touches to make your product more meaningful and unique.',
        bc_product: 'Product',
        bc_doll: 'Doll',
        bc_bg: 'Background',
        bc_frame: 'Frame',
        bc_enhance: 'Enhance',
        bc_checkout: 'Checkout',
        intro_eyebrow: 'modoll studio',
        intro_title: 'Craft your wooden story',
        intro_lead:
            'Design a peg doll, then dress up the frame — one gentle flow, two chapters. Use the steps above or start below.',
        intro_cap1: 'Warm wood grain',
        intro_cap2: 'Hand-finished detail',
        intro_cap3: 'Frames that feel like home',
        intro_cta_doll: 'Start with doll',
        fc_mood: 'Mood & palette',
        fc_preview: 'Live preview',
        fc_preview_led: 'LED lighting (glowing aura)',
        fc_preview_hint: 'Live preview updates instantly.',
        s1_title: 'Background',
        s1_presets: 'Presets',
        s1_upload: 'Upload your image',
        s1_ai_ph: 'Describe your dream background…',
        s1_ai_btn: 'Generate background',
        s2_title: 'Frame',
        s2_mat_natural: 'Natural wood',
        s2_mat_dark: 'Dark wood',
        s2_mat_painted: 'Black / white',
        s2_glass: 'Glass protection',
        s2_premium: 'Premium finishing',
        s3_title: 'Lighting',
        s3_led: 'Add LED lighting',
        s3_warm: 'Warm light',
        s3_cool: 'Cool light',
        s4_title: 'Engraving & message',
        s4_font: 'Font style',
        font_default: 'Handwritten',
        font_serif: 'Classic serif',
        font_round: 'Rounded',
        s5_title: 'Gift packaging',
        pack_std: 'Standard (free)',
        pack_prem: 'Premium box',
        pack_card: 'Greeting card',
        sum_title: 'Order summary',
        line_base: 'Base product',
        line_bg: 'Background',
        line_frame: 'Frame upgrade',
        line_led: 'LED',
        line_engrave: 'Engraving',
        line_pack: 'Gift packaging',
        line_total: 'Total',
        btn_checkout: 'Continue to checkout',
        btn_back: 'Back to doll studio',
        suggest: 'Popular combo: LED + premium gift box',
        'ft_shop': 'SHOP',
        'ft_dolls': 'Dolls',
        'ft_frames': 'Frames',
        'ft_items': 'Items',
        'ft_themes': 'Themes',
        'ft_contact': 'Contact Us',
        'ft_support': 'SUPPORT',
        'ft_faq': 'FAQ',
        'ft_shipping': 'Shipping',
        'ft_contact2': 'Contact',
        'ft_company': 'COMPANY',
        'ft_about': 'About Us',
        'ft_blog': 'Blog',
        'ft_careers': 'Careers',
        'ft_policies': 'Policies',
        'ft_sub_title': 'Subscribe for Updates & Offers.',
        'ft_sub_btn': 'Join Now'
    },
    vi: {
        nav_home: 'TRANG CHỦ',
        nav_shop: 'CỬA HÀNG',
        nav_custom: 'TÙY CHỈNH',
        nav_about: 'VỀ CHÚNG TÔI',
        nav_contact: 'LIÊN HỆ',
        nav_blog: 'BLOG',
        cu_title: 'XƯỞNG TÙY CHỈNH BÚP BÊ',
        cu_intro: 'Chọn mood, hoàn thành từng bước và xem bản xem trước búp bê gỗ thay đổi. Lưu nháp để tiếp tục sau.',
        cu_preview_hint: 'Xem trước — chi tiết đục gỗ thực tế có thể lệch nhẹ.',
        cu_mood: 'Mood & bảng màu',
        cu_step1: '1. Nền',
        cu_step2: '2. Mặt',
        cu_step3: '3. Tóc',
        cu_step4: '4. Trang phục',
        cu_step5: '5. Tóm tắt',
        p1_title: 'Kiểu bộ',
        p1_desc: 'Chọn quy mô — chúng tôi đục từ một câu chuyện trên tấm gỗ.',
        p1_shape: 'Dáng thân búp bê',
        p1_shape_desc: 'Dáng trụ (thẳng) hoặc dáng tam giác / thân thuôn — giống phôi gỗ cổ điển.',
        opt_shape_pillar: 'Dáng trụ',
        opt_shape_cone: 'Dáng tam giác (nón)',
        p2_title: 'Biểu cảm',
        p2_desc: 'Cười nhẹ hay nháy mắt tinh nghịch — phù hợp khung tranh của bạn.',
        p3_title: 'Kiểu tóc',
        p3_desc: 'Hình khối tham chiếu — tông gỗ cuối theo mood board.',
        p4_title: 'Tông trang phục',
        p4_desc: 'Khối màu xem trước — chi tiết thêu khi đặt hàng.',
        p5_title: 'Tóm tắt',
        p5_desc: 'Xem lại lựa chọn. Giỏ hàng mở khi cửa hàng sẵn sàng.',
        opt_single: 'Một búp bê',
        opt_couple: 'Cặp đôi',
        opt_family: 'Gia đình',
        opt_smile: 'Cười ấm',
        opt_wink: 'Nháy mắt',
        opt_calm: 'Dịu mắt',
        opt_h1: 'Tóc dài sóng',
        opt_h2: 'Tóc bob',
        opt_h3: 'Xoăn',
        opt_h4: 'Tóc ngắn',
        opt_o1: 'Hồng pastel',
        opt_o2: 'Mint vườn',
        opt_o3: 'Kem cổ điển',
        opt_o4: 'Gỗ tự nhiên',
        sum_label: 'Ước tính từ',
        sum_note: 'Báo giá cuối sau khi chọn khung & kích thước.',
        btn_reset: 'Xóa nháp',
        btn_next_frame: 'Khung & phụ kiện',
        btn_cart: 'Thêm vào giỏ',
        btn_cart_hint: 'Sắp ra mắt',
        fc_title: 'Nâng cấp sản phẩm',
        fc_sub: 'Thêm các chi tiết đặc biệt để món quà ý nghĩa và độc nhất hơn.',
        bc_product: 'Sản phẩm',
        bc_doll: 'Búp bê',
        bc_bg: 'Nền',
        bc_frame: 'Khung',
        bc_enhance: 'Nâng cấp',
        bc_checkout: 'Thanh toán',
        intro_eyebrow: 'xưởng modoll',
        intro_title: 'Kể câu chuyện gỗ của bạn',
        intro_lead:
            'Thiết kế búp bê chốt gỗ, rồi trang trí khung — một dòng chảy nhẹ, hai chương. Chọn bước phía trên hoặc bắt đầu bên dưới.',
        intro_cap1: 'Vân gỗ ấm',
        intro_cap2: 'Chi tiết hoàn thiện tay',
        intro_cap3: 'Khung như mái nhà',
        intro_cta_doll: 'Bắt đầu với búp bê',
        fc_mood: 'Mood & bảng màu',
        fc_preview: 'Xem trước trực tiếp',
        fc_preview_led: 'Đèn LED (vầng sáng)',
        fc_preview_hint: 'Bản xem trước cập nhật ngay.',
        s1_title: 'Nền',
        s1_presets: 'Mẫu có sẵn',
        s1_upload: 'Tải ảnh lên',
        s1_ai_ph: 'Mô tả nền mong muốn…',
        s1_ai_btn: 'Tạo nền',
        s2_title: 'Khung',
        s2_mat_natural: 'Gỗ tự nhiên',
        s2_mat_dark: 'Gỗ sẫm',
        s2_mat_painted: 'Đen / trắng',
        s2_glass: 'Kính bảo vệ',
        s2_premium: 'Hoàn thiện cao cấp',
        s3_title: 'Ánh sáng',
        s3_led: 'Thêm đèn LED',
        s3_warm: 'Ánh sáng ấm',
        s3_cool: 'Ánh sáng lạnh',
        s4_title: 'Khắc chữ & lời nhắn',
        s4_font: 'Kiểu chữ',
        font_default: 'Viết tay',
        font_serif: 'Serif cổ điển',
        font_round: 'Bo tròn',
        s5_title: 'Gói quà',
        pack_std: 'Tiêu chuẩn (miễn phí)',
        pack_prem: 'Hộp cao cấp',
        pack_card: 'Thiệp chúc',
        sum_title: 'Tóm tắt đơn hàng',
        line_base: 'Sản phẩm gốc',
        line_bg: 'Nền',
        line_frame: 'Nâng cấp khung',
        line_led: 'LED',
        line_engrave: 'Khắc chữ',
        line_pack: 'Gói quà',
        line_total: 'Tổng cộng',
        btn_checkout: 'Tiếp tục thanh toán',
        btn_back: 'Quay lại xưởng búp bê',
        suggest: 'Gợi ý: LED + hộp quà cao cấp',
        ft_shop: 'CỬA HÀNG',
        ft_dolls: 'Búp bê',
        ft_frames: 'Khung',
        ft_items: 'Khác',
        ft_themes: 'Chủ đề',
        ft_contact: 'Liên hệ',
        ft_support: 'HỖ TRỢ',
        ft_faq: 'Hỏi đáp',
        ft_shipping: 'Vận chuyển',
        ft_contact2: 'Liên hệ',
        ft_company: 'CÔNG TY',
        ft_about: 'Về chúng tôi',
        ft_blog: 'Blog',
        ft_careers: 'Tuyển dụng',
        ft_policies: 'Chính sách',
        ft_sub_title: 'Đăng ký nhận tin',
        ft_sub_btn: 'Tham gia'
    },
    fr: {
        nav_home: 'ACCUEIL',
        nav_shop: 'BOUTIQUE',
        nav_custom: 'PERSONNALISER',
        nav_about: 'À PROPOS',
        nav_contact: 'CONTACT',
        nav_blog: 'BLOG',
        cu_title: 'ATELIER POUPÉE SUR MESURE',
        cu_intro: 'Choisissez une ambiance, suivez les étapes et voyez l’aperçu évoluer. Sauvegardez votre brouillon pour plus tard.',
        cu_preview_hint: 'Aperçu — la gravure finale bois peut varier légèrement.',
        cu_mood: 'Ambiance & palette',
        cu_step1: '1. Base',
        cu_step2: '2. Visage',
        cu_step3: '3. Cheveux',
        cu_step4: '4. Tenue',
        cu_step5: '5. Récap',
        p1_title: 'Base de la poupée',
        p1_desc: 'Échelle du set — sculpté depuis une même planche.',
        p1_shape: 'Silhouette du corps',
        p1_shape_desc: 'Corps cylindrique ou cône — comme les pions en bois bruts.',
        opt_shape_pillar: 'Cylindre',
        opt_shape_cone: 'Triangle / cône',
        p2_title: 'Expression',
        p2_desc: 'Sourire doux ou clin d’œil — selon votre histoire.',
        p3_title: 'Coiffure',
        p3_desc: 'Silhouette pour la gravure — teinte bois selon la palette.',
        p4_title: 'Thème tenue',
        p4_desc: 'Bloc couleur d’aperçu — broderie à la commande.',
        p5_title: 'Résumé',
        p5_desc: 'Vérifiez vos choix. Panier bientôt disponible.',
        opt_single: 'Poupée seule',
        opt_couple: 'Couple',
        opt_family: 'Famille',
        opt_smile: 'Sourire doux',
        opt_wink: 'Clin d’œil',
        opt_calm: 'Regard calme',
        opt_h1: 'Longues vagues',
        opt_h2: 'Carré plongeant',
        opt_h3: 'Bouclés',
        opt_h4: 'Court',
        opt_o1: 'Rose pastel',
        opt_o2: 'Jardin mint',
        opt_o3: 'Crème classique',
        opt_o4: 'Bois naturel',
        sum_label: 'À partir de',
        sum_note: 'Devis final après cadre et taille.',
        btn_reset: 'Réinitialiser',
        btn_next_frame: 'Cadre & options',
        btn_cart: 'Ajouter au panier',
        btn_cart_hint: 'Bientôt',
        fc_title: 'Enhancez votre produit',
        fc_sub: 'Ajoutez des touches spéciales pour un cadeau plus unique et significatif.',
        bc_product: 'Produit',
        bc_doll: 'Poupée',
        bc_bg: 'Fond',
        bc_frame: 'Cadre',
        bc_enhance: 'Options',
        bc_checkout: 'Paiement',
        intro_eyebrow: 'atelier modoll',
        intro_title: 'Votre histoire en bois',
        intro_lead:
            'Créez la poupée, puis le cadre — un flux doux, deux chapitres. Utilisez les étapes ci-dessus ou commencez ici.',
        intro_cap1: 'Bois chaleureux',
        intro_cap2: 'Finitions artisanales',
        intro_cap3: 'Cadres comme à la maison',
        intro_cta_doll: 'Commencer par la poupée',
        fc_mood: 'Ambiance & palette',
        fc_preview: 'Aperçu en direct',
        fc_preview_led: 'Éclairage LED (aura)',
        fc_preview_hint: 'L’aperçu se met à jour instantanément.',
        s1_title: 'Fond',
        s1_presets: 'Préréglages',
        s1_upload: 'Téléverser une image',
        s1_ai_ph: 'Décrivez le fond souhaité…',
        s1_ai_btn: 'Générer le fond',
        s2_title: 'Cadre',
        s2_mat_natural: 'Bois naturel',
        s2_mat_dark: 'Bois foncé',
        s2_mat_painted: 'Noir / blanc',
        s2_glass: 'Protection verre',
        s2_premium: 'Finition premium',
        s3_title: 'Éclairage',
        s3_led: 'Ajouter LED',
        s3_warm: 'Lumière chaude',
        s3_cool: 'Lumière froide',
        s4_title: 'Gravure & message',
        s4_font: 'Style de police',
        font_default: 'Écriture manuscrite',
        font_serif: 'Serif classique',
        font_round: 'Arrondie',
        s5_title: 'Emballage cadeau',
        pack_std: 'Standard (gratuit)',
        pack_prem: 'Coffret premium',
        pack_card: 'Carte message',
        sum_title: 'Récapitulatif',
        line_base: 'Produit de base',
        line_bg: 'Fond',
        line_frame: 'Cadre',
        line_led: 'LED',
        line_engrave: 'Gravure',
        line_pack: 'Emballage',
        line_total: 'Total',
        btn_checkout: 'Continuer vers le paiement',
        btn_back: 'Retour à l’atelier',
        suggest: 'Combo populaire : LED + coffret premium',
        ft_shop: 'BOUTIQUE',
        ft_dolls: 'Poupées',
        ft_frames: 'Cadres',
        ft_items: 'Articles',
        ft_themes: 'Thèmes',
        ft_contact: 'Nous contacter',
        ft_support: 'AIDE',
        ft_faq: 'FAQ',
        ft_shipping: 'Livraison',
        ft_contact2: 'Contact',
        ft_company: 'ENTREPRISE',
        ft_about: 'À propos',
        ft_blog: 'Blog',
        ft_careers: 'Carrières',
        ft_policies: 'Politiques',
        ft_sub_title: 'Offres & infos',
        ft_sub_btn: 'S’inscrire'
    }
};

const STORAGE_KEY = 'modoll-custom-draft';

const PALETTES = {
    cream: { skin: '#f5e6d3', hair: '#5c4033', outfit: '#fed8e3' },
    brown: { skin: '#e8d4c4', hair: '#3d2a24', outfit: '#b5d1c1' },
    pink: { skin: '#fce8dc', hair: '#6b4a3e', outfit: '#fed8e3' },
    mint: { skin: '#f0f5e8', hair: '#4a3d2e', outfit: '#b5d1c1' },
    white: { skin: '#fff5eb', hair: '#5c4033', outfit: '#fcfee8' }
};

const PRICES = { base: { single: 199000, couple: 359000, family: 599000 }, face: 0, hair: 0, outfit: 0 };

function setLanguage(lang) {
    if (typeof modollApplyLangUI === 'function') modollApplyLangUI(lang);
    const t = customTexts[lang] || customTexts.en;
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
        const key = el.getAttribute('data-i18n-placeholder');
        if (t[key]) el.setAttribute('placeholder', t[key]);
    });
    var fontSel = document.getElementById('fcFont');
    if (fontSel && t.font_default) {
        var opts = fontSel.querySelectorAll('option');
        if (opts[0]) opts[0].textContent = t.font_default;
        if (opts[1]) opts[1].textContent = t.font_serif;
        if (opts[2]) opts[2].textContent = t.font_round;
    }
    if (typeof window.modollCustomUpdateReview === 'function') window.modollCustomUpdateReview();
    if (typeof window.modollCustomUpdateBreadcrumb === 'function') window.modollCustomUpdateBreadcrumb();
}
window.setLanguage = setLanguage;

/** Kéo / bánh xe trên thanh breadcrumb: cuộn nội dung thanh sang ngang, không lướt trang dọc. */
function setupStudioFlowNavScroll() {
    var nav = document.querySelector('.fc-breadcrumb.studio-flow-nav');
    if (!nav) return;
    nav.addEventListener(
        'wheel',
        function (e) {
            var dy = e.deltaY;
            var dx = e.deltaX;
            if (Math.abs(dx) >= Math.abs(dy)) return;
            if (nav.scrollWidth <= nav.clientWidth) return;
            nav.scrollLeft += dy;
            e.preventDefault();
        },
        { passive: false }
    );
}

function getLang() {
    return typeof modollGetSavedLang === 'function' ? modollGetSavedLang() : 'en';
}

function initCustomize() {
    const root = document.getElementById('studio-doll');
    if (!root) return;
    const figure = root.querySelector('.doll-figure');
    if (!figure) return;

    const stepBtns = root.querySelectorAll('.custom-step-btn');
    const panels = root.querySelectorAll('.custom-panel');
    const swatches = root.querySelectorAll('.mood-swatch');
    const chips = root.querySelectorAll('.option-chip');
    const priceEl = document.getElementById('customPrice');
    const btnReset = document.getElementById('customReset');
    const btnCart = document.getElementById('customCart');

    let state = {
        step: 0,
        palette: 'pink',
        base: 'single',
        shape: 'pillar',
        face: 'smile',
        hair: 'bob',
        outfit: 'pink'
    };

    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const o = JSON.parse(raw);
            state = Object.assign(state, o);
        }
    } catch (e) {}

    const VALID = {
        palette: ['cream', 'brown', 'pink', 'mint', 'white'],
        base: ['single', 'couple', 'family'],
        shape: ['pillar', 'cone'],
        face: ['smile', 'wink', 'calm'],
        hair: ['long', 'bob', 'curly', 'short'],
        outfit: ['pink', 'mint', 'cream', 'wood']
    };

    function keepValid(key, fallback) {
        if (VALID[key].indexOf(state[key]) === -1) state[key] = fallback;
    }

    keepValid('palette', 'pink');
    keepValid('base', 'single');
    keepValid('shape', 'pillar');
    keepValid('face', 'smile');
    keepValid('hair', 'bob');
    keepValid('outfit', 'pink');
    if (!Number.isInteger(state.step)) state.step = 0;

    function applyPalette(key) {
        const p = PALETTES[key] || PALETTES.pink;
        figure.style.setProperty('--skin', p.skin);
        figure.style.setProperty('--hair', p.hair);
        if (state.outfit === 'pink' || state.outfit === 'mint' || state.outfit === 'cream' || state.outfit === 'wood') {
            const map = { pink: '#fed8e3', mint: '#b5d1c1', cream: '#fcfee8', wood: '#c4a574' };
            figure.style.setProperty('--outfit', map[state.outfit] || p.outfit);
        } else {
            figure.style.setProperty('--outfit', p.outfit);
        }
        swatches.forEach(function (s) {
            s.classList.toggle('is-picked', s.getAttribute('data-palette') === key);
        });
    }

    function applyHairClass() {
        const el = figure.querySelector('.doll-hair');
        if (!el) return;
        el.className = 'doll-hair peg-hair';
        if (state.hair === 'long') el.classList.add('style-long');
        else if (state.hair === 'bob') el.classList.add('style-bob');
        else if (state.hair === 'curly') el.classList.add('style-curly');
        else if (state.hair === 'short') el.classList.add('style-short');
    }

    function applyFaceClass() {
        const el = figure.querySelector('.doll-face');
        if (!el) return;
        el.className = 'doll-face peg-face';
        if (state.face === 'wink') el.classList.add('expression-wink');
        else if (state.face === 'calm') el.classList.add('expression-soft');
        else el.classList.add('expression-soft');
        if (state.face === 'wink') {
            el.innerHTML = '<i class="fa-solid fa-face-grin-wink"></i>';
        } else if (state.face === 'calm') {
            el.innerHTML = '<i class="fa-solid fa-face-meh"></i>';
        } else {
            el.innerHTML = '<i class="fa-solid fa-face-smile"></i>';
        }
    }

    function applyBodyClass() {
        const el = figure.querySelector('.doll-body');
        el.className = 'doll-body peg-body';
        el.innerHTML = '<span class="peg-body-tint" aria-hidden="true"></span>';
        if (state.shape === 'cone') el.classList.add('peg-body--cone');
        else el.classList.add('peg-body--cylinder');
        if (state.base === 'family') el.classList.add('size-tall');
        else if (state.base === 'single') el.classList.add('size-mini');
    }

    function outfitColor() {
        const map = { pink: '#fed8e3', mint: '#b5d1c1', cream: '#fcfee8', wood: '#c4a574' };
        figure.style.setProperty('--outfit', map[state.outfit] || '#fed8e3');
    }

    function calcPrice() {
        let total = PRICES.base[state.base] || PRICES.base.single;
        if (priceEl) priceEl.textContent = total.toLocaleString('vi-VN') + ' VND';
    }

    function persist() {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        } catch (e) {}
    }

    function setStep(i) {
        const safe = Math.max(0, Math.min(stepBtns.length - 1, Number(i) || 0));
        state.step = safe;
        stepBtns.forEach(function (b, idx) {
            b.classList.toggle('is-active', idx === safe);
        });
        panels.forEach(function (p, idx) {
            p.classList.toggle('is-visible', idx === safe);
        });
        persist();
    }

    function updateReviewText() {
        const el = document.getElementById('customReviewSummary');
        if (!el) return;
        const lang = getLang();
        const t = customTexts[lang] || customTexts.en;
        const labels = {
            base: { single: t.opt_single, couple: t.opt_couple, family: t.opt_family },
            shape: { pillar: t.opt_shape_pillar, cone: t.opt_shape_cone },
            face: { smile: t.opt_smile, wink: t.opt_wink, calm: t.opt_calm },
            hair: { long: t.opt_h1, bob: t.opt_h2, curly: t.opt_h3, short: t.opt_h4 },
            outfit: { pink: t.opt_o1, mint: t.opt_o2, cream: t.opt_o3, wood: t.opt_o4 }
        };
        const parts = [
            labels.base[state.base],
            labels.shape[state.shape] || labels.shape.pillar,
            labels.face[state.face],
            labels.hair[state.hair],
            labels.outfit[state.outfit]
        ];
        el.textContent = parts.join(' · ');
    }

    window.modollCustomUpdateReview = updateReviewText;

    stepBtns.forEach(function (b, idx) {
        b.addEventListener('click', function () {
            setStep(idx);
        });
    });

    swatches.forEach(function (s) {
        s.addEventListener('click', function () {
            state.palette = s.getAttribute('data-palette');
            applyPalette(state.palette);
            outfitColor();
            persist();
        });
    });

    chips.forEach(function (chip) {
        chip.addEventListener('click', function () {
            const group = chip.dataset.group;
            const val = chip.dataset.value;
            root.querySelectorAll('.option-chip[data-group="' + group + '"]').forEach(function (c) {
                c.classList.remove('is-selected');
            });
            chip.classList.add('is-selected');
            if (group === 'base') state.base = val;
            else if (group === 'shape') state.shape = val;
            else if (group === 'face') state.face = val;
            else if (group === 'hair') state.hair = val;
            else if (group === 'outfit') state.outfit = val;
            applyHairClass();
            applyFaceClass();
            applyBodyClass();
            outfitColor();
            calcPrice();
            updateReviewText();
            persist();
        });
    });

    chips.forEach(function (chip) {
        chip.classList.remove('is-selected');
    });
    chips.forEach(function (chip) {
        const group = chip.dataset.group;
        if (
            (group === 'base' && chip.dataset.value === state.base) ||
            (group === 'shape' && chip.dataset.value === state.shape) ||
            (group === 'face' && chip.dataset.value === state.face) ||
            (group === 'hair' && chip.dataset.value === state.hair) ||
            (group === 'outfit' && chip.dataset.value === state.outfit)
        ) {
            chip.classList.add('is-selected');
        }
    });

    applyPalette(state.palette);
    applyHairClass();
    applyFaceClass();
    applyBodyClass();
    outfitColor();
    calcPrice();
    updateReviewText();
    setStep(state.step);

    if (btnReset) {
        btnReset.addEventListener('click', function () {
            localStorage.removeItem(STORAGE_KEY);
            state = { step: 0, palette: 'pink', base: 'single', shape: 'pillar', face: 'smile', hair: 'bob', outfit: 'pink' };
            chips.forEach(function (c) {
                c.classList.remove('is-selected');
            });
            root.querySelectorAll('.option-chip[data-group="base"][data-value="single"]')[0]?.classList.add('is-selected');
            root.querySelectorAll('.option-chip[data-group="shape"][data-value="pillar"]')[0]?.classList.add('is-selected');
            root.querySelectorAll('.option-chip[data-group="face"][data-value="smile"]')[0]?.classList.add('is-selected');
            root.querySelectorAll('.option-chip[data-group="hair"][data-value="bob"]')[0]?.classList.add('is-selected');
            root.querySelectorAll('.option-chip[data-group="outfit"][data-value="pink"]')[0]?.classList.add('is-selected');
            applyPalette('pink');
            state.palette = 'pink';
            swatches.forEach(function (s) {
                s.classList.toggle('is-picked', s.getAttribute('data-palette') === 'pink');
            });
            applyHairClass();
            applyFaceClass();
            applyBodyClass();
            outfitColor();
            calcPrice();
            updateReviewText();
            setStep(0);
        });
    }

    if (btnCart) {
        btnCart.addEventListener('click', function () {
            window.location.href = 'soon.html';
        });
    }
}

setLanguage(getLang());

/** Slide ngang: intro → doll → frame; breadcrumb & anchor đồng bộ hash. */
function setupCustomSlides() {
    var track = document.getElementById('customPageTrack');
    if (!track) return;

    var slides = 3;
    var current = 0;
    var slideIds = ['custom-intro', 'studio-doll', 'studio-frame'];
    var SLIDE_TRANSITION_MS = 520;
    var slideTransitionCleanup = null;

    var slideMap = {
        'custom-intro': 0,
        'studio-doll': 1,
        'studio-frame': 2,
        'sec-bg': 2,
        'sec-frame': 2,
        'sec-enhance': 2
    };

    function scrollToId(id) {
        var el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function updateBreadcrumb(i) {
        var nav = document.getElementById('customFlowNav');
        if (!nav) return;
        nav.querySelectorAll('[data-bc-slide]').forEach(function (el) {
            var si = parseInt(el.getAttribute('data-bc-slide'), 10);
            el.classList.toggle('is-bc-active', si === i);
        });
    }

    function setHash(id) {
        try {
            history.replaceState(null, '', '#' + id);
        } catch (e) {}
    }

    function updateSlideActive(i) {
        slideIds.forEach(function (id, idx) {
            var el = document.getElementById(id);
            if (!el) return;
            var on = idx === i;
            el.classList.toggle('custom-slide--active', on);
            el.setAttribute('aria-hidden', on ? 'false' : 'true');
        });
        var main = document.querySelector('.custom-page');
        if (main) main.classList.toggle('custom-page--product-slide', i === 0);
    }

    function clearSlideInView() {
        slideIds.forEach(function (id) {
            var el = document.getElementById(id);
            if (el) el.classList.remove('custom-slide--in-view');
        });
    }

    function setSlide(i, scrollAfterId) {
        i = Math.max(0, Math.min(slides - 1, i));
        var prev = current;
        current = i;

        if (slideTransitionCleanup) {
            slideTransitionCleanup();
            slideTransitionCleanup = null;
        }

        var reduced =
            typeof window.matchMedia === 'function' &&
            window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        if (prev === i) {
            clearSlideInView();
        } else if (!reduced) {
            slideIds.forEach(function (id, idx) {
                var el = document.getElementById(id);
                if (!el) return;
                el.classList.toggle('custom-slide--in-view', idx === prev || idx === i);
            });
        } else {
            clearSlideInView();
        }

        updateSlideActive(i);
        track.style.transform = 'translateX(-' + (i * 100) / slides + '%)';
        window.scrollTo(0, 0);
        updateBreadcrumb(i);
        if (scrollAfterId) {
            setHash(scrollAfterId);
        } else {
            setHash(slideIds[i]);
        }

        if (prev !== i && !reduced) {
            var done = false;
            function finishInView() {
                if (done) return;
                done = true;
                clearSlideInView();
                track.removeEventListener('transitionend', onTrEnd);
                clearTimeout(fallbackTimer);
                slideTransitionCleanup = null;
            }
            function onTrEnd(e) {
                if (!e || e.propertyName !== 'transform') return;
                finishInView();
            }
            var fallbackTimer = setTimeout(finishInView, SLIDE_TRANSITION_MS + 100);
            track.addEventListener('transitionend', onTrEnd);
            slideTransitionCleanup = finishInView;
        }

        if (scrollAfterId) {
            var scrollDelay =
                prev !== i && !reduced ? SLIDE_TRANSITION_MS + 50 : 0;
            setTimeout(function () {
                scrollToId(scrollAfterId);
            }, scrollDelay);
        }
    }

    function hashToSlide(hash) {
        if (!hash || hash === '#' || hash === '') {
            return { slide: 0, scroll: null };
        }
        var id = hash.charAt(0) === '#' ? hash.slice(1) : hash;
        if (!slideMap.hasOwnProperty(id)) {
            return { slide: 0, scroll: null };
        }
        var slide = slideMap[id];
        var scroll =
            id === 'sec-bg' || id === 'sec-frame' || id === 'sec-enhance' ? id : null;
        return { slide: slide, scroll: scroll };
    }

    document.addEventListener(
        'click',
        function (e) {
            var a = e.target.closest && e.target.closest('a[href]');
            if (!a) return;
            var href = (a.getAttribute('href') || '').trim();
            if (
                href === 'checkout.html' ||
                href.indexOf('http') === 0 ||
                href.indexOf('mailto:') === 0 ||
                href.indexOf('tel:') === 0
            ) {
                return;
            }
            if (!href.startsWith('#')) return;
            var id = href.slice(1);
            if (!slideMap.hasOwnProperty(id)) return;

            e.preventDefault();
            var targetSlide = slideMap[id];

            if (targetSlide === current) {
                if (id === 'sec-bg' || id === 'sec-frame' || id === 'sec-enhance') {
                    scrollToId(id);
                    setHash(id);
                    return;
                }
                window.scrollTo(0, 0);
                setHash(id);
                return;
            }

            var scrollAfter =
                id === 'sec-bg' || id === 'sec-frame' || id === 'sec-enhance' ? id : null;
            setSlide(targetSlide, scrollAfter);
        },
        true
    );

    window.addEventListener('hashchange', function () {
        var h = hashToSlide(window.location.hash);
        if (h.slide !== current) {
            setSlide(h.slide, h.scroll);
        } else if (h.scroll) {
            scrollToId(h.scroll);
        } else {
            window.scrollTo(0, 0);
        }
    });

    var h0 = hashToSlide(window.location.hash);
    setSlide(h0.slide, h0.scroll);

    window.modollCustomUpdateBreadcrumb = function () {
        updateBreadcrumb(current);
    };
}

function bootCustomPage() {
    setupCustomSlides();
    initCustomize();
    setupStudioFlowNavScroll();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', bootCustomPage);
} else {
    bootCustomPage();
}
