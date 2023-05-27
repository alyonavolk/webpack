const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
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

    resolve: {
        extensions: ['.js', '.jsx']
    },

    devtool: "source-map",
    devServer: {
        static: "./dist",
        // hot: true,
    }
}