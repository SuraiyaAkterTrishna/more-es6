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
const {name, food} = company.ceo;
const {employee, work} = company.web;
const {first, second, third} = company.web.tech;
console.log(food, employee, third);

const aqua = {
    name: 'Ornamental fish',
    color: 'Golden red',
    food: 'Shrimp',
    price: {
        guppy: 500,
        angel: 700,
        oscar: 500,
        butter: 300
    },
    behaviour: {
        isAggregasive: 'Oscar',
        isSensitive: 'Angel',
        small: {
            verySmall: 'Guppy is very small',
            white: 'Moly is white fish'
        }
    }
}
const { color, food, name} = aqua;
const { guppy, angel, oscar, butter } = aqua. price;
const {isAggregasive, isSensitive} = aqua.behaviour;
const { verySmall, white } = aqua. behaviour. small;

console.log( name, isSensitive, white );
const company = {
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
};

// const work = company.web.work;
// const framework = company.web.framework;
const { work, framework } = company.web;
const { food } = company.ceo;
const { second, third } = company.web.tech;
// console.log(work, framework, food);