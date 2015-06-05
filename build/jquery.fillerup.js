/**
 * jquery-fillerup - Fillerup makes the height of all selected elements exactly equal to the height of the browser window.<br> With the ability to define min and max height as well as a subtracted value.
 * version v1.2.0
 * link https://github.com/Jursdotme/jquery-fillerup
 * license MIT
 */
(function($) {
  $.fn.Fillerup = options(function() {
    var calculatedHeight, doneResizing, id, maxHeight, minHeight, selectedElement, settings, subtractableHeight;
    settings = $.extend({
      subtract: 0,
      minHeight: 0,
      maxHeight: 0
    }, options);
    selectedElement = $(this);
    subtractableHeight = settings.subtract;
    minHeight = settings.minHeight;
    maxHeight = settings.maxHeight;
    calculatedHeight = $(window).height() - subtractableHeight;
    if (calculatedHeight < minHeight) {
      calculatedHeight = minHeight;
    }
    if (calculatedHeight > maxHeight && maxHeight !== 0) {
      calculatedHeight = maxHeight;
    } else {
      $(window).height() - subtractableHeight;
    }
    selectedElement.css('height', calculatedHeight + 'px').css('min-height', 'minimumHeight' + 'px');
    $(window).load(function() {
      selectedElement.Fillerup(function() {
        return {
          subtract: settings.subtract,
          minHeight: settings.minHeight,
          maxHeight: settings.maxHeight
        };
      });
    });
    id = void 0;
    doneResizing = function() {
      _this.Fillerup({
        subtract: settings.subtract,
        minHeight: settings.minHeight,
        maxHeight: settings.maxHeight
      });
    };
    return $(window).resize(function() {
      clearTimeout(id);
      id = setTimeout(doneResizing, 500);
    });
  });
})(jQuery);
