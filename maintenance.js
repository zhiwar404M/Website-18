// ============================
// MAINTENANCE MODE TOGGLE
// Set this to true to enable maintenance mode
// ============================
const MAINTENANCE_MODE = true;

// Maintenance end time (set to null to hide countdown)
const MAINTENANCE_END = null; // e.g. new Date(‘2025-06-01T12:00:00’)

if (MAINTENANCE_MODE) {
document.addEventListener(‘DOMContentLoaded’, function() {
document.body.innerHTML = `
<div style="
position:fixed; inset:0; z-index:99999;
background:#080a0e;
display:flex; flex-direction:column;
align-items:center; justify-content:center;
font-family:'Cairo',sans-serif; direction:rtl;
text-align:center; padding:20px;
">
<div style="
background:linear-gradient(135deg,#111520,#0d1117);
border:1px solid rgba(255,107,53,0.2);
border-radius:24px;
padding:48px 40px;
max-width:480px; width:100%;
box-shadow:0 40px 80px rgba(0,0,0,0.8),0 0 60px rgba(230,57,70,0.08);
position:relative; overflow:hidden;
">
<div style="
position:absolute;top:0;left:0;right:0;height:2px;
background:linear-gradient(90deg,#e63946,#ff6b35,#ffd60a,#ff6b35,#e63946);
background-size:200% 100%;
animation:gradBar 3s linear infinite;
"></div>


            <div style="font-size:64px;margin-bottom:20px;animation:spin 3s linear infinite;">⚙️</div>
            <h1 style="
                font-size:28px;font-weight:900;margin-bottom:12px;
                background:linear-gradient(135deg,#fff,#ff6b35,#e63946);
                -webkit-background-clip:text;-webkit-text-fill-color:transparent;
                background-clip:text;
            ">تحت الصيانة</h1>
            <p style="color:#8892aa;font-size:15px;line-height:1.8;margin-bottom:28px;">
                نعمل على تحسين الموقع لتجربة أفضل.<br>سنعود قريباً 🚀
            </p>
            <div style="
                display:flex;gap:8px;justify-content:center;flex-wrap:wrap;
            ">
                <a href="https://t.me/" style="
                    background:linear-gradient(135deg,#e63946,#ff6b35);
                    color:white;text-decoration:none;
                    padding:10px 24px;border-radius:50px;
                    font-size:14px;font-weight:700;
                    box-shadow:0 0 20px rgba(230,57,70,0.4);
                    transition:all 0.3s;
                ">📱 تواصل معنا</a>
            </div>
        </div>
        <style>
            @keyframes spin { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
            @keyframes gradBar { 0%{background-position:0% 50%} 100%{background-position:200% 50%} }
        </style>
    </div>`;
});


}
