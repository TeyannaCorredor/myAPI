//***** Relational Operators *****

//Greater Than: >
//Less Than: <
//Less Than or Equal <=
//Great Than or Equal >=

//******Logical Operators***** 

//AND: &&
//OR: ||

//******Logical Operators**** *
//Equal: ==
//Not Equal: !=

//*** Strict ****
//Equal;===
//Not Equal: !==

let age = 15;

if (age>=21){
console.log("Yes can purchase");
} else {
    console.log("Can not purchase");
}

//Where Challenge begins

let myName = "Teyanna";
let friendName =" Danielle";

console.log(myName);
console.log(friendName);

const str = "Teyanna";
console.log(`${str} ${str.length}`); 

const str2 = "Danielle";
console.log(`${str2} ${str2.length}`);

//or console.log (myName.lenghth and friendName.length) (will get number 
//but strings (names will not be next to it))


if (friendName > myName){
    console.log("My name is longer than hers.");
} else {
    const differenceInLetters = str2.length - str.length;

    console.log("Her name is longer than mine.");

    sentence = `${friendName}'s name is longer than ${myName} by ${differenceInLetters} letters`;
    console.log (sentence);
}


