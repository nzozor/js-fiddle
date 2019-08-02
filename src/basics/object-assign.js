let user = {
    name: "John",
    sizes: {
        height: 182,
        width: 50
    }
};

let clone = Object.assign({}, user);
clone.sizes.height = 183;
clone.name = 'nico';
console.log(user);
console.log(clone); // child object are copied by reference

// To make a deep clone
let clone2 = JSON.parse(JSON.stringify(user));
user.sizes.height = 200;
console.log(user.sizes);
console.log(clone2.sizes);
