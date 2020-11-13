let myString = "this is a string";
let myNumber = 10;
let myBoolean = true;
let myArray = [10,  "string"] // arrays are collection of data
let myObejct = {firstKey: "a string"}
let myUndefined = undefined;
let myNull = null; // if you want a value to be intentionally be empty

console.log(typeof myBoolean);

//Challenge Begins

let myObject = {
    myString: "Teyanna",
    myNumber: 31,
    myBoolean: true,
    object: {}
    
}

console.log(myObject.number)


let value = typeof myObject.myString;




if (value === "string") {

    console.log("The value is a string");

} else if (value === "number") {

    console.log("The value is a number");
    
} else if (value ==="boolean") {

    console.log("The value is a boolean");

} else if (value === "object") {

    console.log("The value is an object");

} else {

    console.log ("what are you?");


    