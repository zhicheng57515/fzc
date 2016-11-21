var http=require('http');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html'});
    if(request.url!=="/favicon.ico"){//清楚二次访问
        console.log("访问");
        response.write("hello,world");
        response.end();
    }

}).listen(8000);
console.log("Server running at http://127.0.0.8000/")
