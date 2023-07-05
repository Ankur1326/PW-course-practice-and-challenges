class Product {
    // property -> variables -> data membors
    // name;
    // price;
    // rating;
    #rating;  // private
    constructor(n, p, r) {
        // console.log('calling the constructor');
        this.name = n;
        this.price = p;
        this.#rating = r;
        // return 10; // if you are returning primitive than it will be avoided in constructor
        // return {x: 0, y: 20} // if you non-primitive than it will be returned
    }

    get ratingGetter() {
        console.log(this.#rating);
    }
    set ratingSetter(r) {
        if(r < 0) return;
        this.#rating = r;
    }
    
    static custom() {
        console.log("Calling a static method");
    }
    // behaviours -> functions -> member function 
    display() {
        console.log("displaying the current product", this.name, this.price, this.rating);
        // console.log("display the current product");
    }
}

const p = new Product("Ankur", 1000, 5); // new -> creates an empty plain object
// in the above piece of code we are calling the constructor method
// console.log(p);
// p.display();
p.name = "Samsung s20 Ultra";
// console.log(Product.prototype);
// console.log(p.rating); //undefined
// calling static mecthod using class name not using object 
Product.custom();