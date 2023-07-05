// let str = "abc abc ABC is a very very nice awesome nice very boy";
// console.log(str.replace('very', 'bad'))

// const regex = /(abc){1,1}/gi;
// console.log(str.replace(regex, 'VERY'));

//by code with harry 

let reg = /harry/g  //this is a regular expression literal in js.
// console.log(reg);
// console.log(reg.source);  // source is a what wrote inside of regex.

// functions to match expressions
let s = "This is great code with harry and also harry bhai";

// 1. exec() - This function will return an array for match or return null for no match
let result = reg.exec(s)
// console.log(result);

// console.log(result.index);
// console.log(result.input);
// result = reg.exec(s)
// console.log(result);

// result = reg.exec(s)
// console.log(result);


// 2. text() -- returns true or false
// console.log(reg.test(s));

// 3. match() --> it will return an array of result or null

// let result2 = reg.match(s) //-> This is wrong
let result3 = s.match(reg) //-> This is right
// console.log(result3);


// 4. search() -> Return index of first match else -1
// let result4 = reg.search(s) //-- this is  wrong 
let result5 = s.search(reg);
// console.log(result5);

// 5. replace() --> Retuen new replaced string with all the replacements

let result6 = s.replace(reg, "SHUBHAM")
console.log(result6);