function openTableEmbed(){
    var openTableURL = $("#openTable-url").val();
    if (!openTableURL || !openTableURL.startsWith('https://www.opentable.com/r/')) {
        // Error handling
        alert('Invalid Open Table URL');
        return;
    }

    openTableURL += '?ref=18113';
    var iframeUrl = 'https://www.latimes.com/projects/opentable-widget/static/widget.html?restUri=' + encodeURIComponent(openTableURL);

    var returnHTML = '<iframe id="opentableiframe" style="width:100%; border: 0;" src="' + iframeUrl + '"></iframe>';

    $("#openTableembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + returnHTML + "</textarea>");
    $("#openTablepreview").html( previewLabel + previewPrefix + returnHTML + previewSuffix );
}

function openTablecopyText(){
    var content = $("#openTableembedCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#openTable-copier").html("Copied!");
}
