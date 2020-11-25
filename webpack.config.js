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
        }]
    },
    devtool: 'cheap-module-eval-source-map'
};

//babel-loader extension which teaches webpack how to run babel
//babel-core used to work with webpack