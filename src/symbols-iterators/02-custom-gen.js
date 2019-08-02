// An iterator is an interface to stepping through a piece of Data

let arr = [1, 2, 3];

let it = arr[Symbol.iterator]();

console.log(it.next().value);
console.log('--------------');

let myString = 'Nicolas';


console.log([...myString]);