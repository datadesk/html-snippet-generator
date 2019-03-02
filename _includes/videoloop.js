var videoLoopCSS = "&lt;style&gt;.video-loop { position: relative; padding-top: 0; max-width: 100%; width: auto; height: auto; } .video-loop > *:first-child { width: 100%; height: 100%; } &lt;/style&gt;";

function createVideoLoopEmbed(){
    var videoLoopURL = $("#videoloop-url").val();
    var videoLoopURLClean = videoLoopURL.replace("http\:\/\/", "\/\/");
    var videoLoopEmbed = '<div class="video-loop"> <video autoplay loop muted playsinline> 	<source src="' + videoLoopURLClean + '"  type="video/mp4"> </video> </div>';
    var videoLoopPreview = '<div class="video-loop"> <video autoplay loop muted playsinline> 	<source src="' + videoLoopURLClean + '"  type="video/mp4"> </video> </div>';
    var unescapedVideojsScript = videojsScript;
    $("#videoLoopCode").html(embedLabel + "<textarea rows='12' class='codebox'>" + videoLoopCSS + videoLoopEmbed + "</textarea>");
    $("#videoLoopPreview").html( previewLabel + videoLoopEmbed );
}

function vlcopyText(){
    var content = $("#videoLoopCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#vl-copier").html("Copied!");
}