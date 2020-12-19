/*
ARRAYS
*/

//what is an array?
//has [] brackets
//can hold multiple datatypes
//arrays can list datatypes in an ordered, numbered way

let students = ['Tony', 'Marshall', 'Rhys', 'Ray', 23, true, ['Ryan', 'Iesha']];
//hidden keys:     0        1         2       3     4    5       6
console.log(typeof students); //typeof doesn't tell me my variable is an array -> object
console.log(students instanceof Array); //instanceof tells me my array is an array
console.log(students[2]);
console.log(students[1]);
console.log(students[6]);

let name = students[6][1]; //the 1 here refers to where Iesha's name is in the baby array up above.Ryan would be 0 in the baby array
console.log(`Hello ${name}, you look nice today.`);

//recall for-of loop -> gives values of the array
let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

for (f of food) {
    console.log(f+'  is amazing!');
}

//array methods
//food.push('Pizza');
//console.log(food);
//food.splice(1, 1, 'Bananas');
//console.log(food);
//food.splice(2,0, 'Sweet Potato Pie'); //splice asks for an insertion point, how many things to remove, then the item/items to add
//console.log(food);

//food.pop();//removes the last element of an array
//console.log(food);

//food =  food.slice(2,4)
//console.log(food);

//forEach allows us to iterate with loops specifically, and we can directly grab both the elements and their index numbers

