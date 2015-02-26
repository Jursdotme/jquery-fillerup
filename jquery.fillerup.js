/**
* jquery.fillerup.js v1.0.0
* http://jurs.me/
* License: MIT
*/

(function($) {

  // Define constructor
  $.fn.Fillerup = function( options ) {

    // Define option defaults
    var settings = $.extend({
      subtract: 0,
      minHeight: 0,
      maxHeight: 0
    }, options );

		var screenHeightCalculated,
        subtractableHeight,
        windowHeight;

    scaledElement = this;

    // Define main function
    scaleElement = function(){

      subtractableHeight = settings.subtract;
    	minHeight = settings.minHeight;
      maxHeight = settings.maxHeight;
      calculatedHeight = $(window).height() - subtractableHeight;

      if ( calculatedHeight < minHeight ) {
        calculatedHeight = minHeight;
      } if ( calculatedHeight > maxHeight && maxHeight != 0 ) {
        calculatedHeight = maxHeight;
      } else {
        $(window).height() - subtractableHeight;
      }

      scaledElement
        .css('height', calculatedHeight + 'px')
      	.css('min-height', 'minimumHeight'+'px')
      ;
    }

    // update heights on load and resize events
    $( window ).load(scaleElement);

    // throttled update heights on resize events
    $( window ).resize(scaleElement);

  }

}(jQuery));
