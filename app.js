const http = require("http");

const server = http.createServer((req,res)=>{
res.write("Hello from CI/CD DevOps Project");
res.end();
});

server.listen(3000);
