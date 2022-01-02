const http = require('http');
const fs = require("fs");

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./aboutUs.html')
const services = fs.readFileSync('./services.html')
const contact = fs.readFileSync('./contact.html')

const host_name = '127.0.0.1';
const port_number = 3000;

const server = http.createServer((req,res)=>{
     res.setHeader('Content-Type', 'text/html');
     res.statusCode = 200;
    let url = req.url;
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/aboutUs'){
        res.end(about);
    }
    else if(url == '/services'){
        res.end(services);
    }
    else if(url == '/contact'){
        res.end(contact);
    }
    else{
        res.statusCode = 404;
        res.end("<h1 style='color:red'>404 Page Error</h1>")
    }
    
})

server.listen(port_number,host_name,()=>{
    console.log(`Sever is runing at http://${host_name}:${port_number}/`);
})