/**
 * Khung & nâng cấp — logic preview + giá (dùng chung với custom.html).
 * Bản dịch: assets/js/custom.js (setLanguage).
 */
var FC_PRICES = {
    base: 3500000,
    backgroundPaid: 150000,
    frame: { natural: 0, dark: 250000, painted: 400000 },
    glass: 100000,
    premiumFinish: 200000,
    led: 500000,
    engraving: 150000,
    gift: { standard: 0, premium: 300000, card: 150000 }
};

var BG_PRESETS = [
    'repeating-linear-gradient(45deg, var(--clr-pink) 0 8px, transparent 8px 16px)',
    'repeating-linear-gradient(90deg, var(--clr-mint) 0 10px, transparent 10px 20px)',
    'radial-gradient(circle at 30% 30%, var(--clr-pink) 0 8px, transparent 9px) 0 0 / 24px 24px',
    'linear-gradient(135deg, #fcfee8 0%, #fed8e3 50%, #b5d1c1 100%)',
    'repeating-linear-gradient(0deg, rgba(116,82,63,0.12) 0 4px, transparent 4px 8px)',
    'repeating-linear-gradient(45deg, #fed8e3 0 12px, #fcfee8 12px 24px)',
    'radial-gradient(ellipse at center, #b5d1c1 0%, #fcfee8 70%)',
    'repeating-conic-gradient(from 0deg, #fed8e3 0deg 10deg, transparent 10deg 20deg)',
    'linear-gradient(180deg, #fcfee8 0%, rgba(116,82,63,0.08) 100%)',
    'repeating-linear-gradient(135deg, var(--clr-brown) 0 2px, transparent 2px 6px)'
];

function formatVnd(n) {
    return n.toLocaleString('vi-VN') + ' VND';
}

function fcGetState() {
    var mat = document.querySelector('.fc-mat.is-picked');
    var pack = document.querySelector('.fc-pack.is-picked');
    var ledRadio = document.querySelector('input[name="fcLedTemp"]:checked');
    var idxEl = document.getElementById('fcBgPresetIdx');
    var glassEl = document.getElementById('fcGlass');
    var premEl = document.getElementById('fcPremium');
    var ledSw = document.getElementById('fcLedSwitch');
    var engrEl = document.getElementById('fcEngrave');
    return {
        bgPreset: idxEl ? parseInt(idxEl.value, 10) || 0 : 0,
        frame: mat ? mat.getAttribute('data-mat') : 'natural',
        glass: glassEl ? glassEl.checked : false,
        premium: premEl ? premEl.checked : false,
        ledOn: ledSw ? ledSw.classList.contains('is-on') : false,
        ledTemp: ledRadio ? ledRadio.value : 'warm',
        engrave: engrEl ? engrEl.value.trim() : '',
        gift: pack ? pack.getAttribute('data-pack') : 'standard'
    };
}

function fcUpdateTotal() {
    if (!document.getElementById('fcLineBase')) return;
    var s = fcGetState();
    var base = FC_PRICES.base;
    var bg = s.bgPreset === 0 ? 0 : FC_PRICES.backgroundPaid;
    var frameWood = FC_PRICES.frame[s.frame] || 0;
    var glass = s.glass ? FC_PRICES.glass : 0;
    var prem = s.premium ? FC_PRICES.premiumFinish : 0;
    var frameTotal = frameWood + glass + prem;
    var led = s.ledOn ? FC_PRICES.led : 0;
    var engr = s.engrave.length > 0 ? FC_PRICES.engraving : 0;
    var packAmt = FC_PRICES.gift[s.gift] != null ? FC_PRICES.gift[s.gift] : 0;

    var total = base + bg + frameTotal + led + engr + packAmt;

    document.getElementById('fcLineBase').textContent = formatVnd(base);
    document.getElementById('fcLineBg').textContent = bg ? '+' + formatVnd(bg) : formatVnd(0);
    document.getElementById('fcLineFrame').textContent = frameTotal ? '+' + formatVnd(frameTotal) : formatVnd(0);
    document.getElementById('fcLineLed').textContent = led ? '+' + formatVnd(led) : formatVnd(0);
    document.getElementById('fcLineEngrave').textContent = engr ? '+' + formatVnd(engr) : formatVnd(0);
    document.getElementById('fcLinePack').textContent = packAmt ? '+' + formatVnd(packAmt) : formatVnd(0);
    document.getElementById('fcLineTotal').textContent = formatVnd(total);
}

