const http = require('http');  //http handles the request and response of server in node
http.createServer((req,resp) =>{    //createServer  is a method which takes whole function as a parameter
       resp.write("<h1>Hello this is Muskan Kapoor</h1>");
       resp.end();
}).listen(4500);