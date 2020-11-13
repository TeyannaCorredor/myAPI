/*
VARIABLES

1-grammarAndTypes
    02-declarations.js
*/

//What is a varaible?
var a = 1;
var b = 2;
console.log(a + b);

//notes on naming variables
//1) a variable must begin with a letter, underscore, or dollar sign
//2) numbers may follow the above characters but cannot come first
//3) Javascript is case sensitive--'hello' and 'Hello' are different variables

/*
DECLARATIONS, INITIALZATIONS, ASSIGNMENT
*/

/*
Declarations refer to when we 'declare a variable

Initialazations refer to when a variable is assigned a value

Assignment refers to giving a variable a value. this can be after the intialization.
*/

var x;
console.log('declaration 1:', x); //undefined

x = 10;
console.log('initialization 1:', x);

x =33;
console.log('assignment 1:', x);

var y;
console.log(y);

y = 'hello';
console.log(y);

y = 'you are my friend'
console.log(y);

/*
Var, Let, and Const

Var = 'old' keyword for variables
Let = 'new' keyword for variables (introduced with ES6)
const = also 'new', decalres unchangeable variables
*/

let tonight = 'great!';
const elevenFifty = 'Amazing!';
console.log(tonight, elevenFifty);

tonight ='lovely';
console.log(tonight, elevenFifty);

//elevenFifty = 'Super';