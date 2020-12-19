/*


1-grammarAndTypes
    04-hoisting.js
*/

//Hoisting refers to var-declared variables and functions being read at the top of the file before any other code is run.

    //example 1: 
    console.log(scissors);
    var scissors = 'blue';

    //example 1 breakdown:
    var scissors;
    console.log(scissors);
    scissors = 'blue';

    //example 2:
    function hoistTest(){
        console.log(testVar);
        var testVar =10;
        console.log (testVar);
    }

    hoistTest();

    //Example 2 breakdown:

    function hoistTest(){
        var testVar;
        console.log(testVar);
        testVar = 10;
        console.log(testVar);
    }
    hoistTest();