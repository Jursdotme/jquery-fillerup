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
          windowHeight,

          _this = $(this),
          calculatedHeight = $(window).height() - settings.subtract;

      if ( calculatedHeight < settings.minHeight ) {
        calculatedHeight = settings.minHeight;
      } if ( calculatedHeight > settings.maxHeight && settings.maxHeight !== 0 ) {
        calculatedHeight = settings.maxHeight;
      } else {
        $(window).height() - settings.subtract;
      }

      $(this)
        .css('height', calculatedHeight + 'px')
       	.css('min-height', settings.minHeight+'px')
      ;

      // update heights on load and resize events
      $( window ).load( function() {
        _this.Fillerup({
          subtract: settings.subtract,
          minHeight: settings.minHeight,
          maxHeight: settings.maxHeight
        });
      });

    // Throttle Fuction
    function throttle (fn, interval) {
      var isWaiting = false;

      var exec = function () {
        if (isWaiting) {
          return;
        }

        isWaiting = true;
        setTimeout(function () {
          isWaiting = false;
          fn();
        }, interval);
      };

      return exec;
    }

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
