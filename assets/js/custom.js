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
        cu_title: 'DOLL CUSTOMIZATION STUDIO',
        cu_intro: 'Follow the steps below to customize your doll. Your draft is automatically saved.',
        cu_preview_hint: 'Preview — the final wood carving may vary slightly.',
        cu_mood: 'Mood & Palette',
        cu_step1: '1. Base',
        cu_step2: '2. Outfit',
        cu_step3: '3. Facial Features',
        cu_step4: '4. Review',
        'p1_title': 'Doll base',
        'p1_desc': 'Choose the scale of your set — we carve from a single plank story.',
        'p1_shape': 'Body silhouette',
        'p1_shape_desc': 'Cylindrical peg or tapered cone — like classic wooden blanks.',
        'opt_shape_pillar': 'Cylinder',
        'opt_shape_cone': 'Triangle / cone',
        'p2_title': 'Outfit theme',
        'p2_desc': 'Color block for preview — embroidery details in checkout.',
        'p3_title': 'Facial Features & Hair',
        'p3_desc': 'Customize your doll\'s facial features and hair.',
        'p4_title': 'Summary',
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
        sum_label: 'Starting from',
        sum_note: 'The final price will be calculated after selecting the frame and add-ons.',
        btn_reset: 'Reset Draft',
        btn_next_frame: 'Next: Frame & Add-ons',
        btn_cart: 'Add to Cart',
        btn_cart_hint: 'Coming soon',
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
        cu_title: 'XƯỞNG CHẾ TÁC BÚP BÊ',
        cu_intro: 'Làm theo các bước dưới đây để tuỳ chỉnh búp bê của bạn. Bản nháp của bạn sẽ được lưu tự động.',
        cu_preview_hint: 'Bản xem trước — chi tiết đục gỗ thực tế có thể thay đổi nhẹ.',
        cu_mood: 'Mood & bảng màu',
        cu_step1: '1. Đế',
        cu_step2: '2. Trang Phục',
        cu_step3: '3. Ngũ Quan',
        cu_step4: '4. Xem lại',
        p1_title: 'Kiểu bộ',
        p1_desc: 'Chọn quy mô — chúng tôi đục từ một câu chuyện trên tấm gỗ.',
        p1_shape: 'Dáng thân búp bê',
        p1_shape_desc: 'Dáng trụ (thẳng) hoặc dáng tam giác / thân thuôn — giống phôi gỗ cổ điển.',
        opt_shape_pillar: 'Dáng trụ',
        opt_shape_cone: 'Dáng tam giác (nón)',
        p2_title: 'Tông trang phục',
        p2_desc: 'Khối màu xem trước — chi tiết thêu khi đặt hàng.',
        p3_title: 'Ngũ quan & Tóc',
        p3_desc: 'Tùy chỉnh ngũ quan và kiểu tóc cho búp bê.',
        p4_title: 'Tóm tắt',
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
        sum_label: 'Giá từ',
        sum_note: 'Báo giá cuối cùng sẽ được tính sau khi chọn khung và phụ kiện.',
        btn_reset: 'Làm lại',
        btn_next_frame: 'Tiếp theo: Khung & Phụ kiện',
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
    const stage = document.getElementById('dollStage');
    if (!stage) return;

    const stepBtns = root.querySelectorAll('.custom-step-btn');
    const panels = root.querySelectorAll('.custom-panel');
    const btnReset = document.getElementById('customReset');
    const btnCart = document.getElementById('customCart');

    let state = {
        step: 0,
        base: 'MODEL BÚP BÊ NỮ.svg',
        features: {
            'EYEGLASS': null,
            'MẮT': null,
            'MÀY': null,
            'MIỆNG': null,
            'MŨI': null,
            'TÓC': null
        },
        outfit: null
    };

    function persist() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) {}
    }

    // Attempt to load from storage
    try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            const o = JSON.parse(raw);
            if (o.base) state.base = o.base;
            if (o.step !== undefined) state.step = o.step;
            if (o.features) state.features = o.features;
            if (o.outfit !== undefined) state.outfit = o.outfit;
        }
    } catch (e) {}

    function isMale() {
        return state.base && state.base.includes('NAM');
    }

    function renderStage() {
        stage.innerHTML = '';
        
        // If outfit is selected, it REPLACES the base
        if (state.outfit && state.outfit !== 'None') {
            const img = document.createElement('img');
            const folder = isMale() ? 'NAM' : 'NỮ';
            img.src = 'assets/doll_parts/' + encodeURIComponent(folder) + '/' + encodeURIComponent(state.outfit);
            img.className = 'layer-base outfit-as-base'; // Use cleaner class name
            stage.appendChild(img);
        } else {
            const img = document.createElement('img');
            img.src = 'assets/doll_parts/' + encodeURIComponent(state.base);
            img.className = 'layer-base';
            stage.appendChild(img);
        }
        
        ['TÓC', 'MÀY', 'MẮT', 'MŨI', 'MIỆNG', 'EYEGLASS'].forEach(k => {
            if (state.features[k]) {
                const img = document.createElement('img');
                let folder = k;
                if (k === 'TÓC') folder = isMale() ? 'TÓC NAM' : 'TÓC NỮ';
                let filename = state.features[k];
                img.src = 'assets/doll_parts/' + encodeURIComponent(folder) + '/' + encodeURIComponent(filename);
                let cls = k.toLowerCase().replace(' ', '-');
                if (cls === 'mắt') cls = 'eyes';
                if (cls === 'mày') cls = 'eyebrows';
                if (cls === 'mũi') cls = 'nose';
                if (cls === 'miệng') cls = 'mouth';
                if (cls === 'tóc') cls = 'hair';
                img.className = 'layer-' + cls;
                stage.appendChild(img);
            }
        });
    }

    function renderBasePanel() {
        const container = document.getElementById('dollBaseList');
        if (!container) return;
        container.innerHTML = '';
        DOLL_ASSETS.base.forEach(b => {
             // We only want SVGs for cleaner looking vector or PNGs, let's filter out dups if any, but let just show all or just SVGs
             if (b.endsWith('.png')) return; // Prefer SVGs
             const isSelected = state.base === b;
             const chip = document.createElement('button');
             chip.type = 'button';
             chip.className = 'option-chip' + (isSelected ? ' is-selected' : '');
             chip.innerHTML = '<img src="assets/doll_parts/' + encodeURIComponent(b) + '" style="height:60px;margin-bottom:8px;object-fit:contain;"><span>' + b.replace('.svg','') + '</span>';
             chip.onclick = () => {
                 state.base = b;
                 state.features = { 'EYEGLASS': null, 'MẮT': null, 'MÀY': null, 'MIỆNG': null, 'MŨI': null, 'TÓC': null };
                 state.outfit = null;
                 persist();
                 renderAll();
             };
             container.appendChild(chip);
        });
    }

    function renderFacePanel() {
        const container = document.getElementById('faceAccordion');
        if (!container) return;
        container.innerHTML = '';
        const order = ['TÓC', 'MÀY', 'MẮT', 'MŨI', 'MIỆNG', 'EYEGLASS'];
        order.forEach(k => {
            const folder = k === 'TÓC' ? (isMale() ? 'TÓC NAM' : 'TÓC NỮ') : k;
            const items = DOLL_ASSETS.face[folder] || [];
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'accordion-item';
            
            const header = document.createElement('button');
            header.className = 'accordion-header';
            header.innerHTML = '<span>' + k + ' (' + items.length + ')</span> <i class="fa-solid fa-chevron-down"></i>';
            
            const content = document.createElement('div');
            content.className = 'accordion-content';
            
            const grid = document.createElement('div');
            grid.className = 'option-grid';
            
            // "None" option
            const noneChip = document.createElement('button');
            noneChip.className = 'option-chip' + (!state.features[k] ? ' is-selected' : '');
            noneChip.innerHTML = '<i class="fa-solid fa-ban"></i><span>None</span>';
            noneChip.onclick = () => {
                grid.querySelectorAll('.option-chip').forEach(c => c.classList.remove('is-selected'));
                noneChip.classList.add('is-selected');
                state.features[k] = null; persist(); renderStage(); updateReviewText();
            };
            grid.appendChild(noneChip);

            items.forEach(file => {
                const isPicked = state.features[k] === file;
                const chip = document.createElement('button');
                chip.className = 'option-chip' + (isPicked ? ' is-selected' : '');
                chip.innerHTML = '<img src="assets/doll_parts/' + encodeURIComponent(folder) + '/' + encodeURIComponent(file) + '" style="max-height:40px;margin-bottom:8px;object-fit:contain;"><span>' + file.replace('.png','') + '</span>';
                chip.onclick = () => {
                    grid.querySelectorAll('.option-chip').forEach(c => c.classList.remove('is-selected'));
                    chip.classList.add('is-selected');
                    state.features[k] = file; persist(); renderStage(); updateReviewText();
                };
                grid.appendChild(chip);
            });
            content.appendChild(grid);
            itemDiv.appendChild(header);
            itemDiv.appendChild(content);
            container.appendChild(itemDiv);

            header.onclick = () => {
                const isOpen = header.classList.contains('is-open');
                if (!isOpen) {
                    header.classList.add('is-open');
                    itemDiv.classList.add('is-open');
                } else {
                    header.classList.remove('is-open');
                    itemDiv.classList.remove('is-open');
                }
            };
        });
    }

    function renderOutfitPanel() {
        const container = document.getElementById('outfitList');
        if (!container) return;
        container.innerHTML = '';
        const folder = isMale() ? 'NAM' : 'NỮ';
        const items = DOLL_ASSETS.outfit[folder] || [];

        const noneChip = document.createElement('button');
        noneChip.className = 'option-chip' + (!state.outfit ? ' is-selected' : '');
        noneChip.innerHTML = '<i class="fa-solid fa-ban"></i><span>None</span>';
        noneChip.onclick = () => {
            container.querySelectorAll('.option-chip').forEach(c => c.classList.remove('is-selected'));
            noneChip.classList.add('is-selected');
            state.outfit = null; persist(); renderStage(); updateReviewText();
        };
        container.appendChild(noneChip);

        items.forEach(file => {
             const isSelected = state.outfit === file;
             const chip = document.createElement('button');
             chip.type = 'button';
             chip.className = 'option-chip' + (isSelected ? ' is-selected' : '');
             chip.innerHTML = '<img src="assets/doll_parts/' + encodeURIComponent(folder) + '/' + encodeURIComponent(file) + '" style="height:60px;margin-bottom:8px;object-fit:contain;"><span>' + file.replace('.png','') + '</span>';
             chip.onclick = () => {
                 container.querySelectorAll('.option-chip').forEach(c => c.classList.remove('is-selected'));
                 chip.classList.add('is-selected');
                 state.outfit = file; persist(); renderStage(); updateReviewText();
             };
             container.appendChild(chip);
        });
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
        el.innerHTML = '';
        const li1 = document.createElement('li'); li1.innerText = 'Base: ' + (state.base || 'None'); el.appendChild(li1);
        Object.keys(state.features).forEach(k => {
             if (state.features[k]) {
                 const li = document.createElement('li'); li.innerText = k + ': ' + state.features[k]; el.appendChild(li);
             }
        });
        if (state.outfit) {
             const li2 = document.createElement('li'); li2.innerText = 'Outfit: ' + state.outfit; el.appendChild(li2);
        }
    }

    function renderAll() {
        renderBasePanel();
        renderFacePanel();
        renderOutfitPanel();
        renderStage();
        updateReviewText();
        setStep(state.step);
    }

    stepBtns.forEach(function (b, idx) {
        b.addEventListener('click', function () { setStep(idx); });
    });

    if (btnReset) {
        btnReset.addEventListener('click', function () {
            localStorage.removeItem(STORAGE_KEY);
            state = { step: 0, base: 'MODEL BÚP BÊ NỮ.svg', features: {'EYEGLASS': null, 'MẮT': null, 'MÀY': null, 'MIỆNG': null, 'MŨI': null, 'TÓC': null}, outfit: null };
            renderAll();
        });
    }

    if (btnCart) {
        btnCart.addEventListener('click', function () {
            window.location.href = 'soon.html';
        });
    }

    renderAll();
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
