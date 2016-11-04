
'use strict';
import $ from 'jquery'
import Config from './config.js'

let Service={
    // 服务器请求统一入口
    ajax : function(params, callback) {
        var url;
        if (Config.environ == 'dev'){
            url = Config.nodeApi;
            params.data.apiUrl = params.url;
        }
        $.ajax({
            url : url || params.url,
            data : params.data,
            type : params.type || 'POST',
            async : params.async || true,
            success : function(data) {
                if (Config.environ == 'dev'){
                    data = eval('(' + data + ')');
                }
                if (callback) {
                    callback(data);
                }
            }
        });
    },

    //日历查询接口
    calendarQueryUrl:function(data,callback){
        let params = {
                url :'/api/signQuery/query',
                data : data
        };
        this.ajax(params, callback);
    },
module.exports = Service;

