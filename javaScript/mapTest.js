$(document).ready(function(){
  // Global Vars
  var geocoder = new google.maps.Geocoder();
  var infoWindow = new google.maps.InfoWindow();
  var markers = [];
  var testMarker = [];
  var directionsService = new google.maps.DirectionsService();

  // Create Map
  var mapOptions = {
    zoom: 13,
    center: new google.maps.LatLng(42.999443,  -82.308891),
    mapTypeId: google.maps.MapTypeId.READMAP
  };

  var map = new google.maps.Map( $("#map").get(0), mapOptions);

  //Floating Marker 
  geocoder.geocode({address: "1399 Exmouth St, Sarnia, ON N7T2N8"},
  function(results){
    newMarker = new google.maps.Marker({
      position: results[0].geometry.location,
      map: map
    });
  });


  // Search Function
  $("#searchBtn").click(function(){
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: $("#searchInput").val()},
      function(results) {
        var geoLat = results[0].geometry.location.lat();
        var geoLgn = results[0].geometry.location.lng();

        map.setCenter(new google.maps.LatLng(geoLat, geoLgn));
        map.setZoom(13);
      });
  });

  // Link Markers
  $("#links a").each(function(){

    geocoder.geocode({address: $(this).text()},
      function(results) {
        var geoLat = results[0].geometry.location.lat();
        var geoLgn = results[0].geometry.location.lng();

        markers = new google.maps.Marker({
          position: results[0].geometry.location,
          map: map
        });

        google.maps.event.addListener(markers, "click", function(e) {
          //fill with click stuff
        })
      });
  });


  // Link Click
  $("#links a").click(function(){
    var address = $(this).text().trim();

    geocoder.geocode({address: address},
      function(results) {
        // goto Location and Zoom
        var geoLat = results[0].geometry.location.lat();
        var geoLgn = results[0].geometry.location.lng();

        map.setCenter(new google.maps.LatLng(geoLat, geoLgn));
        map.setZoom(13);

        newMarker.setPosition(new google.maps.LatLng(geoLat, geoLgn));
        // InfoWindow
        infoWindow.close();
        infoWindow = new google.maps.InfoWindow({
          content: "<b>" + address + "</b>:<br />" +
                   "Hours: 8AM - 10PM<br />" +
                   "Mon - Sat<br />" +
                   "<a href=http://maps.google.com/maps?daddr=" + 
                   address.replaceAll(' ', '+') + ">Get Directions</a>"
        });

        infoWindow.open(map, newMarker);
      });
  });


  // Enter Trigger
  var searchTextBox = document.getElementById("searchInput");
  
  searchTextBox.addEventListener("keyup", function(event) {
   if (event.keyCode === 13) {
     event.preventDefault();
     document.getElementById("searchBtn").click();
   }
 });
  
});