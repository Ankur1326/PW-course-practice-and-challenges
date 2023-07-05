// let emptySize = new Set();
// console.log(typeof emptySize);

// console.log(emptySize.size);
// let o = {a: 1, b: 2};
// emptySize.add(o)
// console.log(emptySize);
// console.log(emptySize.size);

// set

// let myArray = [1, 2, 3, 4, 3, 2]
// let newSet1 = new Set(myArray)
// let newSet2 = new Set([...myArray])
// console.log(newSet1);
// console.log(newSet2);
// newSet1.add(9)
// console.log(newSet1);

// console.log(newSet1.has(9));

// newSet1.clear();
// console.log(newSet1);

// set Difference
function setDifference(setA, setB) {
    return new Set([...setA].filter(el => setB.has(el)));
}
const setA = new Set([...[1, 2, 3, 4]])
// console.log(setA);
const setB = new Set([...[5, 6, 2, 4]])
// let fil = setDifference(setA, setB)
// console.log(fil);

// MDN 
const mySet1 = new Set();
mySet1.add(5)
// console.log(mySet1);
const o = {a: 1, b: 2}
mySet1.add(o)
// console.log(mySet1);
mySet1.delete(5)
// console.log(mySet1);
mySet1.add(5)
// console.log(mySet1);


// Iterating sets 
for(const item of mySet1) {
    // console.log(item)
}
// for(const keys of mySet1.keys()){
//     console.log(keys);
// }

let arr1 = [1, 2, 3, 4, 7]
let copyOfArr = Array.from(arr1)
// console.log(copyOfArr);

// Map() object++++++++++++++++++++++++++++

let map1 = new Map();
console.log(map1)
let arr = [
    [1, "Mithun"],
    [2, "Alka"],
    [3, "Prabir"],
    [4, "Shivam"],
    [5, "Vinay"]
]

// let x = arr.map((arrayItem) => map1.set(arrayItem[0], arrayItem[1]))
// console.log(x);
