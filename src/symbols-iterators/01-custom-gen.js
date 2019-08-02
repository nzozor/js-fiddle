// An iterator is an interface to stepping through a piece of Data


var numbers = {
    *[Symbol.iterator]({ // concise generator
        start = 0, 
        step = 1, 
        end = 50} = {}) { 
            for(let i = start; i <= end; i = i + step) {
                yield i;
            }
    }
}

for (let num of numbers) {
    console.log(num);
}

for(let num of numbers[Symbol.iterator]({
    start: 6,
    step: 4,
    end: 30
})) {
    console.log(num);
}
let arrNum = [...numbers];
console.log(arrNum);