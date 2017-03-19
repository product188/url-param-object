var urlParamObject=require("./url-param-object.js");
var domparam=document.getElementById("paramAll");
var urlParamsResult=urlParamObject.getUrlParams();
domparam.innerHTML=JSON.stringify(urlParamsResult);



var paramSingle=document.getElementById("paramSingle");
var name=urlParamObject.getParamValue("spm");//测试 name参数
paramSingle.innerHTML=name|np|"没有找到";