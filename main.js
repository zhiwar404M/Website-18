// ========== Streamtape Integration ==========
function embedStreamtapeVideo(videoUrl) {
    return `
        <div class="streamtape-container">
            <iframe 
                src="${videoUrl}" 
                allowfullscreen 
                allow="autoplay; fullscreen"
                frameborder="0"
                scrolling="no">
            </iframe>
        </div>
    `;
}

// ========== Ad Network Refresh Functions ==========
function refreshAdsterra() {
    try {
        if (typeof window.stbVolume !== 'undefined') {
            window.stbVolume.refresh();
        }
    } catch (error) {
        console.error('Adsterra refresh error:', error);
    }
}

function refreshMyBidAds() {
    try {
        if (window.myBidAdsQueue) {
            window.myBidAdsQueue.push(function() {
                if (window.myBidAds) {
                    window.myBidAds.refresh();
                }
            });
        }
    } catch (error) {
        console.error('MyBidAds refresh error:', error);
    }
}

function refreshPropellerAds() {
    try {
        if (window._paq) {
            window._paq.push(['trackPageView']);
        }
    } catch (error) {
        console.error('PropellerAds refresh error:', error);
    }
}

// Master function to refresh all ads
function refreshAllAds() {
    refreshAdsterra();
    refreshMyBidAds();
    refreshPropellerAds();
}

// ========== Dynamic Ad Placement ==========
function insertAdBetweenVideos(videoCount) {
    if (videoCount % 4 === 0) {
        const adDiv = document.createElement('div');
        adDiv.className = 'ad-container ad-grid-between';
        adDiv.innerHTML = '<div data-banner-id="2017792"></div>';
        return adDiv;
    }
    return null;
}

// ========== Modal Ad Management ==========
function showVideoModalWithAds(video) {
    const modal = document.getElementById('videoModal');
    const wrapper = document.getElementById('videoWrapper');
    const info = document.getElementById('videoInfo');

    wrapper.innerHTML = embedStreamtapeVideo(video.videoUrl);
    info.innerHTML = `
        <h2>${video.title}</h2>
        <div class="meta-details">
            <span>👁️ ${video.views}</span>
            <span>⏱️ ${video.duration}</span>
            <span>📅 ${video.uploaded}</span>
        </div>
        <p class="description">${video.description}</p>
    `;

    modal.classList.add('show');
    document.body.style.overflow = 'hidden';

    // Refresh ads after modal appears
    setTimeout(() => {
        refreshAllAds();
    }, 500);
}

// ========== Error Handling ==========
function handleAdNetworkError(network, error) {
    console.error(`${network} Ad Network Error:`, error.message);
    console.warn(`Failed to load ads from ${network}. Continuing without ads...`);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    // Refresh ads after page fully loads
    setTimeout(() => {
        refreshAllAds();
    }, 1000);
});
