/**
* アプリケーションの初期化処理
*/
var ApplicationMain = function () {
    riot.mount("application");
};

riot.tag2('application', '<h1>Hello world</h1>', '', '', function(opts) {
});