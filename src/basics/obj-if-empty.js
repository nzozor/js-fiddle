function isObjectEmpty(object) {
    for(const key in object) {
        if (key) return false; 
    }

    return true;
}

let person = { name: 'John', age:35 };

isObjectEmpty(person) ? console.log(`object is empty`) : console.log('Object is not empty');

person = { };

isObjectEmpty(person) ? console.log(`object is empty`) : console.log('Object is not empty');