// anonymous function expression form 
const Product = function(n, p, r) {
    this.name = r;
    this.price = p;
    this.rating = r;
    
}
const p = new Product("iphone", 10000, 6)
console.log(p);
