// const student1 = {
//     name: "Ankur",
//     age: 22
// }

// const student2 = {
//     name: "yash",
//     age: 19
// }
// Object.prototype.sayHello = function(){
//     console.log(`Hii ${student2.name}`);
// }
// console.log(student1);
// student2.sayHello()

// prototyple intheretence
const user1 = {
    name: "Ankur"
}
const user2 = {
    email: "something@gmail.com"
}
const user3 = {
    isLoggedin: true,
    // __proto__: user1 // access all property from user1 || this is a old way
}

// or 
// user3.__proto__ = user1

// new way 
Object.getPrototypeOf(user4, user1)