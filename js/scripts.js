$(document).ready(function(){
  $("#cat").click(function(){
    $("#meow").remove();
    $("#woof").remove();
    $(".replies").prepend("<p id='meow'>Meow</p>");
    $(".replies").append("<p id='woof'>Woof</p>");
    $("#dogword").toggle("hide");
    $("#dogpic").toggle("hide");
  });

  $("#dog").click(function(){
    $("#meow").remove();
    $("#woof").remove();
    $(".replies").prepend("<p id='woof'>Woof</p>");
    $(".replies").append("<p id='meow'>Meow</p>");
    $("#catword").toggle("hide");
    $("#catpic").toggle("hide");
  });

  

});
