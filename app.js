//                   FUNCTION

// function hi(firstName,lastName,fullName){

// }
// var firstName  = prompt("Enter firstName");
// var lastName = prompt("Enter lastName");
// var fullName = firstName + lastName;
// document.write(fullName);
// hi(firstName,lastName,fullName);

// function hi(date){

// }
// var date = new Date();
// document.write(date);



// function hi(num1,num2){

// }
// var num1 = parseInt(prompt("Enter first Number"));
// var num2 = parseInt(prompt("Enter second Number"));
// console.log(num1 + num2);
// hi(num1,num2);




// function hi(a,b,operation){
//     if(operation == "+"){
//       return (a+b);
//     }
//     else if(operation == "-"){
//         return (a-b);

//     }

//     else if(operation == "*"){
//         return (a*b);

//     }

//     else if(operation == "/"){
//         return (a/b);

//     }
//     else if(operation == "%"){
//         return (a%b);

//     }

// }
// var a= parseInt(prompt("Enter the first Number"));
// var b = parseInt(prompt("Enter the seocnd Number"));
// var operation = prompt("Enter the operation"); 
// var res = hi(a,b,operation);
// document.write(res);



// function hi(x){
//     for(var a=1;a<=10;a++){
//         document.write(a,",");
//     }
// }
// var x=1;
// hi(x);


// function factorial(number) {
//     if (number < 0) {
//       return "Undefined";
//     } else if (number === 0 || number === 1) {
// //       return 1;
// //     } else {
// //       var result = 1;
// //       for (var i = 2; i <= number; i++) {
// //         result *= i;
// //       }
// //       return result;
// //     }
// //   }
  
// //   var num = 5;
// //   var result = factorial(num);
// //   console.log(result);
  

// // function squareNumber(number) {
// //     return number * number;
// //   }
  
// //   var num = 5;
// //   var squared = squareNumber(num);
// //   console.log(`The square of ${num} is ${squared}`);
  

// // var a = 5
// // var b = 4;
// // var mul  = a*a;
// // var mul2 = b*b;
// // var hypo  =  mul + mul2;
// // document.write("HYPOTENS IS"  , " ", hypo);

// function calculateRectangleArea(width, height) {
//     return width * height;
//   }
  
//   const widthValue = 5;
//   const heightValue = 10;
  
//   const area1 = calculateRectangleArea(widthValue, heightValue);
//   console.log(`Area (using values as arguments): ${area1}`);
  

//   function calculateRectangleArea(width, height) {
//     return width * height;
//   }
  
//   const widthVariable = 7;
//   const heightVariable = 12;
  
//   const area2 = calculateRectangleArea(widthVariable, heightVariable);
//   console.log(`Area (using variables as arguments): ${area2}`);
  

// function countOccurrences(str, letter) {
//     str = str.toLowerCase();
//     letter = letter.toLowerCase();
    
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] === letter) {
//         count++;
//       }
//     }
//     return count;
//   }
  
//   const inputString = 'JSResourceS.com';
//   const targetLetter = 'o';
  
//   const numberOfOccurrences = countOccurrences(inputString, targetLetter);
//   console.log(`Number of occurrences of '${targetLetter}' in '${inputString}': ${numberOfOccurrences}`);
  
  

  



// // function calcCircumference(radius) {
// //     var circumference = 2 * Math.PI * radius;
// //     console.log(`The circumference is ${circumference}`);
// // }

// // function calcArea(radius) {
// //     var area = Math.PI * Math.pow(radius, 2);
// //     console.log(`The area is ${area}`);
// // }


// var radius = 5;
// calcCircumference(radius);
// calcArea(radius); 

// var captailze = function(sentence){
//     var str = sentence.split(" ");
//     for(var i=0; i < str.length; i++){
//         str[i]=str[i][0].toUpperCase() + str[i].substring(1);
        
//     }
// return str.join(" ");
// }
// console.log(captailze("the quick brown fox"));



