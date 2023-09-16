// for(var a=1;a<=10;a++){
//     document.write("Welcome User",a,"<br>");
// }
// for (let i = 1; i <= 12; i++) {
//     console.log("Iteration " + i);
//   }

// //   for(var i=0;i<=4;i++){

// //   }

// for (var count = 1; count < 100; count++) {
//     console.log("Iteration " + count);
//   }
  
//   for (var i = 3; i > 0; i--) {
//     console.log("Iteration " + i);
//   }
  
//   var myArray = [1, 2, 3, 4, 5];
// var numberOfElements = myArray.length;

// console.log(numberOfElements); 

var flag = false;

// var pets = ["cat", "dog", "rabbit", "hamster"];

// for (var i = 0; i < pets.length; i++) {
  
//   console.log("Iteration " + i + ": " + pets[i]);
// }

// for (var i = 0; i < 10; i++) {
//     if (i === 1) {
//       alert("Counter is " + i);
//       break;
//     }
//   }
// var userNames = ["Hamza", "Asad", "Ibrahim", "Ammar", "Faiz"];

// var firstName = prompt("Enter first name");

// for (var i = 0; i < userNames.length; i++) {
//   if (firstName === userNames[i]) {
//     alert("Welcome, " + firstName);
//     break; 
//   } else if (i === userNames.length - 1) {
//     alert("Please write the correct user name.");
//   }
// }

// var firstArr = ["a", "b", "c", "d", "e", "f"];
// var secondArr = [1, 2, 3, 4, 5, 6];

// for (var i = 0; i < firstArr.length; i++) {
//   for (var j = 0; j < secondArr.length; j++) {
//     console.log(firstArr[i] + secondArr[j]);
//   }
// }

var matchFound = false;
var list = ["item1", "item2", "item3"];
var userInput = "userInput"; 

for (var i = 0; i < list.length; i++) {
  if (userInput === list[i]) {
    alert("Match found");
    matchFound = true;
    break;
  }
}

if (!matchFound) {
  alert("Match not found");
}



