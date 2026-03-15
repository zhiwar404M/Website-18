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

    document.head.insertAdjacentHTML('beforeend', `
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;600;700;900&display=swap" rel="stylesheet">
        
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
