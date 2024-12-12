const fs = require("node:fs")
const { Buffer } = require('node:buffer')
const { buffer } = require("stream/consumers")

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
console.log(sourceFile, destinationFile)
fs.closeSync(sourceFile, destinationFile)

//Task 4: Implement a Simple File Cursor
const newFile = fs.openSync("example.txt", 'w+')
fs.writeSync(newFile, "0123456789")
const buffer_4 = new Buffer("AB")
fs.writeSync(newFile, buffer_4, 0, buffer_4.length, 5)
fs.closeSync(newFile)

//Task 5: File Length and Seek
const opened = fs.openSync("data.txt", "r")
const data = fs.readFileSync('data.txt',
    { encoding: 'utf8', flag: 'r' })
const added = Buffer.from(data)
const newBff = Buffer.alloc(10)
const middle = fs.readSync(opened, added, 0, added.length, added.length / 2)
fs.readSync(opened, newBff, 0, newBff.length, middle)
console.log(data)
console.log(`File Length: ${data.length} bytes`)
console.log(`Middle: ${middle}`)
console.log(`Data from middle: ${newBff.toString("utf-8")}`)
