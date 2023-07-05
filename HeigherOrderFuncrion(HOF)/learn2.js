// forEach, map , filter, reduce

let arr = [2, 3, 4] 
// forEach 

// arr.forEach(function(element, index, arr) {
//     console.log(element, index, arr)
// })

arr.forEach((element, index, arr) => {
    // console.log("arrow : ", index, element, arr)
})

// map
const heros = ["naagraj", "doga", "dhruva","maniraj"];
// heros.forEach((el) => {console.log(el.toUpperCase())});

arr.map(function (element, index, arr) {
    // console.log("using map : ", element, index, arr)
})

heros.map(function(element) {
    // console.log(element.toUpperCase());
})

// filter 
// console.log(heros);
const heroWithRaj = heros.filter((h) => {
    return h.endsWith('raj')
})
// console.log(heroWithRaj)

const array1 = [1, 4, 9, 16] 
const map1 = array1.map((element) => {
    return element * 2
})
// console.log(map1);

const words = ["Apple", "Samsung", "Nokia", "Redmi", 'Oppo', "realme", "vivo"]
const newWords = words.filter((word) => word.length > 5)
// console.log(newWords)


// reduce 
const number = [1, 2, 3, 4, 5] 
const sum = number.reduce(function(accumulator, currentValue, initalValue) {
    return accumulator + currentValue;
}, 10)
// console.log(sum)

// shopping cart
const cartBill = [20, 30, 50]
const sumOfCartBill = cartBill.reduce((previousValue, currentValue) => previousValue + currentValue, 0)
// console.log(sumOfCartBill);

const gameScore = [200, 300, 310, 250, 150];

// check if all values are numbers
// console.log(typeof gameScore[1]);
const gameScoreCheck = gameScore.every((v) => typeof v === 'number')
// console.log("check: ", gameScoreCheck);

// find score above 200
// const newScore = gameScore.filter((value) => {
//     return value > 200
// })
// console.log(newScore)

const above200 = gameScore.find((score) => score > 200)
console.log(above200)

// learn....

// findIndex
// some
// sort