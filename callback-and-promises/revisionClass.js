// creating a promise
// const promiseOne = new Promise(function(resolve, reject) {
//     // Do an async task
//     // DB call, crypto

//     setTimeout(() => {
//         console.log("A");
//         resolve()
//         // reject()
//     }, 1000);
// })

// // consuming a promise 
// promiseOne.then(function() {
//     console.log("Promise consumed");
// });


// const promiseThree = new Promise(function(resolve, reject) {
//     setTimeout(() => {
//         // DB call to get all users from database
//         resolve({username: "Ankur", email: "a@pw.live"})
//     }, 1000);
// })

// promiseThree.then(function (user) {
//     console.log(user);
    
// })

// +++++++++++++++++++++
// const promiseFour = new Promise(function(resolve, reject) {
//     // const error = true;
//     const error = false;
//     setTimeout(() => {
//         if (!error) {
//             resolve({username: "Ankur", email: "a@pw.com"})
//         } else {
//             reject("ERROR: somthing went wrong")
//         }
//     }, 1000);
// })

// promiseFour
//     .then((user) => {
//         console.log(user);
//         return user.username;
//     })
//     .then((name) => {
//         console.log(name);
//     })
//     .catch((error) => {
//         console.log(error);
//     })
//     .finally(() => {
//         console.log("inside the finally code always execute");
//     })

// ++++++++++++++++++++++++++++
// const promiseFive = new Promise((resolve, reject) => {
//     const error = false;
//     setTimeout(() => {
//         if (!error) {
//             resolve({username: "Ankur", email: "an@pw.live"})
//         } else {
//             reject("ERROR: somthing went error")
//         }
//     }, 1000);
// })
 
// function consumePromiseFive() {
//     const response = promiseFive;
//     console.log(response);
// }

// consumePromiseFive()

// ++++++++++++++++++++++++++++++++

// async function getAllUsers() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users")
//     const data = response.json();
//     console.log(data);
// }
// getAllUsers()

//  or 

fetch("https://jsonplaceholder.typicode.com/users")
    .then(function(response) {
        return response.json()
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.log(error))