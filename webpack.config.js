const path = require('path');   

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),       //__dirname - path to current location
        filename: 'bundle.js'
    }
};