// ============================
// MAINTENANCE MODE SETTINGS
// ============================
const MAINTENANCE_MODE = true; // ← true بکە بۆ چالاككردن

// کاتی کۆتایی صیانە (ئەگەر نەتەوێت کاونتداون بێت null بکە)
const MAINTENANCE_END = null; // نموونە: new Date(‘2025-06-20T18:00:00’)

// لینکی تێلەگرام یان سۆشیال میدیا
const CONTACT_LINK = ‘https://t.me/’;

// ============================
// MAINTENANCE PAGE TEMPLATE
// ============================
if (MAINTENANCE_MODE) {
document.addEventListener(‘DOMContentLoaded’, function () {

```
    document.head.insertAdjacentHTML('beforeend', `
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
        <style>
            * { margin:0; padding:0; box-sizing:border-box; }

            #maint-page {
                position:fixed; inset:0; z-index:999999;
                background:#07090d;
                display:flex; flex-direction:column;
                align-items:center; justify-content:center;
                font-family:'Cairo',sans-serif; direction:rtl;
                text-align:center; padding:20px;
                overflow:hidden;
            }

            /* ====== STARFIELD ====== */
            #maint-stars {
                position:absolute; inset:0; overflow:hidden; pointer-events:none;
            }
            .star {
                position:absolute; border-radius:50%;
                background:#fff; opacity:0;
                animation: twinkle linear infinite;
            }
            @keyframes twinkle {
                0%,100%{opacity:0;transform:scale(1);}
                50%{opacity:1;transform:scale(1.4);}
            }

            /* ====== GLOW ORBS ====== */
            #maint-orb1, #maint-orb2 {
                position:absolute; border-radius:50%; pointer-events:none; filter:blur(80px);
            }
            #maint-orb1 {
                width:400px; height:400px;
                background:radial-gradient(circle, rgba(230,57,70,0.18) 0%, transparent 70%);
                top:-100px; left:-100px;
                animation: orbFloat1 8s ease-in-out infinite alternate;
            }
            #maint-orb2 {
                width:350px; height:350px;
                background:radial-gradient(circle, rgba(255,107,53,0.14) 0%, transparent 70%);
                bottom:-80px; right:-80px;
                animation: orbFloat2 10s ease-in-out infinite alternate;
            }
            @keyframes orbFloat1 { 0%{transform:translate(0,0);} 100%{transform:translate(60px,40px);} }
            @keyframes orbFloat2 { 0%{transform:translate(0,0);} 100%{transform:translate(-50px,-30px);} }

            /* ====== CARD ====== */
            #maint-card {
                background:linear-gradient(145deg, #111826, #0d1117);
                border:1px solid rgba(255,107,53,0.18);
                border-radius:28px;
                padding:52px 44px 44px;
                max-width:520px; width:100%;
                position:relative; overflow:hidden;
                box-shadow:
                    0 40px 80px rgba(0,0,0,0.85),
                    0 0 0 1px rgba(255,255,255,0.04),
                    inset 0 1px 0 rgba(255,255,255,0.06);
                animation: cardIn 0.7s cubic-bezier(0.175,0.885,0.32,1.275);
            }
            @keyframes cardIn {
                from { opacity:0; transform: scale(0.8) translateY(40px); }
                to   { opacity:1; transform: scale(1) translateY(0); }
            }

            /* Top animated gradient bar */
            #maint-card::before {
                content:'';
                position:absolute; top:0; left:0; right:0; height:2px;
                background: linear-gradient(90deg,#e63946,#ff6b35,#ffd60a,#ff6b35,#e63946);
                background-size:300% 100%;
                animation: gradBar 3s linear infinite;
                border-radius:28px 28px 0 0;
            }
            @keyframes gradBar {
                0%{background-position:0% 50%} 100%{background-position:300% 50%}
            }

            /* Inner glow */
            #maint-card::after {
                content:'';
                position:absolute; inset:0; border-radius:28px;
                background: radial-gradient(ellipse 60% 30% at 50% 0%, rgba(230,57,70,0.06) 0%, transparent 60%);
                pointer-events:none;
            }

            /* ====== GEAR ICON ====== */
            #maint-gears {
                position:relative; width:100px; height:100px;
                margin:0 auto 28px; display:flex; align-items:center; justify-content:center;
            }
            #maint-gears .gear-big {
                font-size:72px; line-height:1;
                animation: gearSpin 4s linear infinite;
                display:block;
                filter: drop-shadow(0 0 16px rgba(255,107,53,0.6));
            }
            #maint-gears .gear-small {
                font-size:36px; line-height:1;
                position:absolute; bottom:-4px; right:-4px;
                animation: gearSpinRev 3s linear infinite;
                display:block;
                filter: drop-shadow(0 0 10px rgba(230,57,70,0.5));
            }
            @keyframes gearSpin    { 0%{transform:rotate(0deg)}   100%{transform:rotate(360deg)}  }
            @keyframes gearSpinRev { 0%{transform:rotate(0deg)}   100%{transform:rotate(-360deg)} }

            /* ====== TITLE ====== */
            #maint-title {
                font-size:32px; font-weight:900; margin-bottom:10px; line-height:1.2;
                background:linear-gradient(135deg, #ffffff 0%, #ff9f6b 40%, #e63946 100%);
                -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
            }

            /* ====== SUBTITLE ====== */
            #maint-sub {
                color:#8892aa; font-size:15px; line-height:1.9; margin-bottom:32px;
            }
            #maint-sub strong { color:#ff9f6b; }

            /* ====== DIVIDER ====== */
            .maint-divider {
                width:60px; height:2px; margin:0 auto 28px;
                background:linear-gradient(90deg,#e63946,#ff6b35);
                border-radius:2px;
                box-shadow:0 0 10px rgba(230,57,70,0.5);
            }

            /* ====== PROGRESS BAR ====== */
            #maint-progress-wrap {
                background:rgba(255,255,255,0.06);
                border-radius:50px; height:6px; overflow:hidden; margin-bottom:8px;
                border:1px solid rgba(255,255,255,0.05);
            }
            #maint-progress-bar {
                height:100%; width:65%;
                background:linear-gradient(90deg,#e63946,#ff6b35,#ffd60a);
                border-radius:50px;
                animation: progressPulse 2s ease-in-out infinite alternate;
                box-shadow:0 0 12px rgba(230,57,70,0.5);
            }
            @keyframes progressPulse { 0%{width:55%;} 100%{width:75%;} }
            #maint-progress-label {
                font-size:12px; color:#4a5568; text-align:left; direction:ltr;
                margin-bottom:28px;
            }

            /* ====== COUNTDOWN ====== */
            #maint-countdown {
                display:flex; gap:12px; justify-content:center; margin-bottom:32px;
            }
            .cnt-box {
                background:rgba(255,255,255,0.04);
                border:1px solid rgba(255,107,53,0.15);
                border-radius:14px; padding:12px 16px; min-width:68px;
                position:relative; overflow:hidden;
            }
            .cnt-box::before {
                content:''; position:absolute; top:0;left:0;right:0;height:1px;
                background:linear-gradient(90deg,transparent,rgba(255,107,53,0.4),transparent);
            }
            .cnt-num {
                font-size:28px; font-weight:900; line-height:1;
                background:linear-gradient(135deg,#fff,#ff6b35);
                -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text;
                display:block; margin-bottom:4px;
            }
            .cnt-label { font-size:11px; color:#4a5568; }

            /* ====== BUTTON ====== */
            #maint-btn {
                display:inline-flex; align-items:center; gap:10px;
                background:linear-gradient(135deg,#e63946,#ff6b35);
                color:white; text-decoration:none;
                padding:14px 36px; border-radius:50px;
                font-family:'Cairo',sans-serif; font-size:15px; font-weight:700;
                box-shadow:0 0 28px rgba(230,57,70,0.4);
                transition:all 0.3s cubic-bezier(0.175,0.885,0.32,1.275);
                position:relative; overflow:hidden;
            }
            #maint-btn::before {
                content:''; position:absolute; inset:0;
                background:linear-gradient(135deg,rgba(255,255,255,0.15),transparent);
                border-radius:50px;
            }
            #maint-btn:hover {
                transform:translateY(-3px) scale(1.04);
                box-shadow:0 8px 40px rgba(230,57,70,0.6);
            }

            /* ====== FOOTER NOTE ====== */
            #maint-footer {
                margin-top:20px; font-size:12px; color:#2d3748;
            }
        </style>
    `);

    // Build stars
    let starsHTML = '';
    for (let i = 0; i < 60; i++) {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const dur = Math.random() * 4 + 2;
        const delay = Math.random() * 6;
        starsHTML += `<div class="star" style="
            width:${size}px;height:${size}px;
            left:${x}%;top:${y}%;
            animation-duration:${dur}s;
            animation-delay:${delay}s;
        "></div>`;
    }

    // Countdown HTML
    const hasCountdown = MAINTENANCE_END !== null;
    const countdownHTML = hasCountdown ? `
        <div id="maint-countdown">
            <div class="cnt-box"><span class="cnt-num" id="cnt-h">00</span><span class="cnt-label">ساعات</span></div>
            <div class="cnt-box"><span class="cnt-num" id="cnt-m">00</span><span class="cnt-label">دقائق</span></div>
            <div class="cnt-box"><span class="cnt-num" id="cnt-s">00</span><span class="cnt-label">ثواني</span></div>
        </div>
    ` : '';

    document.body.innerHTML = `
        <div id="maint-page">
            <div id="maint-stars">${starsHTML}</div>
            <div id="maint-orb1"></div>
            <div id="maint-orb2"></div>

            <div id="maint-card">
                <div id="maint-gears">
                    <span class="gear-big">⚙️</span>
                    <span class="gear-small">⚙️</span>
                </div>

                <h1 id="maint-title">تحت الصيانة</h1>
                <p id="maint-sub">
                    نعمل على تحسين موقعنا<br>
                    لنقدم لك <strong>تجربة أفضل</strong> 🚀
                </p>

                <div class="maint-divider"></div>

                <div id="maint-progress-wrap">
                    <div id="maint-progress-bar"></div>
                </div>
                <div id="maint-progress-label">جارٍ العمل... Working in progress</div>

                ${countdownHTML}

                <a id="maint-btn" href="${CONTACT_LINK}" target="_blank">
                    <span>📱</span>
                    <span>تواصل معنا</span>
                </a>

                <p id="maint-footer">© فيديو برو — سنعود قريباً ✦</p>
            </div>
        </div>
    `;

    // Countdown timer
    if (hasCountdown) {
        function updateCountdown() {
            const now = new Date();
            const diff = MAINTENANCE_END - now;
            if (diff <= 0) {
                document.getElementById('cnt-h').textContent = '00';
                document.getElementById('cnt-m').textContent = '00';
                document.getElementById('cnt-s').textContent = '00';
                return;
            }
            const h = Math.floor(diff / 3600000);
            const m = Math.floor((diff % 3600000) / 60000);
            const s = Math.floor((diff % 60000) / 1000);
            document.getElementById('cnt-h').textContent = String(h).padStart(2,'0');
            document.getElementById('cnt-m').textContent = String(m).padStart(2,'0');
            document.getElementById('cnt-s').textContent = String(s).padStart(2,'0');
        }
        updateCountdown();
        setInterval(updateCountdown, 1000);
    }
});
```

}