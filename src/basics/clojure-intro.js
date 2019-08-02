// What is a closure? b. What are their disadvantages?
// How does the inheritance system in JavaScript work?
// What is `this`? b. How can you change its value?

// - A closure is a function that remembers and and can access its outer variables (from the outer function). The main advantage is data encapsulation.

// - In js inheritance uses prototypal inheritance. By cloning the prototype, we transfer all members and functions to the new class.

// - 'This' refers to the object where a function of methods is called. The value gets change depending of where a method or function is called. The use of arrow function can change the value of this as they don't bind to their own this.
 //////////////////
 // disadvantages:
 //////////////////
 // 1: Till the time its active, the memory can’t be garbage collected.
// 2: It slows down the performance, because function within other function creates duplicate in memory.

let f = () => {
    let i = 1;
    return () => {
        console.log(i);
        return 1;
    }
}

console.log(f()());

let g = () => {
    let i = 1;
    return ( () => {
        console.log(i);
        }
    )();
}

console.log(g());