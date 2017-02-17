$(function() {

  $("#userInput").submit(function(){
    event.preventDefault();
    var side1= parseInt($("#side1").val());
    var side2= parseInt($("#side2").val());
    var side3= parseInt($("#side3").val());
    console.log(side1, side2, side3);
    triangleType(side1,side2,side3);
  });
});





function triangleType (side1, side2, side3) {
    //debugger;
    if (side1 === side2 && side2 === side3) {
        $("#type").text("Your triangle is equilateral")
        console.log("test")
      }
    if else ((side1 === side2 || side1 === side3 || side2 === side3) {  $("#type").text("Your triangle is isosceles")
        console.log("test")
      }

    if else (side1 != side2 && side1 != side3 && side2 != side3) {
      $("#type").text("Your triangle is isosceles")
        console.log("test")
      }
    }



  // //This is an equilateral triangle
  //
  // if else side1 === side2 || side1 === side3 || side2 === side3
  // var answer
