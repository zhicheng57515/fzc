var http=require('http');
var otherFun=require('./modules/pricticeFunction');

http.createServer(function(request,response){
    response.writeHead(200,{"Content-Type":"text/html"});
    if(request.url!=='/favicon.ico'){//清楚第二次访问
        //fun1(response);
        otherFun.fun2(response);
        otherFun.fun3(response);
        console.log("访问");
        response.write("hello,node!");
        response.end();
    }
}).listen(8000);
function fun1(res){
    res.write("hello,woshi fun1");
}