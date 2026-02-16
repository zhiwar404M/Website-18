// Firebase Configuration (پێویستە بیگۆڕیت بە هی خۆت)
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();

// Videos Database
const videos = [
    {
        id: 1,
        title: { ckb: 'فێربنی Python - دورەی تەواو', ar: 'تعلم Python - دورة كاملة', en: 'Learn Python - Complete Course', tr: 'Python Öğrenin - Tam Kurs', fa: 'آموزش Python - دوره کامل' },
        thumbnail: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Python',
        duration: '15:30',
        views: '1.2K',
        uploadDate: '2024-02-01',
        description: { 
            ckb: 'دورەی تەواوی فێربوونی Python لە بنەڕەتەکانەوە تا پێشکەوتوو. لەم ڤیدیۆیەدا بنەڕەت و چەمکە گرنگەکانی پرۆگرامسازی فێردەبیت.',
            ar: 'دورة شاملة لتعلم لغة Python من الأساسيات حتى الاحتراف. في هذا الفيديو سنتعلم الأساسيات والمفاهيم المهمة في البرمجة.',
            en: 'Complete Python course from basics to advanced. In this video, you will learn the fundamentals and important concepts of programming.',
            tr: 'Temelden ileri seviyeye tam Python kursu. Bu videoda programlamanın temellerini ve önemli kavramlarını öğreneceksiniz.',
            fa: 'دوره کامل آموزش Python از مبتدی تا پیشرفته. در این ویدیو اصول و مفاهیم مهم برنامه‌نویسی را یاد خواهید گرفت.'
        },
        streamtapeUrl: 'https://streamtape.com/e/elB498DqQkCYR9A/',
        category: 'foreign'
    },
    {
        id: 2,
        title: { ckb: 'دیزاینی وێب - HTML و CSS', ar: 'تصميم الويب - HTML و CSS', en: 'Web Design - HTML & CSS', tr: 'Web Tasarım - HTML ve CSS', fa: 'طراحی وب - HTML و CSS' },
        thumbnail: 'https://via.placeholder.com/400x300/EC4899/FFFFFF?text=Web+Design',
        duration: '22:45',
        views: '2.5K',
        uploadDate: '2024-02-03',
        description: {
            ckb: 'فێربە چۆن وێبسایتێکی پیشەگەرانە دیزاین بکەیت بە بەکارهێنانی HTML و CSS. گونجاوە بۆ هەردوو ئاستی سەرەتایی و پێشکەوتوو.',
            ar: 'تعلم كيفية تصميم موقع ويب احترافي باستخدام HTML و CSS. مناسب للمبتدئين والمحترفين.',
            en: 'Learn how to design a professional website using HTML and CSS. Suitable for both beginners and professionals.',
            tr: 'HTML ve CSS kullanarak profesyonel bir web sitesi tasarlamayı öğrenin. Hem yeni başlayanlar hem de profesyoneller için uygundur.',
            fa: 'یاد بگیرید چگونه با استفاده از HTML و CSS یک وب‌سایت حرفه‌ای طراحی کنید. مناسب برای مبتدیان و حرفه‌ای‌ها.'
        },
        streamtapeUrl: 'https://streamtape.com/e/VIDEO_ID_HERE',
        category: 'foreign'
    },
    {
        id: 3,
        title: { ckb: 'React.js بۆ سەرەتاییەکان', ar: 'React.js للمبتدئين', en: 'React.js for Beginners', tr: 'Yeni Başlayanlar için React.js', fa: 'React.js برای مبتدیان' },
        thumbnail: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=React',
        duration: '18:20',
        views: '3.1K',
        uploadDate: '2024-02-05',
        description: {
            ckb: 'دورەی تەواوی فێربوونی React.js لە سەرەتاوە. فێربە چۆن ئەپلیکەیشنی وێبی کارلێککار دروست بکەیت.',
            ar: 'دورة كاملة لتعلم React.js من الصفر. تعلم كيفية بناء تطبيقات ويب تفاعلية.',
            en: 'Complete React.js course from scratch. Learn how to build interactive web applications.',
            tr: 'Sıfırdan tam React.js kursu. Etkileşimli web uygulamaları oluşturmayı öğrenin.',
            fa: 'دوره کامل React.js از صفر. یاد بگیرید چگونه برنامه‌های وب تعاملی بسازید.'
        },
        streamtapeUrl: 'https://streamtape.com/e/VIDEO_ID_HERE',
        category: 'foreign'
    },
    {
        id: 4,
        title: { ckb: 'جاڤاسکریپت - پڕۆژەی کرداری', ar: 'جافاسكريبت - مشاريع عملية', en: 'JavaScript - Practical Projects', tr: 'JavaScript - Pratik Projeler', fa: 'جاوااسکریپت - پروژه‌های عملی' },
        thumbnail: 'https://via.placeholder.com/400x300/06B6D4/FFFFFF?text=JavaScript',
        duration: '25:10',
        views: '4.3K',
        uploadDate: '2024-01-28',
        description: {
            ckb: 'هەموو ئەو شتانەی پێویستە بزانی دەربارەی JavaScript. گونجاوە بۆ هەموو ئاستەکان.',
            ar: 'كل ما تحتاج معرفته عن JavaScript. مناسب لجميع المستويات.',
            en: 'Everything you need to know about JavaScript. Suitable for all levels.',
            tr: 'JavaScript hakkında bilmeniz gereken her şey. Tüm seviyeler için uygundur.',
            fa: 'همه چیزهایی که باید درباره جاوااسکریپت بدانید. مناسب برای همه سطوح.'
        },
        streamtapeUrl: 'https://streamtape.com/e/VIDEO_ID_HERE',
        category: 'foreign'
    },
    {
        id: 5,
        title: { ckb: 'Node.js - دروستکردنی بەکێند', ar: 'Node.js - بناء الخادم', en: 'Node.js - Backend Development', tr: 'Node.js - Backend Geliştirme', fa: 'Node.js - توسعه بک‌اند' },
        thumbnail: 'https://via.placeholder.com/400x300/8B5CF6/FFFFFF?text=Node.js',
        duration: '30:15',
        views: '1.8K',
        uploadDate: '2024-02-04',
        description: {
            ckb: 'فێربنی بەکێندی بەهێز لە ڕێگەی Node.js و Express. لە دروستکردنی API تا کارکردن لەگەڵ بنکەدراوەکان.',
            ar: 'تعلم بناء Backend قوي باستخدام Node.js و Express. من إنشاء API إلى التعامل مع قواعد البيانات.',
            en: 'Learn to build powerful backend using Node.js and Express. From API creation to working with databases.',
            tr: 'Node.js ve Express kullanarak güçlü backend oluşturmayı öğrenin. API oluşturmadan veritabanlarıyla çalışmaya kadar.',
            fa: 'یاد بگیرید با استفاده از Node.js و Express بک‌اند قدرتمند بسازید. از ایجاد API تا کار با پایگاه داده.'
        },
        streamtapeUrl: 'https://streamtape.com/e/0813Vmav33sb1wV/',
        category: 'arabic'
    },
    {
        id: 6,
        title: { ckb: 'MongoDB - بنکەدراوەی NoSQL', ar: 'MongoDB - قاعدة بيانات NoSQL', en: 'MongoDB - NoSQL Database', tr: 'MongoDB - NoSQL Veritabanı', fa: 'MongoDB - پایگاه داده NoSQL' },
        thumbnail: 'https://via.placeholder.com/400x300/10B981/FFFFFF?text=MongoDB',
        duration: '20:40',
        views: '2.2K',
        uploadDate: '2024-01-30',
        description: {
            ckb: 'فێربنی کارکردن لەگەڵ MongoDB، بنکەدراوەی NoSQL. لە دامەزراندن تا کارپێکردنی پێشکەوتوو.',
            ar: 'تعلم العمل مع MongoDB، قاعدة البيانات NoSQL. من التثبيت إلى العمليات المتقدمة.',
            en: 'Learn to work with MongoDB, the NoSQL database. From installation to advanced operations.',
            tr: 'MongoDB, NoSQL veritabanı ile çalışmayı öğrenin. Kurulumdan ileri düzey işlemlere kadar.',
            fa: 'کار با MongoDB، پایگاه داده NoSQL را یاد بگیرید. از نصب تا عملیات پیشرفته.'
        },
        streamtapeUrl: 'https://streamtape.com/e/7KXDLVXbPLiAOVY/',
        category: 'arabic'
    },
    {
        id: 7,
        title: { ckb: 'فێربنی زمانی کوردی لە ڕێگەی ڤیدیۆ', ar: 'تعلم اللغة الكردية عبر الفيديو', en: 'Learn Kurdish Language through Videos', tr: 'Videolarla Kürtçe Öğrenin', fa: 'یادگیری زبان کردی از طریق ویدیو' },
        thumbnail: 'https://via.placeholder.com/400x300/F59E0B/FFFFFF?text=Kurdish',
        duration: '45:20',
        views: '5.7K',
        uploadDate: '2024-02-10',
        description: {
            ckb: 'فێربنی زمانی کوردی بە شێوازێکی ئاسان و خۆش. ئەم ڤیدیۆیە یارمەتیت دەدات بە خێراترین شێوە زمانی کوردی فێربیت.',
            ar: 'تعلم اللغة الكردية بطريقة سهلة وممتعة. هذا الفيديو سيساعدك على تعلم اللغة الكردية بأسرع طريقة.',
            en: 'Learn Kurdish language in an easy and fun way. This video will help you learn Kurdish in the fastest way.',
            tr: 'Kolay ve eğlenceli bir şekilde Kürtçe öğrenin. Bu video, Kürtçe'yi en hızlı şekilde öğrenmenize yardımcı olacak.',
            fa: 'زبان کردی را به روشی آسان و لذت‌بخش یاد بگیرید. این ویدیو به شما کمک می‌کند به سریع‌ترین روش کردی یاد بگیرید.'
        },
        streamtapeUrl: 'https://streamtape.com/e/VIDEO_ID_HERE',
        category: 'kurdish'
    }
];

