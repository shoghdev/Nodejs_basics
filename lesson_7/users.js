const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const server = http.createServer((req, res) => {
    if (req.url === "/users") {
        const file = fs.readFileSync("users.json", "utf-8");
        res.writeHead(200, { "Content-type": "application/json" });
        if (req.method === "GET") {
            let resMes = ""
            if (!file) {
                resMes = { message: "[]" };
            } else {
                resMes = file;
            }
            res.end(JSON.stringify(resMes));
        } else if (req.method === "POST") {
            let data = null
            let resMessage = ""
            req.on("data", (chunk) => {
                const user = JSON.parse(chunk);
                const list = JSON.parse(file);
                if (!user.name || !user.age) {
                    resMessage = "Please fill the filds"
                } else {
                    data += chunk;
                    list.users.push(user);
                    fs.writeFileSync("users.json",JSON.stringify(list));
                    resMessage = `"User added", "user": ${JSON.stringify(user)}`
                }
                res.end(JSON.stringify({ message: resMessage }));
            })
        }
    } else {
        res.writeHead(400, { "Content-type": "application/json" });
        res.end(JSON.stringify({ message: "400 Bad Request" }));
    }
})
const PORT = 3000
server.listen(PORT, () => {
    console.log(`Server is runing on ${PORT}`);
})