function createPremiumVideoEmbed() {
    var p2pcontentID = $("#p2pcontentID").val();
    var posterImg = $("#posterImg").val();    
    var posterImgClean = posterImg.replace("http\:\/\/", "\/\/");
    var premiumVideoEmbed = '<video data-account="3690581438001" data-player="B1MxOxSFnb" data-embed="default" data-video-id="ref:' + p2pcontentID + '" poster="' + posterImgClean + '" class="video-js" controls></video>&lt;script src="//players.brightcove.net/3690581438001/B1MxOxSFnb_default/index.min.js"&gt;&lt;/script&gt;';
    var premiumVideoPreview = '<video data-account="3690581438001" data-player="B1MxOxSFnb" data-embed="default" data-video-id="ref:' + p2pcontentID + '" poster="' + posterImgClean + '" class="video-js" controls></video>';

    var unescapedVideojsScript = videojsScript;
    var escapedVideojsScript = unescapedVideojsScript.replace("&lt;","<").replace("&gt;",">");
    $("#premiumVideoCode").html(embedLabel + "<textarea rows='12' class='codebox'>" + videojsCSS + premiumVideoEmbed + "</textarea>");
    $("#premiumVideoPreview").html( previewLabel + premiumVideoPreview + escapedVideojsScript );
}

function pvcopyText(){
    var content = $("#premiumVideoCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#pv-copier").html("Copied!");
}
