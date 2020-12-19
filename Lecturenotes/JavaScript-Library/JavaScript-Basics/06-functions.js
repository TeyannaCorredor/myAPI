function hello() {
    console.log("Hello World!");
}
hello();

function pacersWon(){
    console.log ("Pacers won!");
}

pacersWon();
pacersWon();
pacersWon();
pacersWon();
pacersWon();

//Parameters are the names listed in the parentheses of the function definition
//Arguments are the real values received by the function when you call it.

function addAnyTwoNumbers(x,y){
    console.log(x + y);
}

addAnyTwoNumbers(4, 5);
addAnyTwoNumbers(6, 11);
addAnyTwoNumbers(7, 8);

function subtractTwoNumbers(firstNum, secondNum){
    console.log(firstNum - secondNum);
}
subtractTwoNumbers(5,7);

function add(x, y){
    let sum = x + y;
    return sum; // or return x + y;
}
console.log(add(1,1));

function fullName(first, last){
    let wholeName = first + " " + last;
    return wholeName; // Or return first + " " + last;
}
console.log(fullName("Paul", "O'Connor"));

function calculatePriceIndiana(quantity, price){
    let totalPrice = 1.07 * quantity * price;
    return totalPrice; // Or return 1.07 * quantity * price;
}
console.log(calculatePriceIndiana(17, 5));