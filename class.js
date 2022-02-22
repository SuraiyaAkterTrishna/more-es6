
class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor (name, address){
        this.name = name;
        this.address = address;
    }
}
const amir = new Support('Amir Khan', 'Dubai');
console.log(amir);
const srk = new Support('Shah Rukh Khan',);
console.log(srk);

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);