const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: {
        index: './src/index.js',

      }, 
    plugins: [
        new HtmlWebpackPlugin({
          template: "./src/template.html",
        }),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: 'index.bundle.js',
        path: path.resolve(__dirname, 'desktop'),
        clean: true
    },
    module: {
        rules: [
          {
            test: /\.css$/,
            use: [
            // Order is last to first
                'style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        importLoaders: 1
                    }
                }, 
                'postcss-loader'
            ],
          },
        ],
      }

};
