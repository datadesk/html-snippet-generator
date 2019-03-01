function createColumnOneRotato(){
    var story_url = $("#story_url").val();
    var story_image_one = $("#story_image_one").val();
    var story_image_two = $("#story_image_two").val();
    var story_image_three = $("#story_image_three").val();
    var story_image_four = $("#story_image_four").val();

    var $return = '<style type="text/css" media="screen"> \
#hptag { \
padding-top: 16px; \
} \
li#col1tag { \
padding-bottom: 5px; \
border-bottom: 3px solid #990000; \
} \
</style> \
<div class="width-100 flex-container-column"> \
<figure class=""> \
<style>.img-animation-container{ position:relative; width:100%; height:100%;} .img_animation {opacity: 0;position: absolute;top: 0;left: 0;width: 100%;} .img-animation-container-4x3 {padding-bottom: 75%;}@keyframes fourimgshow{0%,100%,32%{opacity:0}28%,3%{opacity:1}}.img-animation-container-4 #img_anim_1{animation:fourimgshow 16s 10ms infinite}.img-animation-container-4 #img_anim_2{animation:fourimgshow 16s 4s infinite}.img-animation-container-4 #img_anim_3{animation:fourimgshow 16s 8s infinite}.img-animation-container-4 #img_anim_4{animation:fourimgshow 16s 12s infinite}</style><a href="' + story_url + '"><div class="img-animation-container img-animation-container-4x3 img-animation-container-4" ><img class="img_animation" id="img_anim_1" src="' + story_image_one + '" /><img class="img_animation" id="img_anim_2" src="' + story_image_two + '" /><img class="img_animation" id="img_anim_3" src="' + story_image_three + '" /><img class="img_animation" id="img_anim_4" src="' + story_image_four + '" /></div></a> \
</figure> \
<ul id="hptag" class="tag-list-wrapper list-unstyled flex-container-row spaced spaced-sm spaced-top justify-center"> \
<li id="col1tag"> \
<a class="tag tag-minimal tag-first" href="' + story_url + '">Column One</a> \
</li> \
</ul> \
</div>'

    $("#column-one-rotato-code").html( embedLabel + "<textarea rows='12' class='codebox'>" + $return + "</textarea>");
    $("#column-one-rotato-preview").html( previewLabel + $return );

}