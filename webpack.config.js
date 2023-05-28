const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");

module.exports = {
    output: {
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
        new MiniCssExtractPlugin(),
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