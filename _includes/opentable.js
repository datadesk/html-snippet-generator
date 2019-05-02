function openTableEmbed(){
    var openTableURL = $("#openTable-url").val();
    if (!openTableURL || !openTableURL.startsWith('https://www.opentable.com/r/')) {
        // Error handling
        alert('Invalid Open Table URL');
        return;
    }

    openTableURL += '?ref=18113';

    var returnHTML = "&lt;iframe id =&#34;opentableiframe&#34; style=&#34;width:100%&#34; frameborder=&#34;0&#34; srcdoc=&#34; &lt;!DOCTYPE html&gt; &lt;html&gt; &lt;head&gt; &lt;script&gt; function getIframeContentHeight() { var contentContainer = document.getElementById(&#39;opentablecontainer&#39;); window.parent.document.getElementById(&#39;opentableiframe&#39;).style.height = (contentContainer.offsetHeight + 30) + 'px'; } document.addEventListener(&#39;DOMContentLoaded&#39;, (event) =&gt; { getIframeContentHeight(); }); window.onresize = getIframeContentHeight; &lt;/script&gt; &lt;style&gt; #opentablecontainer {display: flex; flex-direction: row; border-top: 0.5px solid #808080; border-bottom: 0.5px solid grey; width: 90%; margin: auto; height: auto;} @media only screen and (max-width : 640px) { #opentablecontainer { flex-direction:column; } } #opentablelogocontainer {margin: auto; margin-top:10px; margin-bottom:10px;} #opentablelogo {width: 200px;} #opentabletext {width: 20%; margin: auto; text-align: center; font-family: BentonGothic,Arial,sans-serif; font-size: 12px; font-weight: bold; font-style: normal; font-stretch: normal; line-height: 1.17; letter-spacing: normal; color: #333333;} #opentablelinkcontainer {margin: auto; margin-top:10px; margin-bottom:10px;} #opentablelink {text-decoration:none;} #opentablelinkredbox {width: 200px; text-align: center; height:50px; border-radius:4px; background-color: #d83947;} #opentablelinktext {vertical-align: center; font-family: BentonGothic,Arial,sans-serif; font-size: 18px; font-weight: bold; font-style: normal; font-stretch: normal; line-height: 2.7; letter-spacing: normal; color: #ffffff;} &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div id=&#39;opentablecontainer&#39;&gt; &lt;div id=&#39;opentablelogocontainer&#39;&gt; &lt;img id=&#39;opentablelogo&#39; src=&#39;https://www.latimes.com/projects/opentable-widget/static/open-table-Logo_horizontal_RGB.png&#39; alt=&#39;Open Table&#39;&gt; &lt;/div&gt; &lt;div id=&#39;opentabletext&#39;&gt;Make a reservation at this restaurant.&lt;/div&gt; &lt;div id=&#39;opentablelinkcontainer&#39;&gt; &lt;a id=&#39;opentablelink&#39; href=&#39;" + openTableURL + "&#39; rel=&#39;nofollow noopener&#39; target=&#39;_blank&#39;&gt; &lt;div id=&#39;opentablelinkredbox&#39;&gt; &lt;div id=&#39;opentablelinktext&#39;&gt;Find a Table&lt;/div&gt; &lt;/div&gt; &lt;/a&gt; &lt;/div&gt; &lt;/div&gt; &lt;/body&gt; &lt;/html&gt;&#34;&gt; &lt;/iframe&gt;"

    $("#openTableembedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" + returnHTML + "</textarea>");
    $("#openTablepreview").html( previewLabel + previewPrefix + returnHTML + previewSuffix );
}

function openTablecopyText(){
    var content = $("#openTableembedCode textarea.codebox");
    content.select();
    document.execCommand("copy");
    $("#openTable-copier").html("Copied!");
}