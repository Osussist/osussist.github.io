const Pages = {
    HOME: 0,
    CREDITS: 1,
    SUPPORT: 2,
    FEATURES: 3,
    DOWNLOAD: 4,
    CHANGELOG: 5,
    CONFIG: 6,
    WIKI: 7
}

let apiUrl = "https://osussistapi.onrender.com"
let currentPage = null;

function getLargest(arr) {
    return Math.max.apply(null, arr);
}

function getDailyBeatmap() {
    $.ajax({
        url: apiUrl + "/osu/daily-beatmap",
        method: "GET",
        dataType: "json",
        headers: {
            "Access-Control-Allow-Origin": "*"
        },
        success: function(data) {
            let song_image = $(".sidebar-content-image");
            let song_content = $(".sidebar-content-text");

            
            song_image.addClass("fade-out");
            song_content.addClass("fade-out");

            
            setTimeout(() => {
                
                let song_title = $("#title-daily-btmp");
                let song_artist = $("#artist-daily-btmp");
                let song_cover = $("#cover-daily-btmp");
                let song_mapper = $("#mapper-daily-btmp");
                let song_star_holder = $("#stars-holder");
                
                let cleanedTitle = data.title.replace(/\s*\(.*?\)\s*/g, '');
                let cleanedArtist = data.artist.replace(/\s*\(.*?\)\s*/g, '');

                song_cover.attr("src", data.cover);
                song_title.html(cleanedTitle);
                song_artist.html(`Artist: ${cleanedArtist}`);
                song_mapper.html(`Mapper: ${data.creator}`);
                song_star_holder.html("");

                let highest_diff = Math.round(getLargest(data.ratings));

                if (highest_diff > 10) {
                    highest_diff = 10;
                }

                for (let i = 0; i < highest_diff; i++) {
                    song_star_holder.append("<i class='fa-solid fa-star'></i>\n");
                }

                
                song_image.removeClass("fade-out").addClass("fade-in");
                song_content.removeClass("fade-out").addClass("fade-in");

                
                setTimeout(() => {
                    song_image.removeClass("fade-in");
                    song_content.removeClass("fade-in");
                }, 1000);

            }, 1000);
        },
        error: function(xhr, status, error) {
            console.error('Error fetching daily beatmap:', error);
        }
    });
}

function spawnHomePage() {
    if (currentPage != Pages.HOME) {
        currentPage = Pages.HOME;
        let url_prefix = window.innerWidth <= 768 ? "/pages/mobile" : "/pages/desktop";
        let url = url_prefix + "/home.html";
        
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(data => {
                document.querySelector('.main-content').innerHTML = data;
            })
            .catch(error => console.error('Error loading home page:', error));
    }
}

function spawnCreditsPage()  {
    if (currentPage != Pages.CREDITS) {

    }
}

function spawnSupportPage()  {
    if (currentPage != Pages.SUPPORT) {

    }
}

function spawnFeaturesPage() {
    if (currentPage != Pages.FEATURES) {

    }
}

function spawnDownloadPage() {
    if (currentPage != Pages.DOWNLOAD) {

    }
}

function spawnChangelogPage() {
    if (currentPage != Pages.CHANGELOG) {

    }
}

function spawnConfigPage() {
    if (currentPage != Pages.CONFIG) {

    }
}

function spawnWikiPage() {
    if (currentPage != Pages.WIKI) {

    }
}