function fcUpdatePreview() {
    var s = fcGetState();
    var stage = document.getElementById('fcFrameStage');
    var bgLayer = document.getElementById('fcBgLayer');
    var ledWrap = document.getElementById('fcLedWrap');
    var glow = document.getElementById('fcLedGlow');

    if (stage && s.frame) stage.setAttribute('data-frame', s.frame);
    if (bgLayer) {
        var idx = isNaN(s.bgPreset) ? 0 : s.bgPreset;
        bgLayer.style.background = BG_PRESETS[idx] || BG_PRESETS[0];
    }
    if (ledWrap) {
        ledWrap.classList.toggle('is-off', !s.ledOn);
    }
    if (glow && s.ledTemp) {
        glow.setAttribute('data-temp', s.ledTemp);
    }
}

function initFrameCustomize() {
    if (!document.getElementById('fcFrameStage')) return;

    var mood = document.querySelectorAll('.fc-mood-wrap .mood-swatch');
    mood.forEach(function (sw) {
        sw.addEventListener('click', function () {
            mood.forEach(function (x) {
                x.classList.remove('is-picked');
            });
            sw.classList.add('is-picked');
            document.documentElement.style.setProperty('--fc-mood', sw.getAttribute('data-palette') || 'pink');
        });
    });

    document.querySelectorAll('.fc-preset').forEach(function (btn, i) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.fc-preset').forEach(function (x) {
                x.classList.remove('is-picked');
            });
            btn.classList.add('is-picked');
            document.getElementById('fcBgPresetIdx').value = String(i);
            fcUpdatePreview();
            fcUpdateTotal();
        });
    });

    document.querySelectorAll('.fc-mat').forEach(function (mat) {
        mat.addEventListener('click', function () {
            document.querySelectorAll('.fc-mat').forEach(function (x) {
                x.classList.remove('is-picked');
            });
            mat.classList.add('is-picked');
            fcUpdatePreview();
            fcUpdateTotal();
        });
    });

    ['fcGlass', 'fcPremium'].forEach(function (id) {
        var el = document.getElementById(id);
        if (el) el.addEventListener('change', fcUpdateTotal);
    });

    var ledSw = document.getElementById('fcLedSwitch');
    if (ledSw) {
        ledSw.addEventListener('click', function () {
            ledSw.classList.toggle('is-on');
            ledSw.setAttribute('aria-pressed', ledSw.classList.contains('is-on') ? 'true' : 'false');
            fcUpdatePreview();
            fcUpdateTotal();
        });
    }

    document.querySelectorAll('input[name="fcLedTemp"]').forEach(function (r) {
        r.addEventListener('change', function () {
            fcUpdatePreview();
        });
    });

    var engr = document.getElementById('fcEngrave');
    if (engr) {
        engr.addEventListener('input', function () {
            var max = 120;
            var v = engr.value.slice(0, max);
            engr.value = v;
            var el = document.getElementById('fcEngraveCount');
            if (el) el.textContent = String(v.length);
            fcUpdateTotal();
        });
    }

    document.querySelectorAll('.fc-pack').forEach(function (btn) {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.fc-pack').forEach(function (x) {
                x.classList.remove('is-picked');
            });
            btn.classList.add('is-picked');
            fcUpdateTotal();
        });
    });

    var uploadZone = document.getElementById('fcUploadZone');
    if (uploadZone) {
        uploadZone.addEventListener('click', function () {
            var input = document.getElementById('fcFileInput');
            if (input) input.click();
        });
    }

    fcUpdatePreview();
    fcUpdateTotal();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFrameCustomize);
} else {
    initFrameCustomize();
}
