function openTableEmbed(){
    var openTableURL = $("#openTable-url").val();
    var escapedOTURL = openTableURL.replace(/\"/g,'\'');
    var escapedOTURLCode = escapedOTURL.replace(/</g,'&lt;');
    var escapedOTURLCodeFinal = escapedOTURLCode.replace(/>/g,'&gt;');

    //alert(escapediFrameURL);
    $("#genericembedNote").fadeIn();
    $("#genericembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + embedContainerCSS + embedContainerDivOpen + escapedOTURLCodeFinal + embedContainerDivClose + "</textarea>");
    $("#genericpreview").html( previewLabel + previewPrefix + escapedOTURL + previewSuffix );
}

function openTablecopyText(){
    var content = $("#genericembedCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#iframe-copier").html("Copied!");
}