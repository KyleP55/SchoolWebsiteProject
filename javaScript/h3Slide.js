$(document).ready(function() {

  $("article p").slideUp(1);
  $("article p").slideDown(1000);


  $("a").click(function() {
    $(this).toggleClass("minus");


    if($(this).attr("class") != "minus") {
      $(this).prev().slideDown(500);
      $(this).children().attr("class", "arrow up");
    } else {
      $(this).prev().slideUp(500);
      $(this).children().attr("class", "arrow down");
    }
  });

});