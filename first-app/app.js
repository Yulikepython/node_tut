const EventEmitter = require("events")
const emitter = new EventEmitter()

//register a listner
emitter.on("messageLogged", (arg)=>{console.log(arg)})


const log = require("./logger")
log.log("testing!!")