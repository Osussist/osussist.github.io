function checkMobile() {
    if (window.innerWidth <= 768) {
        window.location = "mobile.html";
    }
}

function addVideoHoverEffect() {
    const videoContainer = document.querySelector('.video-rounding');
    videoContainer.addEventListener('mousemove', (e) => {
        videoContainer.style.transition = 'all 0.1s ease';
        const rect = videoContainer.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const rotateX = (centerY - y) / centerY * 10;
        const rotateY = (x - centerX) / centerX * 10;
        videoContainer.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        videoContainer.style.boxShadow = `${rotateY * 2}px ${rotateX * 2}px 20px rgba(0, 0, 0, 0.5)`;
    });
    videoContainer.addEventListener('mouseleave', () => {
        videoContainer.style.transition = 'all 0.5s ease';
        videoContainer.style.transform = 'rotateY(0deg) rotateX(0deg)';
        videoContainer.style.boxShadow = `0px 0px 20px rgba(0, 0, 0, 0)`;
    });
}

document.addEventListener("DOMContentLoaded", function() {
    checkMobile();
    getDailyBeatmap();
    spawnHomePage();
    addVideoHoverEffect();
});

window.onresize = checkMobile;