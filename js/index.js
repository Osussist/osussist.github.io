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
        url: apiUrl + "/get-daily-beatmap",
        method: "GET",
        dataType: "json",
        Headers: {
            "Access-Control-Allow-Origin": "*"
        },
        success: function(data) {
            let song_title = $("#title-daily-btmp");
            let song_artist = $("#artist-daily-btmp");
            let song_cover = $("#cover-daily-btmp");
            let song_mapper = $("#mapper-daily-btmp");
            let song_star_holder = $("#stars-holder");

            song_cover.attr("src", data.cover);
            song_title.html(data.title);
            song_artist.html(`Artist: ${data.artist}`);
            song_mapper.html(`Mapper: ${data.creator}`);
            song_star_holder.html("");

            let highest_diff = Math.round(data.ratings[0]);


            if (highest_diff > 8)
                highest_diff = 8;

            for (let i = 0; i < highest_diff; i++) {
                song_star_holder.append("<i class='fas fa-star'></i>\n");
            }
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