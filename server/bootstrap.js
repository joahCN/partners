/**
 * Created by joah.zhang on 2016/3/2.
 */
var express = require("express");
var path = require("path");
var app = express();
console.log("mode: "+ process.env.NODE_ENV);

//if(process.env.NODE_ENV == "development") {
//
//}

var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var compiler = webpack(webpackConfig);

app.use(webpackDevMiddleware(compiler, {
    publicPath : webpackConfig.output.publicPath,
    hot: true
}));
app.use(require("webpack-hot-middleware")(compiler));


app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../web/index.html"))
});
app.get('/api/aboutItems', function(req, res) {
    res.send("request success");
});

//app.use(express.static('../web/build'));

var server = app.listen(3002, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);
});