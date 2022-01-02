const http = require('http');
const fs = require("fs");

const fileContent = fs.readFileSync('hello1.html');

const server = http.createServer((req,res) =>{

    res.writeHead(200,{'content-type': 'text/html'});
    res.end(fileContent);

});
const port = 8000
const host_name = '127.0.0.1'
server.listen(port,host_name,()=>{
    console.log(`server is running at http://${host_name}:${port}/`)
})