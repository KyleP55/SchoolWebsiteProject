$(document).ready(function() {

  $("#fName").focus();

  jQuery.validator.setDefaults({
    debug: true,
    success: "valid"
  });
  $("#contact_form").validate({
    rules: {
      fName: {
        required: true,
        maxlength: 20
      },

      lName: {
        required: true,
        maxlength: 20
      },

      email: {
        required: true,
        email: true,
        maxlength: 150
      },

      phone: {
        required: true,
        phoneUS: true
      }
    }
  });

  $("#submit").click(function(){
    var isValid = $("#contact_form").valid();

    if (isValid){
      location.href='contact_sent.html'
    }
  });
}); // end ready
