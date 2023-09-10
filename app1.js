// Chapter 9-11

// var city = prompt("Enter your city");
// if(city === "karachi"){
//     alert("Welcom to city of light");
// }
// var gender = prompt("Enter your Gender");
// if(gender === "Male"){
//     alert("Good Morning Sir.");
// }
// if(gender === "Female"){
//     alert("Good Morning Madam.")
// }
// var color = prompt("Enter the color of traffic singnal");
// if(color === "red"){
//     alert("Must Stop");
// }
// if(color === "yellow"){
//     alert("Ready to move");
// }
// if(Color === "green"){
//     alert("Move now");
// }
// var fuel = prompt("How much  fuel in your car");
// if(fuel <="0.25"){
//     alert("Please refill the fuel in your car");
// }
// var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// // Ture
// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// // False
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// // False
// if (c === 13){
// alert("condition 2 is true");
// }
// // True
// if (++c < 14){
// alert("condition 3 is true");
// }
// // False
// if(c === 14){
// alert("condition 4 is true");
// }
// // True
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// True
// if (true){
//     alert("True");
//     }
//     if (false){
//     alert("False");
//     }
// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

//     var maths = +prompt("Enter Maths Mark");
//     var physics = +prompt("Enter Physics Mark");
//     var pst = +prompt("Enter PST Mark");
//     document.write("TOAL MARK = 300 <br>");
//     document.write("MARK Obtained =");
//     document.write(maths + physics + pst +"<br>");
//     document.write("Percentage =72%" + "<br>");
//     document.write("Grade: A" + "<br>");
//     document.write("Remarks = Good" + "<br>");

var a = parseInt (prompt("Ente the fistNumber"));
var b = parseInt (prompt("Enter the secondNumber"));
var operator = prompt("Enter the operation");
var operation = "+";
if(operator =="+"){
    document.write(a+b);
}
else if(operator =="-"){
    document.write(a-b);
}
else if(operator == "*"){
    document.write(a*b);
}
else if(operator == "/"){
    document.write(a/b);
}
else if(operator == "%"){
    document.write(a%b);
}
else {
    document.write("Invalid");
}
// var temperature = +prompt("Ente the tempearture in degree to celsis");
// if(temperature >=40){
//     console.log("it is too hot outside");
// }
// else if(temperature >=30){
//     console.log("The Wheater today is noraml");
// }
// else if(temperature >=20){
//     console.log("Today Wheather is cool");
// }
// else if(temperature >=10){
//     console.log("OMG ! Today Wheaterh is so cool");
// }

// var n = Number +prompt("Enter the Number");
// if(n % 3 == 0){
//     document.write("Number is divisble by 3");
// }
// else{
//     document.write("Number is not divsible by 3");
// }

// var number = +prompt("Enter the Number");
// if(number %2 ==0){
//     console.log("the Number is even");
// }
// else{
//     console.log("the number is odd");
// }

// const secretNumber = Math.floor(Math.random() * 10) + 1;

// const userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// if (userGuess === secretNumber) {
//   console.log("Bingo! Correct answer");
// } else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
//   console.log("Close enough to the correct answer");
// } 
// else {
//     console.log("Sorry, incorrect guess." + secretNumber);
//   }


//   var number = +prompt("Enter the Number");
//   if(number %3 ==0){
//     document.write("This is the devision of 3");
//   }
// else{
//     document.write("This is not divisble by 3");
// }
