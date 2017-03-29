// // Business Logic //
var vowels =["a","A","e","E","i" ,"I","o","O","u","U"];
var regex = /^[a-zA-Z ]+$/gi;
// vowels.indexOf("a");

// Ux //
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var inputArr = ($("input#uxInput").val()).split(" ");
    var inputStr = ($("input#uxInput").val());
    console.log(regex);

    var match = (inputStr.match(regex));
    console.log(match);
    // var ay = [];

    for(var i=0; i<inputArr.length; i++){
      inputArr[i][0] = inputArr[i][0].charAt(0);
      vowels.indexOf(inputArr[i].charAt(0));
      // console.log(inputArr[i].charAt(0));
      // console.log(vowels.indexOf(inputArr[i].charAt(0)));
       if (match === null) {
         $("p#false").show();
         alert("Please use words with only alphabetical letters.");
      console.log(inputStr.match(regex));
      }
    }
  });
});
