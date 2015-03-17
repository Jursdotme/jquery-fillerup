/**
* jquery.fillerup.js v1.0.0
* http://jurs.me/
* License: MIT
*/
!function(i){i.fn.Fillerup=function(t){var e,h=i.extend({subtract:0,minHeight:0,maxHeight:0},t);_this=i(this),e=h.subtract,minHeight=h.minHeight,maxHeight=h.maxHeight,calculatedHeight=i(window).height()-e,calculatedHeight<minHeight&&(calculatedHeight=minHeight),calculatedHeight>maxHeight&&0!=maxHeight?calculatedHeight=maxHeight:i(window).height()-e,i(this).css("height",calculatedHeight+"px").css("min-height","minimumHeightpx"),i(window).load(function(){_this.Fillerup({subtract:h.subtract,minHeight:h.minHeight,maxHeight:h.maxHeight})}),i(window).resize(function(){_this.Fillerup({subtract:h.subtract,minHeight:h.minHeight,maxHeight:h.maxHeight})})}}(jQuery);
