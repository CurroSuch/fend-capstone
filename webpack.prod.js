const path = require('path')
const webpack = require('webpack')
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    entry: './src/client/index.js',
    mode: 'production',
    module: {
        rules: [
            {
                test: '/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    resolve: {
        fallback: {
            "util": false,
            "http": false,
            "path": false,
            "crypto": false,
            "zlib": false,
            "stream": false,
            "buffer": false,
            "https": false,
            "vm": false,
            "os": false,
            "fs": false,
            "uglify": false,
            "assert": false,
            "constants": false,
            "esbuild": false,
            "@swc/core": false,
            "uglify-js": false,
            "worker_threads": false,
            "child_process": false,
            "inspector": false,
        }
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        })
    ]
}
