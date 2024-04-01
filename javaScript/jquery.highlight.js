// Readys function for IDs named vecta_menu
$(document).ready(function() {
  $("#vecta_menu").highlightMenu();
});
  
// Function
(function($){
  $.fn.highlightMenu = function(options) {
    // Defaults
    var defaults = $.extend({
        'bgColor' : '#679bdf',
        'color' : '#ffffff',
        'hoverBgColor' : '#2e79da',
        'hoverColor' : '#000000',
        'linkWidth' : '125px',
    }, options);

    // Colors/Styles on mouseover
    return this.each(function() {
        var items = $("#vecta_menu li");
        var o = defaults;
        items.css('font-family', 'arial, helvetica, sans-serif')
        .css('font-weight', 'bold')
        .css('text-decoration', 'none')
        .css('background-color', o.bgColor)
        .css('color', o.color)
        .css('width', o.linkWidth);
      
        // Changes when mouse enters
        items.mouseover(function() {
          $(this).css('background-color', o.hoverBgColor)
          .css('color', o.hoverColor)
          .css('transition', "background .3s linear");
        });

        // Returns to default when mouse leaves
        items.mouseout(function() {
        $(this).css('background-color', o.bgColor)
        .css('color', o.color);
      });
    });
  }
})(jQuery);
  