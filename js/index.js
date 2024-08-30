function spawnHomePage()  {

}

function spawnCreditsPage()  {

}

function spawnSupportPage()  {

}

function spawnFeaturesPage() {

}

function spawnDownloadPage() {

}

function spawnChangelogPage() {

}

function spawnConfigPage() {

}

function spawnWikiPage() {

}

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