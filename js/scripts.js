// // Business Logic //
// var vowels =["a","A","e","E","i" ,"I","o","O","u","U"];
//


// Ux //
$(document).ready(function() {
  $("form#input").submit(function(event) {
    event.preventDefault();
    
    var input = ($("input#uxInput").val()).split(" ");
    console.log($("input#uxInput").val());
    console.log(input);
  });
});
