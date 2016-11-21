var fs=require('fs');
module.exports={
    readImg:function(path,res){      //同步读取
        console.log(path);
        fs.readFile(path,'binary',function(err,filedata){
            if(err){
                console.log(err);//文件保存
                return;
            }else {
                res.write(filedata,"binary");
                res.end();
            }

        });

    },
    readfile:function(path,recall){          //异步执行
        fs.readFile(path,  function  (err,  data)  {
            if  (err)  {
                console.log(err);
                recall("文件不存在");
            }else{
                console.log(data.toString());
                recall(data);
            }
        });
        console.log("异步方法执行完毕");
    },
    readfileSync:function(path){      //同步读取
        var  data  =  fs.readFileSync(path,'utf-8');
        console.log(data);
        console.log("同步方法执行完毕");
        return  data;
    },
    //readImg:function(path,res){      //同步读取
    //    console.log(path);
    //
    //    filedata=fs.readFileSync(path,'binary');
    //    res.write(filedata,"binary");
    //    res.end();
    //},

    writefile:function(path,data,recall){          //异步执行
        fs.writeFile(path,  data,function  (err)  {
            if  (err) {
                throw  err;
            }
                console.log("It\'s saved!");//文件保存
                recall("写文件成功");
        });
    },
    writefileSync:function(path,data){      //同步读取
      fs.readFileSync(path,data);
        console.log(data);
        console.log("同步方法执行完毕");
    }
};
