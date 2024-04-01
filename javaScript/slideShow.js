$(document).ready(function() {
  var image, imageCounter = 0, imageCache = [];

  // Get Images
  $("#slides img").each(function() {
    image = new Image();
    image.src = $(this).attr("src");
    image.title = $(this).attr("alt");
    imageCache[imageCounter] = image;
    imageCounter++;
  });

  // Slide Show
  imageCounter = 0;
  var nextImage;
  setInterval(function(){
    $("#slide1").fadeOut(1000,
      function () {
        imageCounter = (imageCounter + 1) % imageCache.length;
        nextImage = imageCache[imageCounter];
        $("#slide1").attr("src", nextImage.src).fadeIn(1000);
      }
    );
  }, 3000);

  imageCounter2 = 1;
  var nextImage2;
  setInterval(function(){
    $("#slide2").fadeOut(1000,
      function () {
        imageCounter2 = (imageCounter2 + 1) % imageCache.length;
        nextImage2 = imageCache[imageCounter2];
        $("#slide2").attr("src", nextImage2.src).fadeIn(1000);
      }
    );
  }, 3000);

  imageCounter3 = 2;
  var nextImage3;
  setInterval(function(){
    $("#slide3").fadeOut(1000,
      function () {
        imageCounter3 = (imageCounter3 + 1) % imageCache.length;
        nextImage3 = imageCache[imageCounter3];
        $("#slide3").attr("src", nextImage3.src).fadeIn(1000);
      }
    );
  }, 3000);
});