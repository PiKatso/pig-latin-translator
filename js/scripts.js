// // Business Logic //
var vowels =["a","A","e","E","i" ,"I","o","O","u","U"];
var regex = /^[a-zA-Z ]+$/gi;
var regexQu = /(qu)/ig;

// UI //
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var inputArr = ($("input#uxInput").val()).split(" ");
    var inputStr = ($("input#uxInput").val());
    console.log(regex);

    var match = (inputStr.match(regex));
    var matchQu = (inputStr.match(regexQu));

    console.log(matchQu);
    // var ay = [];

    for(var i=0; i<inputArr.length; i++){
      inputArr[i][0] = inputArr[i][0].charAt(0);
      vowels.indexOf(inputArr[i].charAt(0));
      // console.log(inputArr[i].charAt(0));
      // console.log(vowels.indexOf(inputArr[i].charAt(0)));

      if (vowels.indexOf(inputArr[i].charAt(0)) === -1){
       $(".output").text("move first letter to the end of element and add 'ay'!");
      if (vowels.indexOf(inputArr[i].charAt(0)) >= 0){
        $(".output").text("add 'ay' to the end of the element!");
      // } if (inputStr.match(regexQu)) === -1){
      //   $(".output").text("move 'sq' and all proceeding letters to the end of element and add 'ay'!");
       }  else if (match === null) {
         $("p#false").show();
      console.log(inputStr.match(regex));
      }
    }
    }
  });
});
