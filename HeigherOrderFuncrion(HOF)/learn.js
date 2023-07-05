// const powerTwo = (n) => {
//     return n ** 2;
// }
// function powerCube(powerTwo, n) {
//     return powerTwo(n) * n;
// }

// // console.log(powerCube(powerTwo, 2));

// function sayHello() {
//     return () => {
//         console.log("Hello Ankur");
//     }
// }
// let guessValue = sayHello();
// // console.log(guessValue);
// // guessValue();


// const heigherOrder = n => {
//     const oneFun = m => {
//         const twoFun = p => {
//             const threeFun = r => {
//                 return m + n + p + r
//             }
//             return threeFun
//         }
//         return twoFun
//     }
//     return oneFun
// }
// console.log(heigherOrder(1)(2)(3)(4))


// youtube


// const radius = [3, 1, 2, 4]

// // console.log(radius.length)
// const calculateArea = function (r) {
//     const output = [];
//     for(let i = 0; i < r.length; i++) {
//             output.push(Math.PI * r[i] * r[i])     
//         }
//         return output
//     }
// console.log(calculateArea(radius));

// const calculateCircumFerence = function (radius) {
//     const output = []
//     for(let i = 0; i < radius.length; i++) {
//         output.push(2 * Math.PI * radius[i])
//     }
//     return output
// }
// console.log(calculateCircumFerence(radius));

// DRY ...

const radius = [3, 1, 2, 4];

const area = function (radius) {
    return Math.PI * radius * radius;
}

const calculate = function(radius, logic) {
    const output = [];
    for(let i = 0; i < radius.length; i++) {
        output.push(logic(radius[i]));
    }
    return output;
}
const circumFerence = function(radius)  {
    return 2 * Math.PI * radius
}

console.log(calculate(radius, area));

console.log(calculate(radius, circumFerence))