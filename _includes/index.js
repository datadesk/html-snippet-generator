var embedLabel = "<br/><p class='control-label'>Embed code:</p>";

var videojsCSS = "&lt;style&gt;.video-js { position: relative; padding-bottom: 56.25%; padding-top: 0; max-width: 100%; width: auto; height: auto; } .video-js > *:first-child { width: 100%; height: 100%; }&lt;/style&gt;";
var videojsScript = '&lt;script src="//players.brightcove.net/3690581438001/B1MxOxSFnb_default/index.min.js"&gt;&lt;/script&gt;';

var embedContainerCSS = "&lt;style&gt;.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }&lt;/style&gt;";
var embedGettyContainerCSSFront = "&lt;style&gt;.embed-container { position: relative; padding-bottom: ";
var embedGettyContainerCSSBack = "%; height: 0; overflow: hidden; max-width: 100%; height: auto; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }&lt;/style&gt;";
var embedSquareContainerCSS = "&lt;style&gt;.embed-container {position: relative; padding-bottom: 100%; height: 0; overflow: hidden;} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }&lt;/style&gt;";
var embedSquarishContainerCSS = "&lt;style&gt;.embed-container {position: relative; padding-bottom: 120%; height: 0; overflow: hidden;} .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }&lt;/style&gt;";
var embedContainerDivOpen = "&lt;div class='embed-container'&gt;";
var embedContainerDivClose = "&lt;/div&gt;";

var previewLabel = "<p class='control-label'>Preview:</p>";
var previewPrefix = "<div class='embed-container'>";
var previewPrefixSquarish = "<div id='squarish' class='embed-container'>";
var previewPrefixGettyFront = "<div id='getty' class='embed-container'";
var previewSuffix = "</div>";
