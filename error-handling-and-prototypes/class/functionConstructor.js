// name function expression
function Product (n, p, r) {
    this.name = r;
    this.price = p;
    this.rating = r;
    // return 10; // ignore primitive values
}
const p = new Product("macbook", 150000, 5);
console.log(p);

/**
 * 1. this keyword in js is diff than other language 
 * 2. this keyword refers to the context from where we called 
 * 
 * in the function constructor also
 * - if you return primitive it is ignored and we return the object referred by this
 * - if you return a custom obj. then the custom objects returned
 * -if you don't return anything , then object referred by this is returned
 */

let x = {
    p: Product
}
x.p("airpods", 2000, 5);
console.log(x);
