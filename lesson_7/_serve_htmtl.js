const http = require("node:http")
const fs = require("node:fs")
const path = require("node:path")
const server = http.createServer((req, res)=>{
    const filePath = path.join(__dirname, "index.html")
    res.writeHead(200, {'Content-type' : 'text/html'})
    const read = fs.readFileSync(filePath,"utf8")
    res.end(read)
})

const PORT = 3000

server.listen(PORT, ()=>{
    console.log(`Server is runing on ${PORT}`);
})