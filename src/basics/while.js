const prompts = require('prompts');
const prompt = require('prompt');

let i = 0;
while(++i < 5) console.log( i );
// ++i first increments i and then return the new value (1<5) alert shows 1

// 
let x = 0;
while(x++ < 5) console.log( x );
//i++ increment i and return the old value but alert call is separate, it's another statement i = 4 / alert 5

(function () {
    let i = 3;
    while (i) {
        console.log(`number ${i}`);
        i--;
    }
})();

// Repeat until the input is correct
let userNumber;
( async () => {
    userNumber = await prompts({
        type: 'number',
        name: 'value',
        message: 'Please enter a number superior to 100',
        validate: userNumber =>  (!userNumber || userNumber === '' || !(userNumber > 100) ) ? 'incorrect value': true
    });
    console.log(userNumber.value);
})();
