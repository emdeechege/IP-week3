// alert("tom");
$(document).ready(function() {
  $("form#ping").submit(function(event) {
      event.preventDefault();
      var userInput = parseInt($("input#pingNum").val());

      for (var i = 1; i <= userInput; i++) {
        var result = "";
      if (i % 3 != 0 && i % 5 != 0) result = (i)
      if (i % 3 === 0) result = "ping"
      if (i % 5 === 0) result += "pong"
      $("#display").append(result + "<br>")
    }
  });
});
