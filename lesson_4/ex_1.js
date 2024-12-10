const fs = require("node:fs")
const { Buffer } = require('node:buffer')

//Task 1: Create and Write Data to a File
const fd = fs.openSync("data.txt","w")
fs.writeSync(fd, "Hello, this is the first line.\n")
fs.appendFileSync(fd, "This is the second line.\n")
fs.closeSync(fd)

//Task 2: Read File Content into a Buffer
const readData = fs.openSync("data.txt", "r")
const buffer = Buffer.alloc(64)
const data = fs.readSync(readData, buffer)
console.log(buffer)
console.log(buffer.toString())
fs.closeSync(readData)
