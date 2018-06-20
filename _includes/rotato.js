var rotatoOpenCSS = "&lt;style&gt;.img-animation-container{ position:relative; width:100%; height:100%;} .img_animation {opacity: 0;position: absolute;top: 0;left: 0;width: 100%;}"
var rotatoCloseCSS = "&lt;/style&gt;"

function buildRotatoForm(){
    var rotatoNum = $("#rotatoNum").val();
    $("#rotatoInput").empty();
    for(var i = 0; i < rotatoNum; i++) {
        $("#rotatoInput").append('<input type="text" id="rotatoImageURL' + (i + 1) + '" class="form-control rotatoImageURL" name="image_values" placeholder="http://placehold.it/1600x900&text=Image' + (i + 1) + '">')
    }
    $("#imageURLs").fadeIn();
}

function createRotato(){
    var rotatoNumImages = $("#rotatoNum").val();
    var rotatoDimensions = $("#rotatoDimensions").val();
    var rotatoLink = $("#rotatoLink").val();
    var rotatoImageURL1 = $("#rotatoImageURL1").val();
    var rotatoImageURL2 = $("#rotatoImageURL2").val();
    var rotatoImageURL3 = $("#rotatoImageURL3").val();
    var rotatoImageURL4 = $("#rotatoImageURL4").val();
    var rotatoImageURL5 = $("#rotatoImageURL5").val();

    if (rotatoDimensions == "16x9"){
    var rotatoSizeCSS = "16x9 {padding-bottom: 56.25%;}";
    }
    if (rotatoDimensions == "4x3"){
    var rotatoSizeCSS = "4x3 {padding-bottom: 75%;}";
    }
    if (rotatoDimensions == "1x1"){
    var rotatoSizeCSS = "1x1 {padding-bottom: 100%;}";
    }
    if (rotatoDimensions == "3x1"){
    var rotatoSizeCSS = "3x1 {padding-bottom: 33.33%;}";
    }
    if (rotatoDimensions == "2x3"){
    var rotatoSizeCSS = "2x3 {padding-bottom: 150%;}";
    }

    //serve the right css for the number of images
    if (rotatoNumImages == 2){
    var rotatoKeyframeCSS = "@keyframes twoimgshow{0%,100%,80%{opacity:0}15%,60%{opacity:1}}.img-animation-container-2 #img_anim_1{animation:twoimgshow 8s 10ms infinite}.img-animation-container-2 #img_anim_2{animation:twoimgshow 8s 5s infinite}";
    }
    if (rotatoNumImages == 3){
    var rotatoKeyframeCSS = "@keyframes threeimgshow{0%,100%,52%{opacity:0}46%,8%{opacity:1}}.img-animation-container-3 #img_anim_1{animation:threeimgshow 12s 10ms infinite}.img-animation-container-3 #img_anim_2{animation:threeimgshow 12s 4s infinite}.img-animation-container-3 #img_anim_3{animation:threeimgshow 12s 8s infinite}";
    }
    if (rotatoNumImages == 4){
    var rotatoKeyframeCSS = "@keyframes fourimgshow{0%,100%,32%{opacity:0}28%,3%{opacity:1}}.img-animation-container-4 #img_anim_1{animation:fourimgshow 16s 10ms infinite}.img-animation-container-4 #img_anim_2{animation:fourimgshow 16s 4s infinite}.img-animation-container-4 #img_anim_3{animation:fourimgshow 16s 8s infinite}.img-animation-container-4 #img_anim_4{animation:fourimgshow 16s 12s infinite}";
    }
    if (rotatoNumImages == 5){
    var rotatoKeyframeCSS = "@keyframes fiveimgshow{0%,100%,26%{opacity:0}22%,4%{opacity:1}}.img-animation-container-5 #img_anim_1{animation:fiveimgshow 20s 10ms infinite}.img-animation-container-5 #img_anim_2{animation:fiveimgshow 20s 5s infinite}.img-animation-container-5 #img_anim_3{animation:fiveimgshow 20s 9s infinite}.img-animation-container-5 #img_anim_4{animation:fiveimgshow 20s 13s infinite}.img-animation-container-5 #img_anim_5{animation:fiveimgshow 20s 17s infinite}";
    }

    var imageValues = '';

    var imageValues = jQuery(".rotatoImageURL[name='image_values']").map(function(){
            return this.value
    }).get()

    var rotatoImageTags = "";
    var i = 0;
    while (i < rotatoNumImages) {
        rotatoImageTags += '<img class="img_animation" id="img_anim_' + (i + 1) + '" src="' + imageValues[i] + '" />';
        i++;
    }

    var rotatoHTML = '&lt;a href="' + rotatoLink + '"&gt;&lt;div class="img-animation-container img-animation-container-' + rotatoDimensions + ' img-animation-container-' + rotatoNumImages + '" &gt;' + rotatoImageTags + '&lt;/div&gt;&lt;/a&gt;';
    var rotatoPreview = '<a href="' + rotatoLink + '"><div class="img-animation-container img-animation-container-' + rotatoDimensions + ' img-animation-container-' + rotatoNumImages + '" >' + rotatoImageTags + '</div></a>';

    $("#rotatoCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + rotatoOpenCSS + " .img-animation-container-" + rotatoSizeCSS + rotatoKeyframeCSS + rotatoCloseCSS + rotatoHTML + "</textarea>");
    $("#rotatoPreview").html( previewLabel + rotatoPreview );
}