let searchTerm = '';
let currentFilter = 'all';

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

// Function to get localized text
function getLocalizedText(obj, key) {
    if (!obj) return '';
    const lang = window.currentLanguage ? window.currentLanguage() : 'ckb';
    return obj[lang] || obj['ckb'] || obj['en'] || '';
}

// Display videos
function displayVideos() {
    const grid = document.getElementById('videosGrid');
    const noResults = document.getElementById('noResults');
    
    let filteredVideos = videos;

    // Apply search
    if (searchTerm) {
        filteredVideos = filteredVideos.filter(v => {
            const title = getLocalizedText(v.title, window.currentLanguage()).toLowerCase();
            const description = getLocalizedText(v.description, window.currentLanguage()).toLowerCase();
            return title.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase());
        });
    }

    // Apply filter
    if (currentFilter !== 'all') {
        if (currentFilter === 'new') {
            filteredVideos = [...filteredVideos].sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));
        } else if (currentFilter === 'popular') {
            filteredVideos = [...filteredVideos].sort((a, b) => parseInt(b.views) - parseInt(a.views));
        } else {
            filteredVideos = filteredVideos.filter(v => v.category === currentFilter);
        }
    }

    if (filteredVideos.length === 0) {
        grid.classList.add('hidden');
        noResults.classList.remove('hidden');
        return;
    }

    grid.classList.remove('hidden');
    noResults.classList.add('hidden');

    grid.innerHTML = filteredVideos.map(video => `
        <div class="video-card" onclick="openVideo(${video.id})" data-aos="fade-up">
            <div class="video-thumbnail-wrapper">
                <img class="video-thumbnail" src="${video.thumbnail}" alt="${getLocalizedText(video.title)}">
                <div class="play-overlay"><i class="fas fa-play"></i></div>
                <span class="duration-badge"><i class="far fa-clock"></i> ${video.duration}</span>
            </div>
            <div class="video-info">
                <h3 class="video-title">${getLocalizedText(video.title)}</h3>
                <div class="video-stats">
                    <span class="stat-badge">
                        <i class="fas fa-eye"></i>
                        <span>${video.views}</span>
                    </span>
                    <span class="stat-badge">
                        <i class="fas fa-calendar-alt"></i>
                        <span>${formatUploadDate(video.uploadDate)}</span>
                    </span>
                </div>
            </div>
        </div>
    `).join('');
}

