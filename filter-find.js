// filter()
const numbers = [12, 65, 81, 25, 47, 191, 256, 2, 111, 205, 603];
const big = numbers.filter(number => number > 50);
// console.log(big);
const small = numbers.filter(number => number < 100);
// console.log(small);
// find()
const even = numbers.find(number => number%2 == 0); //first j element ta sorto puron korbe tar value dakhabe
console.log(even);
// filter()
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];
const price = products.filter(product => product.price < 1000);
console.log(price);
// find()
const color = products.find(product => product.color == 'black');
console.log(color);



/* const numbers = [5, 13, 7, 41, 30, 5, 2, 19];
const bigNumbers = numbers.filter(number => number > 20);
const smallNumbers = numbers.filter(number => number < 10);
// console.log(smallNumbers);
const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const expensive = products.filter(product => product.price > 100);
// console.log(expensive);
const blacks = products.filter(product => product.color == 'pink');
// console.log(blacks);

const whiteItem = products.find(product => product.color == 'black');
console.log(whiteItem); */