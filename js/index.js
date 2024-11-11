function checkMobile() {
    if (window.innerWidth <= 768) {
        window.location = "mobile.html";
    }
}

function addVideoHoverEffect() {
    const videoContainer = document.querySelector('.video-rounding');
    const video = videoContainer.querySelector('video');
    videoContainer.style.overflow = 'visible';
    videoContainer.addEventListener('mousemove', (e) => {
        video.style.transition = 'all 0.1s ease';
        const rect = videoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / centerY * 10;
        const rotateY = (x - centerX) / centerX * 10;
        video.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        video.style.boxShadow = `${rotateY * 2}px ${rotateX * 2}px 50px rgba(0, 0, 0, 0.5)`;
    });
    videoContainer.addEventListener('mouseleave', () => {
        video.style.transition = 'all 0.5s ease';
        video.style.transform = 'rotateY(0deg) rotateX(0deg)';
        video.style.boxShadow = `0px 0px 50px rgba(0, 0, 0, 0)`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    checkMobile();
    getDailyBeatmap();
    spawnHomePage();
    addVideoHoverEffect();
});

window.onresize = checkMobile;