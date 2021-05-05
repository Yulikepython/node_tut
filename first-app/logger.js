const EventEmitter = require("events")
const emitter = new EventEmitter()
var url = "https://itc.tokyo/"

function log(message){
    //send an http request
    console.log(message)
    emitter.emit("messageLogged", {data: message})

    }
module.exports.log = log



//module wrapper => exports, require, module, __filename, __dirname

//in the app.js

// const logger = require("./logger")
// logger.log("testting")

//console.log(logger)
// Youlikepython first-app$ node app.js
// { log: [Function: log] }