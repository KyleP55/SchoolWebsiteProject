$(document).ready(function() {
  var searchTerm;

  $("#btnSearch").click(function() {
    searchTerm = "";

    if ($("#search").val() == "") {
      alert("You must enter one or more tags.");
      $("#search").focus();
    } else {

      searchTerm = $("#search").val();

      var url = "http://api.flickr.com/services/feeds/photos_public.gne?" +
                "format=json&jsoncallback=?&tags=" + searchTerm + "&tagmode=all";

      $.getJSON(url, function(data){
        var html = "";

        $.each(data.items, function(i, item){
          html += "<div class=\"searchItems\"><h1 class=\"center\">" + item.title + "</h1>";
          html += "<img src=" + item.media.m + ">";
          html += "<p><b>Tags: </b>" + item.tags + "</p></div>";
        }); // each
        $("#photos").html(html);
      }); // getJSON
      $("#searchResults").removeClass("hidden");
    } // if
  }); // btn click

  // Enter Trigger
   var searchTextBox = document.getElementById("search");
  
   searchTextBox.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      document.getElementById("btnSearch").click();
    }
  });
});