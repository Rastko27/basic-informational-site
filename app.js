const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {   
   let filePath;

   switch (req.url) {
      case '/':
         filePath = path.join(__dirname, 'index.html');
         res.statusCode = 200;
         break;
      case '/about':
         filePath = path.join(__dirname, 'about.html');
         res.statusCode = 200;
         break;
      case '/contact':
         filePath = path.join(__dirname, 'contact.html');
         res.statusCode = 200;
         break;
      default:
         filePath = path.join(__dirname, '404.html');
         res.statusCode = 404;
         break;
   }

   fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
         console.error(err);
         res.writeHead(500, { "Content-Type": "text/plain" });
         res.end("Internal Server Error");
      } else {
         res.setHeader("Content-Type", "text/html");
         res.end(data);
      }
   });
});

server.listen(port, hostname, () => {
   console.log("Server is running at: " + hostname + ":" + port);
});