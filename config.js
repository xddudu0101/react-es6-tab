
'use strict';

let Config = {
    environ: 'dev',
    imgBasePath: '../../public/',
    nodeApi: '/api',
    init: function(){
        if (this.environ == 'prd'){
            this.imgBasePath = '/';
        }
    }
}

Config.init();

module.exports = Config;
