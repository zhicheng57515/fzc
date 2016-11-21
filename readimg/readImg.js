var http=require('http');
var inFs=require('../fs/inFs');
http.createServer(function(request,response){
    console.log("Dddddddddddddddd");

    if(request.url!=='/favicon.ico'){
        inFs.readImg("../imgs/pig.png",response);
    }
}).listen(8000);