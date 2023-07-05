const setA = new Set([1, 2, 3, 4])
const setB = new Set([2, 3, 5])
const setC = new Set([3, 4, 5, 6]);

// function isSuperset(set, subset) {
//     for(const elem of subset) {
//         if(!set.has(elem)) {
//             return false
//         }
//         return true
//     }
// }
// console.log(isSuperset(setA, setB));

function union(a, c) {
    for(item of c) {
        a.add(item)
    }
    // console.log(a);
}
// console.log(union(setA, setC));


// function interSection(setA, setC) {
//     console.log([...setC]);
//     return new Set([...setC].filter((el) => setA.has(el)))
// }
// console.log(interSection(setA, setC));

// using if else condition 
// function interSection(setA, setC) {
//     _interSection = new Set();
//     for(el of [...setC]) {
//         if(setA.has(el)) {
//             _interSection.add(el)
//             console.log("h");
//         }
//     }
//     return _interSection;
// }
// console.log(interSection(setA, setC));



// function symmetricDifference(setA, setC) {
//     _symmetricDifference = new Set(setA);

//     for (el of [...setC]) {
//         if(_symmetricDifference.has(el)){
//             _symmetricDifference.delete(el)
//         }
//         else {
//             _symmetricDifference.add(el)
//         }
//     }
//     return _symmetricDifference

// }
// console.log(symmetricDifference(setA, setC));


// function difference(setA, setC) {
//     _difference = new Set(setA)
//     for(el of [...setC]) {
//         if(_difference.has(el)) {
//             _difference.delete(el)
//         }
//     }
//     return _difference;
// }
// console.log(difference(setA, setC));

// Relation to array 
// const myArray = ["value1", "value2", "value3"]
// const mySet = new Set(myArray);
// console.log(mySet.has("value1")); //true
// console.log([...mySet]);

// remove dublicate elements from an array
const numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5];
const removeDublicateEle = [...new Set(numbers)]
// console.log(removeDublicateEle);

// relation ot strings 
const text = "Indian"
const mySet = new Set(text);
// console.log(mySet);

//case sensitive and duplicate omission
console.log(new Set("Firefox"));
console.log(new Set("firefox"));

