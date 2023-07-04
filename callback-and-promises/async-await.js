async function harry () {
    let delhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 1000)
    })

    let bangloreWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 2000);
    })
    console.log("Fetching Delhi Weather Please wait....");
    let delhiW = await delhiWeather;

    console.log("Fetching banglore Weather Please wait....");
    let bangloreW = await bangloreWeather;

    return [delhiW, bangloreW]
}
console.log("welcome to weather control room");
let a = harry()
console.log(a);