(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var urlParamObject=require("./url-param-object.js");
var domparam=document.getElementById("paramAll");
var urlParamsResult=urlParamObject.getUrlParams();
domparam.innerHTML=JSON.stringify(urlParamsResult);



var paramSingle=document.getElementById("paramSingle");
var name=urlParamObject.getParamValue("spm");//测试 name参数
paramSingle.innerHTML=name||"没有找到";
},{"./url-param-object.js":2}],2:[function(require,module,exports){
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
},{}]},{},[1]);
