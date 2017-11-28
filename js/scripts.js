$(document).ready(function(){
  $("#cat").click(function(){
    $("#meow").remove();
    $("#woof").remove();
    $(".replies").prepend("<p id='meow'>Meow</p>");
    $(".replies").append("<p id='woof'>Woof</p>");
  });

  $("#dog").click(function(){
    $("#meow").remove();
    $("#woof").remove();
    $(".replies").prepend("<p id='woof'>Woof</p>");
    $(".replies").append("<p id='meow'>Meow</p>");
  });

});
