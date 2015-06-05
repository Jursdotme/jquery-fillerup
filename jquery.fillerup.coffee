(($) ->

  # Define constructor
  $.fn.Fillerup = options ->
    # Define option defaults
    settings = $.extend({
      subtract: 0
      minHeight: 0
      maxHeight: 0
    }, options)

    selectedElement = $(this)

    subtractableHeight = settings.subtract
    minHeight = settings.minHeight
    maxHeight = settings.maxHeight
    calculatedHeight = $(window).height() - subtractableHeight

    if calculatedHeight < minHeight
      calculatedHeight = minHeight

    if calculatedHeight > maxHeight && maxHeight != 0
      calculatedHeight = maxHeight

    else
      $(window).height() - subtractableHeight


    selectedElement
      .css('height', calculatedHeight + 'px')
      .css('min-height', 'minimumHeight'+'px')


    # update heights on load and resize events
    $( window ).load ->
      selectedElement.Fillerup ->
        subtract: settings.subtract,
        minHeight: settings.minHeight,
        maxHeight: settings.maxHeight
      return


    # throttled update heights on resize events
    id = undefined

    doneResizing = ->
      _this.Fillerup
        subtract: settings.subtract
        minHeight: settings.minHeight
        maxHeight: settings.maxHeight
      return

    $(window).resize ->
      clearTimeout id
      id = setTimeout(doneResizing, 500)
      return
  return


) jQuery
