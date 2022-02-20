// 1. let and const
const fish = "Angel Fish";
let myFish = "Albino Angel";
myFish = "Oscar";
// console.log(fish);
// 2. default
function fishPrice(fish1, fish2 = 200){
    return fish1 + fish2;
} 
const allFishPrice = fishPrice(400, 500);
// 3. template string
const myFishCollection = `I have a special couple fish, that is ${myFish} and its price is ${fishPrice(500)}. I love them so much.`;
console.log(myFishCollection);
// 4. Arrow function 
/* function priceCalculate(fish1, fish2, fish3){
    return fish1 + fish2 + fish3;
}
const totalPrice = priceCalculate(500, 300, 400);
console.log(totalPrice); */
const priceCalculate = (fish1, fish2, fish3) => fish1 + fish2 + fish3;
const totalPrice = priceCalculate(500, 400, 300);
console.log(totalPrice);
// 5. spread or three dots (...)
const fishList = ['albino angel', 'copper oscar', 'gourami', 'guppy', 'moly'];
const secondFishList = [...fishList, 'butter', 'blue parrot'];
console.log(secondFishList);
