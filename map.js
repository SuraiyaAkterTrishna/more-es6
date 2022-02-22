/* 
const output = [];

function doubleIt(num){
    return num*2;
}
for (const number of numbers) {
    const result = doubleIt(number);
    output.push(result);
}
console.log(output); */
const numbers = [4, 8, 12, 16];
const doubleValue = numbers.map(number => number * 2);
console.log(doubleValue);

const myFish = ['angel', 'oscar fish', 'guppy', 'gourami'];
const length = myFish.map(fish => fish.length*5);
console.log(length);
/* const numbers = [4, 6, 8, 10];
const output2 = [];

// function doubleOld(number) {
//     return number * 2;
// }

const doubleIt = number => number * 2;

for (const number of numbers) {
    const result = doubleIt(number);
    output2.push(result);
}
// console.log(output2);

// 1. loop through each element
// 2. for each element call the provided function
// 3. result for each element will be stored in an array

// const output = numbers.map(doubleIt);
// const output = numbers.map(number => number * 2);
const output = numbers.map(x => x * 2);
// console.log(output);

const squares = numbers.map(x => x * x);
console.log(squares); */