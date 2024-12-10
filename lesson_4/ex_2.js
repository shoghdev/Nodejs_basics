const fs = require("node:fs")
const { Buffer } = require('node:buffer')

//Task 1: Create and Write Data to a File
const file = fs.openSync("data.txt", "w")
const updateFile = fs.writeSync(file, "Hello, this is the first line.\n")
const appendText = fs.writeSync(file, "This is the second line.\n", "a")
fs.closeSync(file)

