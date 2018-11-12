var screendoorCSS = "&lt;style&gt;.pb-f-article-body #story div p,.pb-f-article-body #story div h2,.pb-f-article-body #story div h3,.pb-f-article-body #story div ul,.pb-f-article-body #story div ol,form.fr_form{max-width:650px!important;margin:18px auto!important}label.button{margin:3px 1px;color:#4591b8;font-family:Arial,sans-serif;letter-spacing:1px}label,.fr_page{font-size:18px;line-height:27px;margin:18px 0 5px 0;font-family:Georgia,Serif;color:#333}.fr_response_field_paragraph textarea.size_medium{max-width:650px;width:100%;height:100px}.fr_bottom,small{font-family:Arial,sans-serif}.button{border:2px solid #4591b8;border-radius:6px;text-transform:none;font-size:18px;line-height:27px;font-weight:normal;padding:5px 14px;cursor:pointer}.fr_add_file button{background-color:white}.fr_bottom button{color:#4591b8;background-color:#eee}&lt;/style&gt;";

function createScreendoor() {
    var screendoorID = $("#screendoorID").val();

    var formCSS = "&lt;link href=&quot;//d3q1ytufopwvkq.cloudfront.net/1/formrenderer.css&quot; rel=&quot;stylesheet&quot; /&gt;";
    var formJS = "&lt;script src=&quot;//d3q1ytufopwvkq.cloudfront.net/1/formrenderer.js&quot;&gt;&lt;/script&gt;";


    var unescapedformCSS = formCSS;
    var unescapedformJS = formJS;
    var escapedformCSS = unescapedformCSS.replace("&lt;","<").replace("&gt;",">");
    var escapedformJS = unescapedformJS.replace("&lt;","<").replace("&gt;",">");


    var screendoorHTML = "<form data-formrenderer>This form requires JavaScript to complete.</form><small style='display:inline-block;margin-top:10px;background:rgba(0,0,0,0.1);padding:5px 10px;border-radius:10px;'>Powered by <a href='https://www.dobt.co/screendoor/'>Screendoor</a>.</small>";

    var screendoorJS = "&lt;script&gt;FormRenderer.BUTTON_CLASS = 'button';new FormRenderer({'project_id':'" + screendoorID + "'});&lt;/script&gt;";
    var unescapedscreendoorJS = screendoorJS;
    var escapedscreendoorJS = unescapedscreendoorJS.replace("&lt;","<").replace("&gt;",">");

    $("#screendoorEmbedCode").html( embedLabel + "<textarea rows='12' class='codebox'>" +  unescapedformCSS + unescapedformJS + screendoorCSS + screendoorHTML + unescapedscreendoorJS  + "</textarea>");
}
