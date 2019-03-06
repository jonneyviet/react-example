const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
const webpack = require('webpack'); //to access built-in plugins
const path = require('path');
module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/dist'
    },
    module: {
        rules: [{
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss)$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                            localIdentName: "[local]___[hash:base64:5]"
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: true,
                            modules: true,
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'file-loader',
                    options: {
                        
                    }
                }]
            }
        ]
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['*', '.js', '.jsx', 'scss', 'css'],
        alias:{
            reducer: path.resolve(__dirname, 'src/reducer/index.js'),
            store: path.resolve(__dirname, 'src/storeConfig.jsx'),
            action: path.resolve(__dirname, 'src/actions/index.js'),
            styles: path.resolve(__dirname, 'src/App.scss')
        }
    },
    output: {
        path: __dirname + '/dist',
        publicPath: '/',
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist',
        hot: true,
        historyApiFallback: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]
};