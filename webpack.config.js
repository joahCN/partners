/**
 * Created by joah.zhang on 2015/11/26.
 */
var path = require("path");

module.exports = {
    devtool: '#source-map',
    context: path.join(__dirname, "web"),
    entry: {
        index: ["bootstrap-loader", "./index.js"]
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
        root: path.join(__dirname, "web"),
        extensions: ["", ".js"]
    }
};
