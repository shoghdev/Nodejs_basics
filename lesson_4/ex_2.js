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