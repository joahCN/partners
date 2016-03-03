/**
 * Created by joah.zhang on 2016/3/2.
 */
var express = require("express");
var path = require("path");
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var app = express();

var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath : webpackConfig.output.publicPath
}));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../web/index.html"))
});

app.use(express.static('../web/build'));

var server = app.listen(3002, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});