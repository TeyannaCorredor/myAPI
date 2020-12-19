/*
LOOPS

3-loops
  01-forLoops.js
*/

/*
Loops offer a quick and way to do something repeatedly

There are many different kinds of loops but they all do roughtly the same things:
For statement
do while
labled
break
continue
for in
for of
.forEach
.map
*/

//loop structure: a) creation of an indexing variable b) a run condition c) change to indexing variable

//count to 10 from 0 and log the numbers:

for (let i = 0; i<=10; i++){
    console.log(i);
}

// loops can run infintely
//for (i=0; ; i++){
//   console.log(i);
//

//counts to -25 by -3, starting from 2, logs the numbers
for (let i = 2; i >=-25; i =i -3){
  console.log(i);
}

//display the lettes and anmes individually
let name ='kinkade';

for (let i = 0; i < name.length; i++){
  console.log(name[i]);
}

//for loops can use lots of variables:
let start = 2;
let stop = Math.floor(Math.random()*30);
let increment = 3;

for (let i = start; i <= stop; i = i + increment){
    console.log(i);
}
