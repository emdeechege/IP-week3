// alert("tom");
$(document).ready(function() {
  $("form#ping").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#pingNum").val();
    var result = checkOut(userInput);
  $("#display").text(result);
    // console.log(userInput);
    // $("p#display").text(userInput);
  })
})
var checkOut=function(userInput) {
for (var i = 1; i <= userInput; i++)
  if (userInput % 3 === 0 && userInput % 5 === 0) {
    return ("pingpong");
  } else if (userInput % 5 === 0) {
  return ("ping");
} else if (userInput % 3 === 0) {
  return ("pong");
} else {
  return(userInput);
}
}
