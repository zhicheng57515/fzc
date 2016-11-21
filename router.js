var inFs=require('./fs/inFs');
var url=require('url');
var querystring=require('querystring');//post必须导入
function getRecall(req,res){
    res.writeHead(200,{"Content-Type":"text/html;charset=utf-8"});
    function recall(data){
            res.write(data);
            res.end();
    }
    return recall;
}
module.exports={
    login:function(req,res){
        //--------get方式接受参数----------------
        //var rdata=url.parse(req.url,true).query;
        //console.log(rdata);
        //if(rdata['email']!=undefined){
        //    console.log(rdata['email']);
        //    console.log(rdata['pwd']);
        //}
        //--------post方式接受参数----------------
        var post='';//定义了一个post变量，用于暂存请求体的信息
        req.on('data',function(chunk){
            post+=chunk;
        });
        req.on('end',function(){
            post=querystring.parse(post);
            console.log(post);
            console.log('email:'+post['email']+'\n');
            console.log('pwd:'+post['pwd']+'\n');

            //console.log('email:'+post['email']);
            //console.log('pwd:'+post['pwd']);
            //res.write('收到参数:'+post['email'+'\n']);
            //res.end();
            arr=['email','pwd'];
            function recall(data){
                dataStr=data.toString();
                for(var i=0;i<arr.length;i++){
                    re=new RegExp('{'+arr[i]+'}','g');
                    dataStr=dataStr.replace(re,post[arr[i]]);
                }
                res.write(dataStr);
                res.end();
            }
            inFs.readfile("./fs/login.html",recall);
        });
////////////////////////////////////////////
//        recall=getRecall(req,res);

    },
    register:function(req,res){
        recall=getRecall(req,res);
        inFs.readfile("./register.html",recall);
    },
    writefile:function(req,res){
        recall=getRecall(req,res);
        inFs.writefile("./main.txt",'我的写入文件',recall);
    },
    showimg:function(req,res){
        res.writeHead(200,{"Content-Type":"image/jpeg"});
        inFs.readImg("./imgs/pig.png",res);
    }
};