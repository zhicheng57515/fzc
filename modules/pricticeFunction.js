//function fun2(res){
//    console.log("我是fun2");
//    res.write("你好，我是fun2");
//}
//module.exports=fun2;  只支持一个函数导出
module.exports={

    fun2:function(res){
        console.log("我是fun2");
    res.write("你好，我是fun2");
    },
    fun3:function(res){
        console.log("我是fun3");
        res.write("你好，我是fun3");
    }
}