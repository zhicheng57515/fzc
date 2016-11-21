var http=require('http');
//var inFs=require('./inFs');
var  url=require('url');
var router=require('../router');
http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type":"text/html;charset=utf-8"});
    if(request.url!=="/favicon.ico"){
        var pathname=url.parse(request.url).pathname;
        pathname=pathname.replace(/\//,'');
        //console.log(pathname);

        //router[pathname](request,response);
        router[pathname](request,response);
        //response.write(data);
        //response.end();
        //inFs.readfileSync("./login.html");
        //function recall(data){
        //    response.write(data);
        //    response.end("ok");
        //}
        //inFs.readfile("./login.html",recall);
        //console.log("主程序执行完毕")
    }

}).listen(8001);

