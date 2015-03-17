/**
* jquery.fillerup.js v1.1.0
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

      _this = $(this);

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

      $(this)
        .css('height', calculatedHeight + 'px')
       	.css('min-height', 'minimumHeight'+'px')
      ;

      // update heights on load and resize events
      $( window ).load( function() {
        _this.Fillerup({
          subtract: settings.subtract,
          minHeight: settings.minHeight,
          maxHeight: settings.maxHeight
        });
      });

      // throttled update heights on resize events
      $( window ).resize( function() {
        _this.Fillerup({
          subtract: settings.subtract,
          minHeight: settings.minHeight,
          maxHeight: settings.maxHeight
        });
      });
  }

}(jQuery));
