const fs = require("node:fs")
const { Buffer } = require('node:buffer')

//Task 1: Create and Write Data to a File
const file = fs.openSync("data.txt", "w")
const updateFile = fs.writeSync(file, "Hello, this is the first line.\n")
const appendText = fs.writeSync(file, "This is the second line.\n", "a")
fs.closeSync(file)

//Task 2: Read File Content into a Buffer
const openData = fs.openSync("data.txt", 'r')
const buffer = Buffer.alloc(64)
const bytesRead = fs.readSync(openData, buffer, 0, buffer.length, null)
console.log(buffer)
fs.closeSync(openData)

//Task 3: Copy File Content Byte-by-Byte
const sourceFile = fs.openSync("data.txt", "r")
const destinationFile = fs.openSync("copy.txt", "w")
const newBuffer = Buffer.alloc(16)
let bytesForRead
do {
    bytesForRead = fs.readSync(sourceFile, buffer, 0, buffer.length, null)
    if (bytesForRead > 0) {
        fs.writeSync(destinationFile, buffer, 0, bytesForRead)
    }
} while (bytesForRead > 0)
console.log(newBuffer)
fs.closeSync(sourceFile, destinationFile)