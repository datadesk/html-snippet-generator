function createYouTubeEmbed(){
    var youtubeURL = $("#youtube-url").val();
    if (youtubeURL.length > 28){
    var uri = youtubeURL;
    var queryString = {};
    uri.replace(
        new RegExp("([^?=&]+)(=([^&]*))?", "g"),
        function($0, $1, $2, $3) { queryString[$1] = $3; }
    );
    var youtubeID = (queryString['v']);
    } else {
    var youtubeID = youtubeURL.substring(16);
    }

    var youtubeMutedAutoplay = 0;
    var youtubeMutedAutoplay = $('input:checkbox[name="youtubeMutedAutoplay"]').is(":checked");
    if (youtubeMutedAutoplay == true ){
    var youtubeMutedAutoplay = 1;
    } else {
    var youtubeMutedAutoplay = 0;
    }

    var youtubeEmbed = "&lt;iframe src='https://www.youtube.com/embed/" + youtubeID + "?autoplay=" + youtubeMutedAutoplay + "&mute=" + youtubeMutedAutoplay + "' frameborder='0' allowfullscreen&gt;&lt;/iframe&gt;";
    var youtubepreview = "<iframe src='https://www.youtube.com/embed/" + youtubeID + "?autoplay=" + youtubeMutedAutoplay + "&mute=" + youtubeMutedAutoplay + "' frameborder='0' allowfullscreen></iframe>";

    $("#youtubeembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + embedContainerCSS + embedContainerDivOpen + youtubeEmbed + embedContainerDivClose + "</textarea>");
    $("#youtubepreview").html( previewLabel + previewPrefix + youtubepreview + previewSuffix );

}
