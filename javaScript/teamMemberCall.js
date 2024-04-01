$(document).ready( function(){
  $.getJSON("JavaScript/teamMembers.json", function(data) {
    $.each(data, function() {
      $.each(this, function(key, value) {
        $("#team").append(
          "<div class=\"teamMember\">" +
          "<img src=\"" + value.image + "\" alt=\"Employee Headshot\" class=\"headshot\"><br>" +
          "<p class=\"left\"><b>Name:</b> " + value.name + "<br>" +
          "<b>Title:</b> " + value.title + "<br>" +
          "<b>Bio:</b> " + value.bio + "<br>" +
          "</p></div><br>" 
        );
      });
    });
  });
});