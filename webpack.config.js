var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    entry: [
        'react-hot-loader/patch',
        'webpack-hot-middleware/client?reload=true',
        path.resolve(__dirname, 'client/index')
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: '/build/'
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js|jsx)?$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }],
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]',
                            outputPath: 'assets/images/'
                        }
                    }
                ]
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ]
};
