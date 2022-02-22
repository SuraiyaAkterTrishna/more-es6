// destructuring array 
const [ammu, abbu, bor] = ['ammu', 'abbu', 'bor'];
console.log(ammu, abbu, bor);
// destructuring object 
const {mother, father, brother} = {mother: 'Nasima', father: 'Satter', brother: 'Sagor'};
console.log(mother, father, brother);


// declare variable based on the name of an object property
const myObject = { x: 11, y: 45, z: 565, a: 155, b: 98};
const { x, z, b } = myObject;
console.log(b);

/* const myObject = { x: 2, y: 50, z: 600, a: 25, b: 68 };
const { x, b } = myObject;
onsole.log('myObject.p', myObject?.p?.q); */

// destructuring array 
const [ s , r, a, m ] = ['suraiya', 'rony', 'ayesha', 'muhammad'];
console.log(m);
const [t, l] = [11, 14, 53, 62];
console.log(t, l);
const [p, q] = [45, 37, 91, 86];
// console.log(p, q);

const [best, faltu] = ['momotaj', 'poroshi'];
// console.log(best, faltu);
// const { sky, color, money } = { sky: 'blue', soil: 'matti', color: 'red', money: 500 };

//chaining
const fish = { name: 'King Oscar', id: 153, color: 'black', phone: '01902357210', address: 'Barisal'};
const { name, id, color, phone, address } = fish;
console.log(name, id, color, phone, address);
const company = {
    name: 'GP',
    ceo : {
        id: 1,
        name: 'Rony',
        food: 'Beriany'
    },
    web: {
        work: 'website development', 
        employee: 100,
        framework: 'react', 
        tech: {
            first: "html",
            second: "css",
            third: "javascript"
        }
    }
}
console.log(company?.web?.node?.first);
/* const company = {
    name: 'GP',
    ceo: { id: 1, name: 'ajmol', food: 'fuchka' },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    },
}; */

// console.log(company?.web?.tech?.third);
// console.log(company?.backend?.tech.third);