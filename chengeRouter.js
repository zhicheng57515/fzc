var http=require('http');
var url=require('url');
var router=require('./router');
http.createServer(function(request,response){
    if(request.url!=="/favicon.ico"){
        console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaa");
        pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,'');
        router[pathname](request,response);
    }
}).listen(8000);
console.log("bbbbbbbbbbbbbbbbbbbbbbbbb");