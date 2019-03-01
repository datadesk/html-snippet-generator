function createColumnOneRepresentation(){
    var story_url = $("#story_url").val();
    var photo_url = $("#photo_url").val();

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
<div class=" img-container aspect-ratio-4x3"> \
<a href="' + story_url + '"> <img class="full-width" alt="" src="' + photo_url + '"> </a> \
</div> \
</figure> \
<ul id="hptag" class="tag-list-wrapper list-unstyled flex-container-row spaced spaced-sm spaced-top justify-center"> \
<li id="col1tag"> \
<a class="tag tag-minimal tag-first" href="' + story_url + '">Column One</a> \
</li> \
</ul> \
</div>';


    $("#column-one-representation-code").html(embedLabel + "<textarea rows='12' class='codebox'>" + $return + "</textarea>");
    $("#column-one-representation-preview").html(previewLabel + $return);

}