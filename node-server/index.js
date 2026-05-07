const http = require('http');
const server = http.createServer((req,res)=>
{
    if(req.url === '/'){
        res.writeHead(200,{'Content-Type' : 'text/plain'});
        res.end('Hello world');
    }
});

server.listen(5000,()=>{
    console.log("Server is running on port 5000")
})