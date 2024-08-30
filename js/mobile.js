function checkDesktop() {
    if (window.innerWidth > 768) {
        window.location = "index.html";
    }
}

function openSidebar() {
    let sidebar_button = document.getElementById("sidebar-button");
    let sidebar = $("#sidebar");

    sidebar_button.onclick = closeSidebar
    setTimeout(() => {

        sidebar.addClass("slide-in");
        if (sidebar.hasClass("slide-out")) {
            sidebar.removeClass("slide-out");
        }

    }, 500);
}

function closeSidebar() {
    let sidebar_button = document.getElementById("sidebar-button");
    let sidebar = $("#sidebar");

    sidebar_button.onclick = openSidebar;
    sidebar.addClass("slide-out");
    setTimeout(() => {
        if (sidebar.hasClass("slide-in")) {
            sidebar.removeClass("slide-in");
        }
    }, 400);
}

document.addEventListener("DOMContentLoaded", function() {
    checkDesktop();
    getDailyBeatmap();
});