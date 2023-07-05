class bio{
    constructor(n){
        this.firstName;
        this.lastName;
    }
    display() {
        console.log("your name is: " + this.firstName + this.lastName);
    }
}
class allbio extends bio{

}
const b1 = new bio("Ankur", "Swami");
b1.display();
console.log(b1);

const b2 = new allbio()
console.log(b2);