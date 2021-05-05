const os = require("os")

var totalMem = os.totalmem()
var freeMem = os.freemem()
console.log(`Free Memory: ${freeMem} out of Total Memory: ${totalMem}`)