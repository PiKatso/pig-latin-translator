// // Business Logic //
var vowels =["a","A","e","E","i" ,"I","o","O","u","U"];

// vowels.indexOf("a");

// Ux //
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();

    var input = ($("input#uxInput").val()).split(" ");
    console.log(input);
    var ay = [];

    for(var i=0; i<input.length; i++){
      input[i][0] = input[i][0].charAt(0);
      console.log(input[i].charAt(0));
       console.log(vowels.indexOf(input[i].charAt(0)));
    }


    //   function vowelRegEx(char)
    //   {
    //     if (char.length == 1)
    //     {
    //       return /[aeiou]/.test(char);
    //     }
    //   }
    // }

      // var char0 = (input[i].charAt(0));
    //   console.log(input[i]);
    // } return ;


  });
});
