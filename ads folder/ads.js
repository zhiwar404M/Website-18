// ── ADSTERRA & MYBID INTEGRATION ──

(function loadAds() {
    // 1. Adsterra Placeholder (بۆ نموونە ڕیکلامی Banner)
    const adsterraContainer = document.getElementById('adsterra-zone');
    if (adsterraContainer) {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        // لێرەدا ئەو URL یان ID یەی ئەدستێرا پێت دەدات دایبنێ
        script.src = '//www.topcreativeformat.com/YOUR_ADSTERRA_ID/invoke.js'; 
        adsterraContainer.appendChild(script);
    }

    // 2. MyBid Integration
    const mybidContainer = document.getElementById('mybid-zone');
    if (mybidContainer) {
        const mbScript = document.createElement('script');
        mbScript.src = 'https://mybid_script_url_here.js'; // لێرەدا لینکی MyBid دابنێ
        mybidContainer.appendChild(mbScript);
    }
})();
