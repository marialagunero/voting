$(document).ready(function() {
  $("#formA").submit(function(event) {
    var name = $("input#name").val();
    $(".name").text(name);

    var description = $("input#description").val();
    $(".description").text(description);

    var date = $("input#date").val();
    $(".date").text(date);

    var starttime = $("input#starttime").val();
    $(".starttime").text(starttime);











    $(".Success").show();

    event.preventDefault();
  });
});
