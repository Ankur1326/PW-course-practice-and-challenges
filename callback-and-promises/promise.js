// function createPromise() {
//     return new Promise(function exec(resolve, reject) {
//         // your code goes here
//         setTimeout(function f() {
//             console.log("timer done");
//             resolve("done")
//         }, 3000)
//     })
// }

// console.log("Start");
// let x = createPromise();
// console.log("got a new promise");
// x.then(function f() {
//     console.log("promise done");
// })
// console.log("end");

// for(let i = 0; i < 1000000000; i++) {
//     // some code
// }


// function createPromise() {
//     return new Promise(function exec(resolve, reject) {
//         // your code goes here
//         setTimeout(function f() {
//             console.log("timer done");
//             reject("done")
//         }, 3000)
//     })
// }

// console.log("Start");
// let x = createPromise();
// console.log("got a new promise");
// x.then(function f(value) {
//     console.log("promise done", value);
// }).catch(function f(value) {
//     console.log("handled", value);
// }).finally(function fn() {
//     console.log("finally");
// })
// console.log("end");

// for(let i = 0; i < 1000000000; i++) {
//     // some code
// }

// youtube....

const cart = ["shoes", "pants", "kurta"];
createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        })
    })
})
createOrder(cart)
    .then(function (orderId) {
        return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo)
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo)
    })