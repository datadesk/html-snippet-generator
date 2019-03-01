function createSeriesBox(){
    var list_headline = $("#list_headline").val();
    var first_story_url = $("#first_story_url").val();
    var first_story_image = $("#first_story_image").val();
    var second_story_url = $("#second_story_url").val();
    var second_story_hed = $("#second_story_hed").val();
    var second_story_image = $("#second_story_image").val();
    var third_story_url = $("#third_story_url").val();
    var third_story_hed = $("#third_story_hed").val();
    var third_story_image = $("#third_story_image").val();
    var fourth_story_url = $("#fourth_story_url").val();
    var fourth_story_hed = $("#fourth_story_hed").val();
    var fourth_story_image = $("#fourth_story_image").val();
    var part_one_subhead = $("#part_one_subhead").val();
    var part_two_subhead = $("#part_two_subhead").val();
    var part_three_subhead = $("#part_three_subhead").val();


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
<!--FIRST STORY: IT MUST MATCH THE STORY YOU PATHED IN FLEX FEATURE. REPLACE URL AND IMG URL. KEEP /600 AT END OF IMG URL--> \
<a href="' + first_story_url + '"><img alt="" class="full-width" src="' + first_story_image + '"></a> \
</div> \
</figure> \
<hr>';

    var laterItems = ' <div class="flex-container-column"> \
<ul class="tag-list-wrapper list-unstyled flex-container-row spaced spaced-sm spaced-bottom justify-center"> \
<!--LIST HEADLINE. REPLACE AS NECESSARY--> \
<li class="tag tag-minimal tag-first align-center" href="#">' + list_headline + '</li> \
</ul> \
<div class="list-container"> \
<div class="single-item"> \
<div class="item-card"> \
<div class="item-container"> \
<ul class="list-unstyled collection collection-vertical collection-cards"> \
<li class="collection-item flex-container-row align-items-start collection-item-border-bottom"> \
<div class="flex-container-column align-items-start flex"> \
<div> \
<!--SECOND STORY: REPLACE URL--> \
<a class="recommender" id="seriesrec" href="' + second_story_url + '"> \
<!--"PART 1" SUBHEAD, RENAME THESE AS NECESSARY--> \
<p class="recommender" id="part_number">' + part_one_subhead + '</p> \
<!--SECOND STORY: REPLACE HED--> \
<h6>' + second_story_hed + '</h6></a> \
</div> \
<!--SECOND STORY: REPLACE URL--> \
</div><a aria-label="" href="' + second_story_url +'"> \
<figure class=""> \
<!--SECOND STORY: REPLACE IMG URL. KEEP /600 AT END OF IMG URL--> \
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
<!--THIRD STORY: REPLACE URL--> \
<a class="recommender" id="seriesrec" href="' + third_story_url + '"> \
<!--"PART 2" SUBHEAD, RENAME THESE AS NECESSARY--> \
<p class="recommender" id="part_number">' + part_two_subhead + '</p> \
<!--THIRD STORY: REPLACE HED--> \
<h6>' + third_story_hed + '</h6></a> \
</div> \
<!--THIRD STORY: REPLACE URL--> \
</div><a aria-label="" href="' + third_story_url + '"> \
<figure class=""> \
<!--THIRD STORY: REPLACE IMG URL, KEEP /600--> \
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
<!--FOURTH STORY: REPLACE URL--> \
<a class="recommender" id="seriesrec" href="' + fourth_story_url + '"> \
<!--"PART 3" SUBHEAD, RENAME THESE AS NECESSARY--> \
<p class="recommender" id="part_number">' + part_three_subhead + '</p> \
<!--FOURTH STORY: REPLACE HED--> \
<h6>' + fourth_story_hed + '</h6></a> \
</div> \
<!--FOURTH STORY: REPLACE URL--> \
</div><a aria-label="" href="' + fourth_story_url + '"> \
<figure class=""> \
<!--FOURTH STORY: REPLACE IMG URL, KEEP /600--> \
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