function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return { father: man, mother: woman}
}

let family = marry({name: 'John'}, {name: 'Ann'});
console.log(family);

delete family.father;
console.log('------------------');

console.log(family);
console.log(family.mother.husband);

delete family.mother.husband;
console.log('------------------');
console.log(family);

// multiple ref of an object. All ref must be deleted in order to remove that object and for js to garbage collection to work.

