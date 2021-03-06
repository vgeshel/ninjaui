$.fn.ninjaNavigationCreate = function(customOptions) {
  var options = $.extend({
    colors:$.ninjaColorsGet(),
    radius:$.ninjaRadius
  }, customOptions);
  return this.each(function(i, navigation){
    $(navigation).addClass('ninjaPlastic ninjaNavigation').css(options.colors.foreground).ninjaRadius({radius:options.radius});
  });
};
