/**
* jquery.fillerup.js v1.0.0
* http://jurs.me/
* License: MIT
*/
!function(e){e.fn.Fillerup=function(t){var i,a=e.extend({subtract:0,minHeight:0,maxHeight:0},t);scaledElement=this,scaleElement=function(){i=a.subtract,minHeight=a.minHeight,maxHeight=a.maxHeight,calculatedHeight=e(window).height()-i,calculatedHeight<minHeight&&(calculatedHeight=minHeight),calculatedHeight>maxHeight&&0!=maxHeight?calculatedHeight=maxHeight:e(window).height()-i,scaledElement.css("height",calculatedHeight+"px").css("min-height","minimumHeightpx")},e(window).load(scaleElement),e(window).resize(scaleElement)}}(jQuery);
