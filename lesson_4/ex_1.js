const fs = require("node:fs")
const { Buffer } = require('node:buffer')

//Task 1: Create and Write Data to a File
const fd = fs.openSync("data.txt", "w")
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

//Task 3:Copy File Content Byte-by-Byte
const sourceFile = fs.openSync("data.txt", "r")
const destinationFile = fs.openSync("copy.txt", "w")
const newBuffer = Buffer.alloc(16)
let bytesRead
do {
    bytesRead = fs.readSync(sourceFile, buffer, 0, buffer.length, null)
    if (bytesRead > 0) {
        fs.writeSync(destinationFile, newBuffer, 0, bytesRead)
    }
} while(bytesRead > 0)
console.log(newBuffer)
fs.closeSync(sourceFile, destinationFile)