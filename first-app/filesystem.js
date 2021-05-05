const fs = require("fs")

// list files
// const files = fs.readdirSync("./")
// console.log(files)

fs.readdir("$", function(err, files){
    if (err) console.log("Error", err);
    else console.log(files);
})