function createSeriesBox(){
    var list_headline = $("#list_headline").val();
    var list_head_url = $("#list_head_url").val();
    var first_story_url = $("#first_story_url").val();
    var first_story_image = $("#first_story_image").val();
    var second_story_url = $("#second_story_url").val();
    var second_story_subhead = $("#second_story_subhead").val();
    var second_story_hed = $("#second_story_hed").val();
    var second_story_image = $("#second_story_image").val();
    var third_story_url = $("#third_story_url").val();
    var third_story_subhead = $("#third_story_subhead").val();
    var third_story_hed = $("#third_story_hed").val();
    var third_story_image = $("#third_story_image").val();
    var fourth_story_url = $("#fourth_story_url").val();
    var fourth_story_subhead = $("#fourth_story_subhead").val();
    var fourth_story_hed = $("#fourth_story_hed").val();
    var fourth_story_image = $("#fourth_story_image").val();


    var seriesStyle = ' <style> \
.item-card { \
position: relative; \
} \
.item-container { \
width: 95%; \
vertical-align: top; \
margin: auto; \
padding: 10px 10px; \
} \
div.list-container { \
max-width: 100%; \
margin-top: 0px; \
} \
#slopez p.kicker { \
font-family: Benton; \
font-size: 11px; \
line-height: 15px; \
font-style: italic; \
text-transform: uppercase; \
margin-bottom: 8px; \
} \
a.recommender p#part_number { \
color: #999; \
font-size: 11px; \
} \
a.recommender#seriesrec:hover{ \
text-decoration: none; \
} \
a.recommender#seriesrec:hover p, a.recommender#seriesrec:hover h6 { \
color: #999; \
text-decoration: none; \
} \
</style>';

    var firstItem = ' <figure class=""> \
<div class="img-container aspect-ratio-16x9"> \
<a href="' + first_story_url + '"><img alt="" class="full-width" src="' + first_story_image + '"></a> \
</div> \
</figure> \
<hr>';

    var laterItems = ' <div class="flex-container-column"> \
<ul class="tag-list-wrapper list-unstyled flex-container-row spaced spaced-sm spaced-bottom justify-center"> \
<li class="tag tag-minimal tag-first align-center" href="' + list_head_url + '">' + list_headline + '</li> \
</ul> \
<div class="list-container"> \
<div class="single-item"> \
<div class="item-card"> \
<div class="item-container"> \
<ul class="list-unstyled collection collection-vertical collection-cards"> \
<li class="collection-item flex-container-row align-items-start collection-item-border-bottom"> \
<div class="flex-container-column align-items-start flex"> \
<div> \
<a class="recommender" id="seriesrec" href="' + second_story_url + '"> \
<p class="recommender" id="part_number">' + second_story_subhead + '</p> \
<h6>' + second_story_hed + '</h6></a> \
</div> \
</div><a aria-label="" href="' + second_story_url +'"> \
<figure class=""> \
<div class="right-element image-xs img-container aspect-ratio-1x1"><img alt="" class="b-lazy full-width b-loaded" src="' + second_story_image + '"></div> \
</figure></a> \
</li> \
</ul> \
</div> \
</div> \
<div class="item-card"> \
<div class="item-container"> \
<ul class="list-unstyled collection collection-vertical collection-cards"> \
<li class="collection-item flex-container-row align-items-start collection-item-border-bottom"> \
<div class="flex-container-column align-items-start flex"> \
<div> \
<a class="recommender" id="seriesrec" href="' + third_story_url + '"> \
<p class="recommender" id="part_number">' + third_story_subhead + '</p> \
<h6>' + third_story_hed + '</h6></a> \
</div> \
</div><a aria-label="" href="' + third_story_url + '"> \
<figure class=""> \
<div class="right-element image-xs img-container aspect-ratio-1x1"><img alt="" class="b-lazy full-width b-loaded" src="' + third_story_image + '"></div> \
</figure></a> \
</li> \
</ul> \
</div> \
</div> \
<div class="item-card"> \
<div class="item-container"> \
<ul class="list-unstyled collection collection-vertical collection-cards"> \
<li class="collection-item flex-container-row align-items-start collection-item-border-bottom"> \
<div class="flex-container-column align-items-start flex"> \
<div> \
<a class="recommender" id="seriesrec" href="' + fourth_story_url + '"> \
<p class="recommender" id="part_number">' + fourth_story_subhead + '</p> \
<h6>' + fourth_story_hed + '</h6></a> \
</div> \
</div><a aria-label="" href="' + fourth_story_url + '"> \
<figure class=""> \
<div class="right-element image-xs img-container aspect-ratio-1x1"><img alt="" class="b-lazy full-width b-loaded" src="' + fourth_story_image + '"></div> \
</figure></a> \
</li> \
</ul> \
</div> \
</div> \
</div> \
</div> \
</div>';




    $("#seriesboxcode").html( embedLabel + "<textarea rows='12' class='codebox'>" + seriesStyle + firstItem + laterItems + "</textarea>");
    $("#seriesboxpreview").html( previewLabel + seriesStyle + firstItem + laterItems );

}

function sboxcopyText(){
    var content = $("#seriesboxcode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#sbox-copier").html("Copied!");
}