function openTableEmbed(){
    var openTableURL = $("#openTable-url").val();
    openTableURL += '?ref=18113';

    var returnHTML = '<hr style="border: 0.5px solid black;"><img src="assets/img/OT_logos/Logo_horizontal_RGB.jpg"><span style="padding-left:100px; padding-right: 100px; width: 212px;height: 12px;font-family: BentonGothic;font-size: 12px;font-weight: bold;font-style: normal;font-stretch: normal;line-height: 1.17;letter-spacing: normal;text-align: center;color: #333333;">Make a reservation at this restaurant.</span><a href="' + openTableURL + '"><span style="display:inline-block; width:200px; height:50px; border-radius:4px; background-color: #d83947;"><h1 style="width: 200px;height: 18px;font-family: BentonGothic;font-size: 18px;font-weight: bold;font-style: normal;font-stretch: normal;line-height: 1.22;letter-spacing: normal;text-align: center;color: #ffffff;">Find a Table</h1></span></a><hr style="border: 0.5px solid black;">';
    //alert(escapediFrameURL);
    $("#openTableembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + returnHTML + "</textarea>");
    $("#openTablepreview").html( previewLabel + previewPrefix + returnHTML + previewSuffix );
}

function openTablecopyText(){
    var content = $("#openTableembedCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#openTable-copier").html("Copied!");
}