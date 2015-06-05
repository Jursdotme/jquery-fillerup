/**
 * jquery-fillerup - Fillerup makes the height of all selected elements exactly equal to the height of the browser window.<br> With the ability to define min and max height as well as a subtracted value.
 * version v1.2.0
 * link https://github.com/Jursdotme/jquery-fillerup
 * license MIT
 */
(function($) {
  $.fn.Fillerup = function(options) {
    var _this, calculatedHeight, screenHeightCalculated, settings, throttle, windowHeight;
    settings = $.extend({
      subtract: 0,
      minHeight: 0,
      maxHeight: 0
    }, options);
    screenHeightCalculated = void 0;
    windowHeight = void 0;
    _this = $(this);
    calculatedHeight = $(window).height() - settings.subtract;
    throttle = function(fn, interval) {
      var exec, isWaiting;
      isWaiting = false;
      exec = function() {
        if (isWaiting) {
          return;
        }
        isWaiting = true;
        setTimeout((function() {
          isWaiting = false;
          fn();
        }), interval);
      };
      return exec;
    };
    if (calculatedHeight < settings.minHeight) {
      calculatedHeight = settings.minHeight;
    }
    if (calculatedHeight > settings.maxHeight && settings.maxHeight !== 0) {
      calculatedHeight = settings.maxHeight;
    } else {
      $(window).height() - settings.subtract;
    }
    $(this).css('height', calculatedHeight + 'px').css('min-height', settings.minHeight + 'px');
    $(window).load(function() {
      _this.Fillerup({
        subtract: settings.subtract,
        minHeight: settings.minHeight,
        maxHeight: settings.maxHeight
      });
    });
    $(window).on('resize', throttle((function(event) {
      _this.Fillerup({
        subtract: settings.subtract,
        minHeight: settings.minHeight,
        maxHeight: settings.maxHeight
      });
    }), 1000));
  };
})(jQuery);
