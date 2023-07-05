// arrow function 
const Product = (n, p, r) => {
    this.name = n;
    this.price = p;
    this.rating = r;
}
const p = new Product('iphone', 32000, 5)
console.log(p);

// Not use function constructor as wall as arrow function

// The theory of this keyword pointing to calling context is not applicable with arrow function 