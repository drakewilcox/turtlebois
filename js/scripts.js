$(document).ready(function() {
  $("form#formOne").submit(function(event)  {
    event.preventDefault();

    var animal = $("input:radio[name=animal]:checked").val();
    if (animal === "turtle") {
    $(".yungTurtle").show(); 
    $(".dragonboi").hide();
  }
  if (animal === "dragon"){
    $(".dragonboi").show();
    $(".yungTurtle").hide()
    alert("wow!");
  }
  alert("wow!");
  })
});