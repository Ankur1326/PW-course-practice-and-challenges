let obj = {
    x: 10,

    fun() {
        console.log(this.x); // 10
    }
}
obj.fun()

// but 
let obj2 = {
    x:10,
    fun: () => {
        console.log(this.x); //undefined
    }
}

obj2.fun()

// and 
let obj3 = {
    x: 10,
    fun() { // but here is defined this keyword (inside the normal funciton)
        y = {
            gun: () => { // this not defined in arrow function (not exist reference of this inside the arrow function)
            console.log(this.x); // 10
            }
        }
        y.gun();
    }
}
obj3.fun();