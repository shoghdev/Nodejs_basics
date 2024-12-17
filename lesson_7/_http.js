const http = require("node:http");
const server = http.createServer((req, res) => {
    const method = req.method;
    res.writeHead(200, { 'Content-type': 'application/json' });
    if (method === "GET") {
        res.end(JSON.stringify({ message: 'Welcome to the backend server' }));
    } else if(
        method === "POST" ||
        method === "PUT" ||
        method === "PATCH" ||
        method === "DELETE" ||
        method === "OPTIONS"
    ) {
        res.end(JSON.stringify({ message: `You sent a ${method} request` }));
    } else {
        res.end(JSON.stringify({ message: "405 Method Not Allowed" }));
    }

    
})
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
})