/*
FOR OF LOOPS
*/

//of requires that your 'thing' you're looping through be iterable--that means it
//needs to be numbered

let student= {name: 'Peter', awesome: true, degree: 'javascript', week: 1};

for (item in student){
    console.log(item);
    console.log(student[item]);
}

