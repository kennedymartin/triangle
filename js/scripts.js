$(document).ready(function(){
  $("form#triangle").submit(function() {
    event.preventDefault();
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (side1 === side2 && side2 === side3 && side1 === side3) {
      $('#test').show();
    }
  });
});
