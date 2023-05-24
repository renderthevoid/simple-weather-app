const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");


module.exports = {
    mode: "production",
    context: path.resolve(__dirname, "src"),
    entry: {
        index: "./index.js",
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[contenthash].js",
        assetModuleFilename: "assets/images/[name].[contenthash][ext]",
        clean: true,
    },
    performance: {
        hints: false,
        maxAssetSize: 512000,
        maxEntrypointSize: 512000
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: "Online Shop",
            template: "./index.html",
            chunks: ['index'],
        })
    ],
    devServer: {
        port: 4000,
        compress: true,
        hot: true,
        static: {
            directory: path.join(__dirname, "dist"),
        }
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                use: ['html-loader'],
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                type: "asset/resource",
                generator: {
                    filename: "assets/fonts/name[ext]",
                }
            },
            {
                test: /\.(png|jpg|jpeg|svg|gif)$/i,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ]
    },

}