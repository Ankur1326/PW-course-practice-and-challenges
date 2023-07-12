const fs =  require("fs")
// console.log(fs);

console.log("read start");
// Asynchronous way to read file 
fs.readFile("./fs/input.txt", function(err, data) {
    if (err) {
        console.log("Error: ", err);
        return err;
    }
    console.log("Data: ", data.toString());
    console.log("READ END");
    return data;
})

// console.log("other stuff");

// output -> read start
            // other stuff
            // Data:  I am learning MERN Stack from PWSkills
            // READ END



// Synchronous way to read file

// console.log("read start");
// let data = fs.readFileSync("./fs/input.txt")
// console.log("Data : ", data.toString());
// console.log("read end");
// console.log("other stuff");


// Read files
// Write files
// Append files
// Close files
// Delete files


// Opening a file
// read > open + read

// const buf = new Buffer(1024)

// fs.open("./fs/input.txt", 'r+', function(err, fd) {
//     if (err) {
//         console.log("Error in opaning file: ", err);
//     }
//     console.log("File open succesfully");

//     fs.read(fd, buf, 0, buf.length, 4, function(er, bytes) {
//         if (er) {
//             console.log("Error in reading file!");
//         }
//         console.log("Data: ", bytes);
//         console.log("Data: ", buf.slice(0, bytes).toString());
//     })
// })

// writing to file
// fs.writeFile("input.txt", "PW SKills", function(err) {
//     if (err) {
//         console.log("Error in writing file!" );

//     }
//     else {
//         console.log("success in writing file!");
//     }
// })

// Append to file
// fs.appendFile("input.txt", '-- Chirag Goel', 'utf8', function(err) {
//     if (err) {
//         console.log("Error in writing file!" );
//     }
//     else {
//         console.log("success in writing file!");
//     }
// })