// const http = require('http');
// http.createServer((req, res) => {
//    res.writeHead(200, {
//    'Content-Type': 'text/plain'
//    });
//    res.end('Hello World');
// }).listen(3000);

// console.log('Server running at http://localhost:3000/');

// const connect = require('connect');
// const app = connect();
// app.listen(3000);

// console.log('Server running at http://localhost:3000/');

const http = require('http');
const fs = require('fs'); //File System

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    
    let filePath = __dirname + '/public/index.html';
    
    console.log(req.url);
    
    switch(req.url){
        case '/aboutus': filePath = __dirname + '/public/index.html'; 
        break;
        default: filePath = __dirname + '/public/index.html';
        break;
    }

    fs.readFile(filePath, (err,data) =>{
        res.statusCode = 200; //ok
        res.setHeader('Content-Type', 'text/html');
        res.end(data,'utf-8');
    })

    res.statusCode = 200; //ok
    res.setHeader('Content-Type', 'text/html');
    res.end('Hello World', 'utf-8');

});

server.listen(port, hostname, () => {
    console.log(`Server is running at http://${hostname}:${port}`);
});