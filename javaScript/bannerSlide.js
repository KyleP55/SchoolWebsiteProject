$(document).ready(function() {
  var image, imageCounter = 0, imageCache = [];

  // Get Images
  $("#imageList img").each(function() {
    image = new Image();
    image.src = $(this).attr("src");
    image.title = $(this).attr("alt");
    imageCache[imageCounter] = image;
    imageCounter++;
  });

  // Slide Show
  var nextImage;

  setInterval(function(){
    $("#bannerPic").fadeOut(1000,
      function () {
        imageCounter = (imageCounter + 1) % imageCache.length;
        nextImage = imageCache[imageCounter];
        $("#bannerPic").attr("src", nextImage.src).fadeIn(1000);
      }
    );
  }, 5000);

  setInterval(function(){
    $("#bannerText").fadeOut(1000,
      function () {
        nextImage = imageCache[imageCounter];
        $("#bannerText").text(nextImage.title).fadeIn(1000);
      }
    );
  }, 5000);
});