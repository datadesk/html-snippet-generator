function createGenericEmbed(){
    var genericURL = $("#generic-url").val();
    var escapediFrameURL = genericURL.replace(/\"/g,'\'');
    var escapediFrameURLCode = escapediFrameURL.replace(/</g,'&lt;');
    var escapediFrameURLCodeFinal = escapediFrameURLCode.replace(/>/g,'&gt;');

    //alert(escapediFrameURL);
    $("#genericembedNote").fadeIn();
    $("#genericembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + embedContainerCSS + embedContainerDivOpen + escapediFrameURLCodeFinal + embedContainerDivClose + "</textarea>");
    $("#genericpreview").html( previewLabel + previewPrefix + escapediFrameURL + previewSuffix );
}

function iframecopyText(){
    var content = $("#genericembedCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#iframe-copier").html("Copied!");
}