// https://www.toptal.com/javascript/interview-questions


// What is a potential pitfall with using typeof bar === "object" to determine if bar is an object? How can this pitfall be avoided?
var bar = null;

console.log((bar !== null) && (typeof bar === "object"));  // logs false

console.log( '----------------------------------------------');

// What will the code below output to the console and why?
(function() {
  var a = b = 3;
  console.log('internal a is : ' + a);
})();

console.log("a defined? " + (typeof a !== 'undefined'));
console.log("b defined? " + (typeof b !== 'undefined'));

//b is defined as global so will be defined in strict mode

console.log( '----------------------------------------------');
console.log('Top 10 interfiew question');
console.log( '----------------------------------------------');

// prototypal inheritance

let Car = function(model) { this.model = model };

Car.prototype.getModel = function() {
    return this.model;
}

let toyota = new Car('toyota');
console.log(toyota.getModel());

// Why do we use promise 
// what for something to happen, and the do something
// avoid nested callback function hell

// setimeout 
setTimeout(function() {
    console.log('a');
}, 0); // it becomes asynchronus and executed after the action of the synchronous the stack is finished

for(let x=0; x < 10; x++) {
    console.log(x);
}