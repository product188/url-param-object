/**
 * Created by kenley on 2017/3/9.
 *
 */


// 获取地址栏的参数数组
function getUrlParams()
{
    var search = window.location.search ;
    // 写入数据字典
    var tmparray = search.substr(1,search.length).split("&");
    var paramsObject ={};
    if( tmparray != null)
    {
        for(var i = 0;i<tmparray.length;i++)
        {
            var reg = /[=|^==]/;    // 用=进行拆分，但不包括==
            var set1 = tmparray[i].replace(reg,'&');
            var tmpStr2 = set1.split('&');
            paramsObject[tmpStr2[0]]=tmpStr2[1];
        }
    }
    // 将参数数组进行返回
    return paramsObject ;
}

// 根据参数名称获取参数值
function getParamValue(name)
{
    var paramsObject = getUrlParams();
    return paramsObject[name];
}

module.exports={
    getUrlParams:getUrlParams,
    getParamValue:getParamValue
}