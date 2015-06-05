(($) ->
  # Define constructor

  $.fn.Fillerup = (options) ->
    # Define option defaults
    settings = $.extend({
      subtract: 0
      minHeight: 0
      maxHeight: 0
    }, options)
    screenHeightCalculated = undefined
    windowHeight = undefined
    _this = $(this)
    calculatedHeight = $(window).height() - (settings.subtract)
    # Throttle Fuction

    throttle = (fn, interval) ->
      isWaiting = false

      exec = ->
        if isWaiting
          return
        isWaiting = true
        setTimeout (->
          isWaiting = false
          fn()
          return
        ), interval
        return

      exec

    if calculatedHeight < settings.minHeight
      calculatedHeight = settings.minHeight
    if calculatedHeight > settings.maxHeight and settings.maxHeight != 0
      calculatedHeight = settings.maxHeight
    else
      $(window).height() - (settings.subtract)
    $(this).css('height', calculatedHeight + 'px').css 'min-height', settings.minHeight + 'px'
    # update heights on load and resize events
    $(window).load ->
      _this.Fillerup
        subtract: settings.subtract
        minHeight: settings.minHeight
        maxHeight: settings.maxHeight
      return
    # exec on resize function once in every seconds
    $(window).on 'resize', throttle(((event) ->
      _this.Fillerup
        subtract: settings.subtract
        minHeight: settings.minHeight
        maxHeight: settings.maxHeight
      return
    ), 1000)
    return

  return
) jQuery
