function checkMobile() {
    if (window.innerWidth <= 768) {
        window.location = "mobile.html";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    checkMobile();
    getDailyBeatmap();
    spawnHomePage();
});

window.onresize = checkMobile