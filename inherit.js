class SupportTeam{
    name;
    address = "Dhaka";
    constructor(name, address){
        this.name = name;
        this.address =  address;
    }
}
class Support extends SupportTeam{
    groupSupportTime;
    designation = "Web Developer";
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
}
const sagor = new Support('sagor', 'jashore', 7);
console.log(sagor);























// class TeamMember {
//     name;
//     address = 'BD';
//     constructor(name, address) {
//         this.name = name;
//         this.address = address;
//     }
// }
// class Support extends TeamMember{
//     groupSupportTime;
//     designation = 'Super Web Develop';
//     constructor(name, address, time){
//         super(name, address)
//         this.groupSupportTime = time;
//     }
// }
// const alia = new Support('alia', 'mumbai', 4);
// console.log(alia);
















// class Support extends TeamMember {
//     groupSupportTime;
//     designation = 'Support Web Dev';
//     constructor(name, address, time) {
//         super(name, address)
//         this.groupSupportTime = time;
//     }
//     support(){
//         console.log(this.name,'Start a support Session');
//     }
// }
// const aamir = new Support('Aamir Khan', 'BD', 11);
// const salman = new Support('Solaiman Khan', 'Dubai', 4);
// aamir.support();
// console.log(aamir.name);