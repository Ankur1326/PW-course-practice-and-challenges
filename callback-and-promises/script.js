// function h(x, fn) {
//     // h -> is a HOF
//     // fn -> callback
//     console.log(x * x);
//     // fn();
// }

// h(10, function () {
//     console.log("done with callback");
// })

// function h(x, fn) {
//     console.log(x*x);
//     fn(x*x)
// }
// h(10, exec)

// function exec(n) {
//     console.log("suuared value is", n);
// }

console.log("Start");
setTimeout(function f() {
    console.log("timer done");
}, 3000)
console.log("end");
console.log("start for loop");
for(let i = 0; i < 10000000000; i++) {

}
console.log("end for loop");