// try {
//     x = undefined;
//     console.log(x[0]);
// } catch(error) {
//     console.log('Error handling in catch block ',error);
// } finally {
//     console.log("Finaly code execute");
// }

try {
    console.log('hello');
    console.log(a);
}
catch {
    console.log('handled in catch block');
}
finally {
    console.log("finally code execute");
}
console.log('end');