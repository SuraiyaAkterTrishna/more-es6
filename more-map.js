// const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Brady', 'Tom Solaiman'];
/* const schoolFriends = ['Rojoni', 'Priya', 'Eva', 'Roshni'];
const schoolFriendsLength = schoolFriends.map(friend => friend.length);
console.log(schoolFriendsLength);

const fLengths = friends.map(friend => friend.length); */
// console.log(fLengths);


// map()
const products = [
    { name: 'mobile', price: 100, color: 'white'},
    { name: 'speaker', price: 500, color: 'black'},
    { name: 'mug', price: 200, color: 'green'}
];
const productsName = products.map(product => product.name);
console.log(productsName);

// forEach()
products.forEach(product => {
    console.log(product.price);
});


// products.forEach(product => console.log(product));

/* const products = [
    { name: 'water bottle', price: 50, color: 'yellow' },
    { name: 'mobile phone', price: 15000, color: 'black' },
    { name: 'smart watch', price: 3000, color: 'black' },
    { name: 'sticky note', price: 30, color: 'pink' },
    { name: 'water glass', price: 3, color: 'white' }
];

const productNames = products.map(product => product.name);
const productPrices = products.map(product => product.price); */
// products.map(product => console.log(product));
/* products.forEach(product => console.log(product)); */
// console.log(productPrices);