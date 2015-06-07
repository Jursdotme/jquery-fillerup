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

      function throttle (fn, interval) {
          var isWaiting = false;

          var exec = function (event) {
              if (isWaiting) {
                  return;
              }

              isWaiting = true;
              setTimeout(function () {
                  isWaiting = false;
                  fn(event);
              }, interval);
          };

          return exec;
      }


      // update heights on load and resize events
      $( window ).load( function() {
        _this.Fillerup({
          subtract: settings.subtract,
          minHeight: settings.minHeight,
          maxHeight: settings.maxHeight
        });
      });

      // exec on resize function once in every seconds
      $(window).on('resize', throttle(function (event) {
        _this.Fillerup({
          subtract: settings.subtract,
          minHeight: settings.minHeight,
          maxHeight: settings.maxHeight
        });
      }, 1000));
  }

}(jQuery));