// Open video modal
function openVideo(id) {
    const video = videos.find(v => v.id === id);
    if (!video) return;

    const modal = document.getElementById('videoModal');
    const player = document.getElementById('videoPlayer');
    const details = document.getElementById('videoDetailsContent');

    player.innerHTML = `
        <iframe 
            src="${video.streamtapeUrl}" 
            allowfullscreen 
            allow="autoplay; fullscreen"
            frameborder="0"
            scrolling="no">
        </iframe>
    `;

    const commentSection = window.currentUser ? `
        <div class="comment-form">
            <textarea 
                class="comment-textarea" 
                id="commentText" 
                data-i18n="addComment" 
                placeholder="${translations[window.currentLanguage()].addComment}"
            ></textarea>
            <button class="comment-submit" onclick="addComment(${video.id})">
                <i class="fas fa-paper-plane"></i> <span data-i18n="addComment">${translations[window.currentLanguage()].addComment}</span>
            </button>
        </div>
    ` : `
        <div class="login-required" style="text-align: center; padding: 40px;">
            <i class="fas fa-lock" style="font-size: 48px; color: var(--accent-1); margin-bottom: 20px;"></i>
            <p style="color: var(--text-secondary); margin-bottom: 20px;" data-i18n="loginRequired">${translations[window.currentLanguage()].loginRequired}</p>
            <button class="btn btn-primary" onclick="openAuthModal('login')">
                <i class="fas fa-sign-in-alt"></i> <span data-i18n="login">${translations[window.currentLanguage()].login}</span>
            </button>
        </div>
    `;

    details.innerHTML = `
        <div class="detail-header">
            <h2 class="detail-title">${getLocalizedText(video.title)}</h2>
            <div class="detail-stats">
                <div class="stat-item">
                    <i class="fas fa-eye"></i>
                    <span>${video.views} <span data-i18n="viewCount">${translations[window.currentLanguage()].viewCount}</span></span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-calendar-alt"></i>
                    <span>${formatUploadDate(video.uploadDate)}</span>
                </div>
                <div class="stat-item">
                    <i class="fas fa-clock"></i>
                    <span>${video.duration} <span data-i18n="duration">${translations[window.currentLanguage()].duration}</span></span>
                </div>
            </div>
        </div>

        <div class="video-description">
            <p>${getLocalizedText(video.description)}</p>
        </div>

        <div class="comments-section">
            <div class="comments-header">
                <h3 class="comments-title"><i class="fas fa-comments"></i> <span data-i18n="comments">${translations[window.currentLanguage()].comments}</span></h3>
                <span class="comments-count" id="commentsCount">0</span>
            </div>
            
            ${commentSection}
            
            <div class="comments-list" id="commentsList"></div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';

    if (window.loadComments) {
        window.loadComments(video.id);
    }
    
    // Update translations in modal
    setTimeout(() => {
        updateElementTranslations();
    }, 100);
}

// Close video modal
function closeVideoModal() {
    const modal = document.getElementById('videoModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
    document.getElementById('videoPlayer').innerHTML = '';
}

// Format upload date
function formatUploadDate(dateString) {
    const date = new Date(dateString);
    const now = new Date();
    const diff = Math.floor((now - date) / (1000 * 60 * 60 * 24));
    const lang = window.currentLanguage ? window.currentLanguage() : 'ckb';

    if (diff === 0) return translations[lang].today;
    if (diff === 1) return translations[lang].yesterday;
    if (diff < 7) return `${diff} ${translations[lang].daysAgo}`;
    if (diff < 30) return `${Math.floor(diff / 7)} ${translations[lang].weeksAgo}`;
    return `${Math.floor(diff / 30)} ${translations[lang].monthsAgo}`;
}

// Auth modal functions
function openAuthModal(tab) {
    const modal = document.getElementById('authModal');
    modal.style.display = 'flex';
    
    document.querySelectorAll('.auth-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.auth-form').forEach(f => f.classList.remove('active'));
    
    document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
    document.getElementById(tab + 'Form').classList.add('active');
}

function closeAuthModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Profile functions
function showProfile() {
    document.getElementById('mainContent').classList.add('hidden');
    document.getElementById('profilePage').classList.remove('hidden');
    
    document.getElementById('totalWatched').textContent = '12';
    document.getElementById('totalComments').textContent = '18';
    document.getElementById('joinedDays').textContent = '45';
}

function showVideos() {
    document.getElementById('mainContent').classList.remove('hidden');
    document.getElementById('profilePage').classList.add('hidden');
}

// Update element translations dynamically
function updateElementTranslations() {
    const elements = document.querySelectorAll('[data-i18n]');
    const lang = window.currentLanguage();
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
}

// Listen for language changes
window.addEventListener('languageChanged', () => {
    displayVideos();
    updateElementTranslations();
});

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('searchInput').addEventListener('input', (e) => {
        searchTerm = e.target.value;
        displayVideos();
    });

    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            displayVideos();
        });
    });

    document.getElementById('userAvatar')?.addEventListener('click', () => {
        document.getElementById('userWrapper').classList.toggle('active');
    });

    window.addEventListener('click', (e) => {
        const wrapper = document.getElementById('userWrapper');
        if (wrapper && !wrapper.contains(e.target)) {
            wrapper.classList.remove('active');
        }
    });

    window.onclick = (e) => {
        const videoModal = document.getElementById('videoModal');
        const authModal = document.getElementById('authModal');
        
        if (e.target === videoModal) closeVideoModal();
        if (e.target === authModal) closeAuthModal();
    };

    // Initialize
    displayVideos();
    document.getElementById('authButtons').classList.remove('hidden');
});

// Firebase Auth Functions
window.loginWithGoogle = async function() {
    try {
        await auth.signInWithPopup(provider);
        closeAuthModal();
        alert(translations[window.currentLanguage()].login + ' 🎉');
    } catch (error) {
        alert(translations[window.currentLanguage()].error + ': ' + error.message);
    }
};

window.registerWithEmail = async function(e) {
    e.preventDefault();
    const name = document.getElementById('registerName').value;
    const email = document.getElementById('registerEmail').value;
    const password = document.getElementById('registerPassword').value;

    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        await userCredential.user.updateProfile({ displayName: name });
        closeAuthModal();
        alert(translations[window.currentLanguage()].register + ' 🎉');
    } catch (error) {
        alert(translations[window.currentLanguage()].error + ': ' + error.message);
    }
};

window.loginWithEmail = async function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        await auth.signInWithEmailAndPassword(email, password);
        closeAuthModal();
        alert(translations[window.currentLanguage()].login + ' 🎉');
    } catch (error) {
        alert(translations[window.currentLanguage()].error + ': ' + error.message);
    }
};

window.logout = async function() {
    try {
        await auth.signOut();
        alert(translations[window.currentLanguage()].logout + ' 👋');
        showVideos();
    } catch (error) {
        alert(translations[window.currentLanguage()].error + ': ' + error.message);
    }
};

// Auth state observer
auth.onAuthStateChanged((user) => {
    if (user) {
        window.currentUser = user;
        document.getElementById('authButtons').classList.add('hidden');
        document.getElementById('userWrapper').classList.remove('hidden');
        document.getElementById('userAvatar').src = user.photoURL || 'https://via.placeholder.com/100';
        
        if (document.getElementById('profileAvatarLarge')) {
            document.getElementById('profileAvatarLarge').src = user.photoURL || 'https://via.placeholder.com/120';
            document.getElementById('profileName').textContent = user.displayName || translations[window.currentLanguage()].user;
            document.getElementById('profileEmail').textContent = user.email;
        }
    } else {
        window.currentUser = null;
        document.getElementById('authButtons').classList.remove('hidden');
        document.getElementById('userWrapper').classList.add('hidden');
    }
});

// Comments functions
window.loadComments = async function(videoId) {
    try {
        const commentsList = document.getElementById('commentsList');
        const commentsCount = document.getElementById('commentsCount');
        
        // Mock comments for demo
        const mockComments = [
            {
                id: 1,
                userAvatar: 'https://via.placeholder.com/40',
                userName: translations[window.currentLanguage()].user + ' 1',
                text: translations[window.currentLanguage()].comment + ' 1',
                timestamp: new Date()
            },
            {
                id: 2,
                userAvatar: 'https://via.placeholder.com/40',
                userName: translations[window.currentLanguage()].user + ' 2',
                text: translations[window.currentLanguage()].comment + ' 2',
                timestamp: new Date(Date.now() - 3600000)
            }
        ];
        
        commentsCount.textContent = mockComments.length;
        
        if (mockComments.length === 0) {
            commentsList.innerHTML = `<p style="text-align: center; color: var(--text-secondary); padding: 30px;" data-i18n="noComments">${translations[window.currentLanguage()].noComments}</p>`;
            return;
        }

        commentsList.innerHTML = '';
        mockComments.forEach((comment) => {
            const commentHTML = `
                <div class="comment">
                    <div class="comment-header">
                        <img src="${comment.userAvatar}" alt="${comment.userName}" class="comment-avatar">
                        <span class="comment-author">${comment.userName}</span>
                        <span class="comment-date">${formatDate(comment.timestamp)}</span>
                    </div>
                    <p class="comment-text">${comment.text}</p>
                </div>
            `;
            commentsList.innerHTML += commentHTML;
        });
    } catch (error) {
        console.error('Error loading comments:', error);
    }
};

function formatDate(date) {
    const now = new Date();
    const diff = Math.floor((now - date) / 1000);
    const lang = window.currentLanguage();

    if (diff < 60) return translations[lang].justNow;
    if (diff < 3600) return Math.floor(diff / 60) + ' ' + translations[lang].minutesAgo;
    if (diff < 86400) return Math.floor(diff / 3600) + ' ' + translations[lang].hoursAgo;
    if (diff < 2592000) return Math.floor(diff / 86400) + ' ' + translations[lang].daysAgo;
    return date.toLocaleDateString(lang);
}

// Add comment
window.addComment = async function(videoId) {
    if (!window.currentUser) {
        alert(translations[window.currentLanguage()].loginRequired);
        return;
    }

    const commentText = document.getElementById('commentText').value;
    if (!commentText.trim()) {
        alert(translations[window.currentLanguage()].enterComment);
        return;
    }

    // Mock add comment
    document.getElementById('commentText').value = '';
    loadComments(videoId);
    alert(translations[window.currentLanguage()].commentAdded + ' 💬');
};

// Form submissions
document.getElementById('loginForm').addEventListener('submit', window.loginWithEmail);
document.getElementById('registerForm').addEventListener('submit', window.registerWithEmail);
