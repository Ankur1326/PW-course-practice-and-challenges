//+++++++++++++++++++++++++++++++++++++++++++
//Spread Operator
const oneArray = [1, 2, 3, 4]
const twoArray = [5, 6, 7, 8]
// concatedArray = oneArray.concat(twoArray)
// console.log(concatedArray)

concatedArray = [oneArray, twoArray]
// console.log(concatedArray); // [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ]

// spread operator
concatedArray = [...oneArray, ...twoArray]
// console.log(concatedArray); // [1, 2, 3, 4, 5, 6, 7, 8]
// ...oneArray = 1, 2, 3, 4
// ...twoArray = 5, 6, 7, 8
// console.log(...oneArray); // 1, 2, 3, 4

//++++++++++++++++++++++++++++++++++++++++++++++++++
//Rest Operator
function manyArguments() {
    console.log(arguments)
    console.log(Array.from(arguments));
    let args = Array.from(arguments);
    let finalArr = args.map(e => e);
    console.log(finalArr);
}
// manyArguments(1, 2, 3, 4)
// manyArguments(1, 2, 3, 4, 5, 6, 7, 8, 8, 2)


function manyArguments2(...args) {
    console.log(args)
    console.log(typeof args)
    const finalArr = args.map(e => e)
    console.log(finalArr);
}
// manyArguments2(1, 2, 3, 4);
// manyArguments2(1, 2, 3, 4, 5, 6, 7, 8, 8, 2);

const obj1 = {foo: "bar", x:42}
const obj2 = {foo: "baz", y:10}
const mergedObj = {...obj1, ...obj2} 
// console.log(mergedObj); // { foo: 'baz', x: 42, y: 10 }

//+++++++++++++++++++++++++++++++++++++++++++++++++++
const siteName = "PWSkills"
// console.log([...siteName]); // spread operator


function pwSkills(...values) {
    return values;
}

// console.log(pwSkills("superman", "flash"));


