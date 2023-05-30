const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require("path");

module.exports = {
    output: {
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: path.join('images', '[name].[hash][ext][query]'),
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sc|c)ss$/i, // /\.s?css$/i
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: { publicPath: "" }
                    },
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
                // parser: {
                //   dataUrlCondition: {
                //       maxSize: 30 * 1024,
                //   }
                // },
            },
        ]
    },

    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: "source-map",
    devServer: {
        static: "./dist",
        // hot: true,
    }
}