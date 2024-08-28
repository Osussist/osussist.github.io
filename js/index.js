let apiUrl = "https://osuscrapperapi.onrender.com"

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

function getDailyBeatmap() {
    $.ajax({
        url: apiUrl + "/get/daily-beatmap",
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

                let highest_diff = Math.round(Math.max(data.ratings));

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

document.addEventListener("DOMContentLoaded", function() {
    getDailyBeatmap();
    spawnHomePage();
});