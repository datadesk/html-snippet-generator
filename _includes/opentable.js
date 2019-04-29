function openTableEmbed(){
    var openTableURL = $("#openTable-url").val();
    openTableURL += '?ref=18113&rel="nofollow noopener"&target="_blank"';

    var returnHTML = ' <div style="border-top: 0.5px solid grey; border-bottom: 0.5px solid grey; width: 100%; height: 80px;"><img src="Logo_horizontal_RGB.png" style="vertical-align: middle; margin-top:9px; margin-bottom:9px; float:left; max-width:100%; height:auto;"><span style="display:inline-block; float: center; margin-top:30px; margin-bottom:30px; padding-left:15%; padding-right:15%"><span style="font-family: BentonGothic;font-size: 12px;font-weight: bold;font-style: normal;font-stretch: normal;line-height: 1.17;letter-spacing: normal;text-align: center;color: #333333;">Make a reservation at this restaurant.</span></span><a href="?ref=18113"><span style="display:inline-block; vertical-align:middle; float: right; margin-top:12px; margin-bottom:12px; width:200px; height:50px; border-radius:4px; background-color: #d83947;"><span style="position:relative; vertical-align: center; font-family: BentonGothic;font-size: 18px;font-weight: bold;font-style: normal;font-stretch: normal;line-height: 2.7;letter-spacing: normal;color: #ffffff; margin-left: 26.5%;">Find a Table</span></span></a></div>';

    $("#openTableembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + returnHTML + "</textarea>");
    $("#openTablepreview").html( previewLabel + previewPrefix + returnHTML + previewSuffix );
}

function openTablecopyText(){
    var content = $("#openTableembedCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#openTable-copier").html("Copied!");
}