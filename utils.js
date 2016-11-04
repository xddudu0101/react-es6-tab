'use strict';
import $ from 'jquery'

var Utils = {
    // 判断对象为空
    isEmpty:function(obj){
        if(typeof (ofj)!='number' &&(!obj || obj==null || obj==''|| obj==undefined || typeof (obj)=='undefined')){
            return true;
        }
        return false;
    },
    // 判断对象不为空
    isNotEmpty:function(obj){
        if(!this.isEmpty(obj)){
            return true;
        }
        return false;
    },
    // 将数字0~9转为汉字
    convertTocharacter:function(n){
        var N = ["零", "一", "二", "三", "四", "五", "六", "七", "八", "九"];
        return N[n];
    },
    // 将手机号中间四位加密
    convertMobile:function(mobile){
        return mobile.substring(0,3) + "****" + mobile.substring(7,11);
    },
    // 获取手机系统类型（包含模拟器）
    getSysType: function() {
        var stsType='';
        var u=navigator.userAgent;
        if(u.indexOf('iphone')>-1 || u.indexOf('ipad')>-1){
            stsType='IOS';
        }else if(u.indexOf('Android')>-1 || u.indexOf('Linux')>-1 || u.indexOf('Windows Phone')>-1){
            stsType = "PC";
        }
        return stsType;
    },
    getUrl: function(){
        return window.location.href.split('#')[0];
    },
    // 获取uri参数
    getUri: function(){
        return window.location.protocol + "//"+ window.location.host;
    },
    // 获取url参数
    getUrlParam : function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = window.location.search.substr(1).match(reg);
        if (r != null){
            return unescape(r[2]);
        }
        return '';
    },

    // 判断是否在微信打开
    isWeixin: function(){
        var ua=navigator.userAgent.toLocaleLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger"){
            return true;
        }
        return false;
    },
    // 获取带#的地址栏的bizCode的参数
    getUrlSharp:function(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r=window.location.hash.substr(3).match(reg);
        if (r != null){
            return unescape(r[2]);
        }
        return '';
    }
}

module.exports = Utils;
