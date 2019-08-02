console.log(1 || 'no matter what'); // 1. print first true value
result = 'maman' && 'test' && 'force et courage';
console.log(result); // 'force et courage' last value that is true

console.log((!0)); // true
console.log((!!0)); // fale

console.log(null || 2 || undefined); // shows 2
console.log(false || 0 || 'u'); // u
console.log(false || 0 || false); // false
console.log(false || 0 || !!0); // false
console.log(2 && 3); // 3

// const age = prompt('What is your age');
// // (age >= 14 && age <= 90) && alert('age inclusive') || alert('age note inclusive');
// ( (age >= 14 && age <= 90) ) && alert('age inclusive') || alert('age not inclusive');
// if (-1 || 0) console.log( 'first' );