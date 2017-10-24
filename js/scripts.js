$(document).ready(function(){
 $('#some-form').submit(function(event){
   event.preventDefault();
    var userInput = $('#some-input').val();
    var userArray = userInput.split("");
    for (var index = 0; index < userArray.length; index += 1) {
      if(userArray[index] === "a" || userArray[index] === "e" || userArray[index] === "i" || userArray[index] === "o" || userArray[index] === "u"){
        userArray[index] = "-";
      }
    }
    userInput = userArray.join("");
    $("#noVowels").html("<p>" + userInput + "</p>");
    $("form").hide();
  });
});
