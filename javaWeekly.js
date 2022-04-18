//VERY EASY//
const number1 = 7;
const number2 = 4;

console.log(number1/number2);

//EASY//

let Name1 = 'James';
let Name2 = 'Jane';

if(Name1.length>Name2.length){

console.log('The name '+ Name1 +  ' is longer than ' + Name2 + ' by ' + Name1.length)

}
else if(Name2.length>Name1.length){

    console.log('The name '+ Name2 +  ' is longer than ' + Name1 + ' by ' + Name2.length);
}
else{

    console.log("The names are equal");
}

//MEDIUM//

let userInput = prompt("Please enter a statement/word at your desired speaking level");
userInput = toUpperCase();

if(userInput==true){
console.log("You are shouting");
}
else if(userInput==false){
console.log("You are whispering");
}
else {
 console.log("Thank you for speaking normally")

}



//HARD//

function add(number1 += number2);
function substract(number1 -= number2);
function multiply(number1 *= number2);
function divide(number1 /= number2);




//VERYHARD//
number1 = prompt("Enter a number");
let inputOperator = prompt("Please enter an operator ( + , - , * , / )");
number2 = prompt("Enter another number");

if(number1 >= 0){
    console.log(inputNum1 + inputOperator + ": ");
}
else if(number2>= 0 )
if(inputOperator== +){
console.log(number1 + inputOperator + number2 + "=" + add();

}
else if(inputOperator== -){

console.log(number1 + inputOperator + number2 + "=" + substract());
}
else if(inputOperator== *){

console.log(number1 + inputOperator + number2 + "=" + multiply());
}
else if(inputOperator== -){

console.log(number1 + inputOperator + number2 + "=" + divide());
}
else {
    console.log("Error: Invaild input. Try Again")
}