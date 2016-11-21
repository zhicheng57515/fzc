var http=require('http');
//var User=require('./modules/classFunction');
var Teacher=require('./modules/teacher');
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(request.url!=='/favicon.ico'){
        teacher=new Teacher(1,'张三',20);
        teacher.enter();
        teacher.teach(response);
        response.end();
    }
}).listen(8000);