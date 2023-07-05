// const map1 = new Map();
// map1.set("a", 1)
// map1.set("b", 2)
// map1.set("c", 3)
// console.log(map1);
// console.log(map1.get('a'));
// console.log(map1.get('b'));
// console.log(map1.get('c'));

// console.log(map1.size);
// console.log(map1.delete('b'));
// console.log(map1.size);
// const contacts = new Map();
// contacts.set("Jessie", { phone: "213-555-1234", address: "123 N 1st Ave" });

// console.log(contacts);
// console.log(contacts.has('Jessie'))
// console.log(contacts.has('phone'));
// console.log(contacts.get('Jessie'));

// const en = map1.entries();
// console.log(en);


const myMap = new Map();
const keyString = "a string"
const keyObj = {}
const keyFun = function() {}

// //set value 
myMap.set(keyString, "with 'a string'")
myMap.set(keyObj, "with a object")
myMap.set(keyFun, "with a function")

// console.log(myMap);
// console.log(myMap.size);
// console.log(myMap.get(function() {}));



// const kvArray = [
//     ["key1", "value1"],
//     ["key2", "value2"],
//   ];

// const arrayMap = new Map(kvArray)
// console.log(arrayMap);
// console.log(arrayMap.get('key1'));
// console.log(Array.from(arrayMap.value()));
// console.log([...arrayMap]);

// const first = new Map([
//     [1, "one"],
//     [2, "two"],
//     [3, "three"],
//   ]);
  
//   const second = new Map([
//     [1, "uno"],
//     [2, "dos"],
//   ]);
  
// const merged = new Map([...first, ...second])
// console.log(merged);
// console.log(merged.get(1));