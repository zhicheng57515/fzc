var http=require('http');
var url=require('url');
var router=require('./router');
var exception=require('./models/Exception');
http.createServer(function(request,reaponse){
        if(request.url!=='/favicon.ico'){
            pathname=url.parse(request.url).pathname;
            pathname=pathname.replace(/\//,"");
            try {
               //router[pathname](request,reaponse);
                data=exception.expfun(0);
                reaponse.write(data);
                reaponse.end();
            }catch (err){
                console.log('aaaaa'+err);
                reaponse.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
                reaponse.write(err.toString());
                reaponse.end();
            }
            console.log("server执行完毕")
        }
}).listen(8000);