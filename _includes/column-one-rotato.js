var rotatoOpenCSS = "&lt;style&gt;.img-animation-container{ position:relative; width:100%; height:100%;} .img_animation {opacity: 0;position: absolute;top: 0;left: 0;width: 100%;}"
var rotatoCloseCSS = "&lt;/style&gt;"

function buildColumnOneRotatoForm(){
    var rotatoNum = $("#columnonerotatoNum").val();
    $("#columnonerotatoInput").empty();
    for(var i = 0; i < rotatoNum; i++) {
        $("#columnonerotatoInput").append('<input type="text" id="columnonerotatoImageURL' + (i + 1) + '" class="form-control columnonerotatoImageURL" name="rotato_image_values" placeholder="http://placehold.it/1600x900&text=Image' + (i + 1) + '">')
    }
    $("#columnoneimageURLs").fadeIn();
}

function createColumnOneRotato(){

    //get number of images, dimensions and link
    var rotatoNumImages = $("#columnonerotatoNum").val();
    var rotatoDimensions = $("#columnonerotatoDimensions").val();
    var rotatoLink = $("#columnonerotatoLink").val();

    //assign correct padding
    if (rotatoDimensions == "16x9"){
    var rotatoSizeCSS = "16x9 {padding-bottom: 56.25%;}";
    }
    if (rotatoDimensions == "4x3"){
    var rotatoSizeCSS = "4x3 {padding-bottom: 75%;}";
    }

    //get the right css for the number of images
    if (rotatoNumImages == 2){
    var rotatoKeyframeCSS = "@keyframes twoimgshow{0%,100%,80%{opacity:0}15%,60%{opacity:1}}.img-animation-container-2 #img_anim_1{animation:twoimgshow 8s 10ms infinite}.img-animation-container-2 #img_anim_2{animation:twoimgshow 8s 5s infinite}";
    }
    if (rotatoNumImages == 3){
    var rotatoKeyframeCSS = "@keyframes threeimgshow{0%,100%,52%{opacity:0}46%,8%{opacity:1}}.img-animation-container-3 #img_anim_1{animation:threeimgshow 12s 10ms infinite}.img-animation-container-3 #img_anim_2{animation:threeimgshow 12s 4s infinite}.img-animation-container-3 #img_anim_3{animation:threeimgshow 12s 8s infinite}";
    }
    if (rotatoNumImages == 4){
    var rotatoKeyframeCSS = "@keyframes fourimgshow{0%,100%,32%{opacity:0}28%,3%{opacity:1}}.img-animation-container-4 #img_anim_1{animation:fourimgshow 16s 10ms infinite}.img-animation-container-4 #img_anim_2{animation:fourimgshow 16s 4s infinite}.img-animation-container-4 #img_anim_3{animation:fourimgshow 16s 8s infinite}.img-animation-container-4 #img_anim_4{animation:fourimgshow 16s 12s infinite}";
    }

    var imageValues = '';

    var imageValues = jQuery(".columnonerotatoImageURL[name='rotato_image_values']").map(function(){
        return this.value
    }).get()

    var relativeURLs = [];

    for (var i = 0; i < imageValues.length; i++) {
        urls = imageValues[i].replace("http\:\/\/", "\/\/");
        relativeURLs.push(urls);
    }

    //make the image tags
    var rotatoImageTags = "";
    var i = 0;
    while (i < rotatoNumImages) {
        rotatoImageTags += '<img class="img_animation" id="img_anim_' + (i + 1) + '" src="' + relativeURLs[i] + '" />';
        i++;
    }

    //build rotato
    var rotatoHTML = '&lt;a href="' + rotatoLink + '"&gt;&lt;div class="img-animation-container img-animation-container-' + rotatoDimensions + ' img-animation-container-' + rotatoNumImages + '" &gt;' + rotatoImageTags + '&lt;/div&gt;&lt;/a&gt;';
    var rotatoPreview = '<a href="' + rotatoLink + '"><div class="img-animation-container img-animation-container-' + rotatoDimensions + ' img-animation-container-' + rotatoNumImages + '" >' + rotatoImageTags + '</div></a>';

    // add wrapper for column one
    var topper = '<style type="text/css" media="screen"> \
#hptag { \
padding-top: 16px; \
} \
li#col1tag { \
padding-bottom: 5px; \
border-bottom: 3px solid #990000; \
} \
</style> \
<div class="width-100 flex-container-column"> \
<figure class="">';

    var footer = '</figure> \
<ul id="hptag" class="tag-list-wrapper list-unstyled flex-container-row spaced spaced-sm spaced-top justify-center">' +	
'<li id="col1tag"> \
<a class="tag tag-minimal tag-first" href="' + rotatoLink + '">Column One</a>' +
'</li> \
</ul>' +	
'</div>';


    $("#column-one-rotato-code").html( embedLabel + "<textarea rows='12' class='codebox'>" + topper + rotatoOpenCSS + " .img-animation-container-" + rotatoSizeCSS + rotatoKeyframeCSS + rotatoCloseCSS + rotatoHTML + footer + "</textarea>");
    $("#column-one-rotato-preview").html( previewLabel + rotatoPreview );
}

function corcopyText(){
    var content = $("#column-one-rotato-code textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#cor-copier").html("Copied!");
}
