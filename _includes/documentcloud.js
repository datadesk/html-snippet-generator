var dcParse = function (url) {
    // https://www.documentcloud.org/documents/254013-attehn61.html
    return url.split("documents/")[1].split(".html")[0];
}

function creatDocumentCloudEmbed(){
    var url = $("#documentcloud-url").val();
    var slug = dcParse(url);
    var template = _.template($("#documentcloud-jst").html());
    var html = template({slug: slug});
    $("#documentcloudembedNote").fadeIn();
    $("#documentcloudembedCode").html(embedLabel + "<textarea rows='12' class='codebox'>" + html + "</textarea>");
}
