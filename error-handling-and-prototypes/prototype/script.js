let myHeros = ["thor", "spiderman"]
let dcHeros = ["batman", "flash", "superman"]

let heropower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`spody power is ${this.spiderman}`);
    }
}

Object.prototype.hitesh = function() {
    console.log("Hitesh is present in all objects");
}
// console.log(myHeros.hitesh());
// console.log(heropower.hitesh());


Array.prototype.heyHitesh = function() {
    console.log("Hitesh says hi");
}
// console.log(myHeros.heyHitesh());
// console.log(heropower.heyHitesh());



// inheritance

const User = {
    name: "top name",
    email: "top@gmail.com"
}
const Teacher = {
    makeVideos: true
}
const TeachingSupport = {
    isAvailable: false
}
const TAAssistant = {
    makeAssignment: "Js Assignment",
    fulltime: true,
    __proto__: TeachingSupport
}
// console.log(TAAssistant.isAvailable); //false
// console.log(TAAssistant);

Object.setPrototypeOf(TeachingSupport, Teacher)
// console.log(TAAssistant.isAvailable); //false

String.prototype.truelength = function() {
    console.log(`True length is ${this.trim().length}`);
}
"hitesh            ".truelength()
"anurag       ".truelength()