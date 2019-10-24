$(document).ready(function() {
  var age = parseInt(prompt("How old are you?"));

  if (age >=18) {
    alert("Let's Vote");
    $('#adults').show();
  } else {
    $('#minors').show();
  }
});
