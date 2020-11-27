const path = require('path');   

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),       //__dirname - path to current location
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};

//babel-loader extension which teaches webpack how to run babel
//babel-core used to work with webpack