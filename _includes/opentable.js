function openTableEmbed(){
    var openTableURL = $("#openTable-url").val();
    if (!openTableURL || !openTableURL.startsWith('https://www.opentable.com/r/')) {
        // Error handling
        alert('Invalid Open Table URL');
        return;
    }

    openTableURL += '?ref=18113';
    var returnHTML = '<div style="display: flex; flex-wrap: nowrap; border-top: 0.5px solid #808080; border-bottom: 0.5px solid grey; width: 100%; height: 80px;"> <div style="margin: auto; margin-left: 1px;"> <img src="https://www.latimes.com/projects/opentable-widget/static/open-table-Logo_horizontal_RGB.png" style="width: 200px" alt="Open Table"></div> <div style="width: 20%; margin: auto; text-align: center; font-family: BentonGothic,Arial,sans-serif; font-size: 12px; font-weight: bold; font-style: normal; font-stretch: normal; line-height: 1.17; letter-spacing: normal; color: #333333">Make a reservation at this restaurant.</div> <div style="margin: auto; margin-right: 1px;"><a href="' + openTableURL + '" style="text-decoration:none" rel="nofollow noopener" target="_blank"><div style="width: 200px; text-align: center; height:50px; border-radius:4px; background-color: #d83947;"><div style="vertical-align: center; font-family: BentonGothic,Arial,sans-serif; font-size: 18px; font-weight: bold; font-style: normal; font-stretch: normal; line-height: 2.7; letter-spacing: normal; color: #ffffff;">Find a Table</div></div></a></div></div>';

    $("#openTableembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + returnHTML + "</textarea>");
    $("#openTablepreview").html( previewLabel + previewPrefix + returnHTML + previewSuffix );
}

function openTablecopyText(){
    var content = $("#openTableembedCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#openTable-copier").html("Copied!");
}