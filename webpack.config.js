/**
 * Created by joah.zhang on 2015/11/26.
 */
var path = require("path");
var webpack = require('webpack');

var entry = ["bootstrap-loader", "./index.js"];
if(process.env.NODE_ENV != "production") {
    entry.unshift('webpack-hot-middleware/client?path=http://localhost:3002/__webpack_hmr')
}

module.exports = {
    devtool: '#source-map',
    context: path.join(__dirname, "web"),
    entry: {
        index: entry
    },
    output: {
        path: path.join(__dirname, "web", "build"),
        filename: "[name].bundle.js",
        publicPath: "/build/"
    },
    module: {
        loaders: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
            {test: /\.css$/, loader: 'style!css'},
            {test: /\.scss$/, loader: 'style!css!sass?relative_assets=true'},
            { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/font-woff" },
            { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=application/octet-stream" },
            { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file" },
            { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url?limit=10000&mimetype=image/svg+xml"}

        ]
    },
    resolve: {
        extensions: ["", ".js"]
    },
    plugins: [
        // Webpack 1.0
        new webpack.optimize.OccurenceOrderPlugin(),
        // Webpack 2.0 fixed this mispelling
        // new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin(),

        new webpack.ProvidePlugin({
            "jQuery": "jquery",
            "window.jQuery": "jquery"
        })
    ]
};
