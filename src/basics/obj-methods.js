let user = {
    name: 'John',
    age: 30
};


user.sayHi = function() { // function expression, no hoisting on function expression
    console.log('Hello'); 
}

user.sayHi();

// --------

// this
// In Javascript, this keyword behave unlike most other programming languages. First, it can be used in any function
// arrow function have no this
let customer = {
    firstName: 'Ilya', 
    sayHi() {
        let that = this;
        let arrow = function() { console.log(this.firstName);} // not work
        arrow();
    }
};

let customer2 = {
    firstName: 'Ilya', 
    sayHi() {
        let that = this;
        let arrow = () => console.log(this.firstName); // works
        arrow();
    }
};
customer.sayHi();
customer2.sayHi();

/* the value of this is defined at run-time
- When a function declared, it may use thism byt that this has no value until the function/object is called.
- that function can be copied between objects.
- When a function is called in the methods object.method(). the value of this during the call is object

Arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.

-------------------

To make user.hi() calls work, JavaScript uses a trick – the dot '.' returns not a function, but a value of the special Reference Type.
A special reference type is:
- base / the object
- name / the property
- strict / true or false

(user, hi, true)

let user = {
  name: "John",
  hi() { alert(this.name); }
}
*/

let rapper = {
    name: "Billou",
    hi() { (() => console.log(this.name))() }
  }

rapper.hi();
console.log('Mbilou');