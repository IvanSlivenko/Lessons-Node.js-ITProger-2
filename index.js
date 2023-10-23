const http = require('http')
const fs = require('fs')


let server = http.createServer((request, respons) => { 
    // respons.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' })
    // respons.end('Hello Node JS')

    respons.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    
        if (request.url == "/")  
           fs.createReadStream("./templates/index.html").pipe(respons);
        else if (request.url == "/about")
           fs.createReadStream("./templates/about.html").pipe(respons);
        else
            fs.createReadStream("./templates/error.html").pipe(respons);
})

const PORT = 3000
//const HOST = "127.0.0.1"
const HOST = 'localhost'

server.listen(PORT, HOST, () => { 
    console.log(`Сервер ініційовано : http://${HOST}:${PORT}`);
})






 

