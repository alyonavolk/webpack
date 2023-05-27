const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.(sc|c)ss$/i, // /\.s?css$/i
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader',
                ]
            },
        ]
    },

    plugins: [
        new MiniCssExtractPlugin(),
    ],

    devtool: "source-map",
    devServer: {
        static: "./dist",
        // hot: true,
    }
}