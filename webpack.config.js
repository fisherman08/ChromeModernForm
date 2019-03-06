module.exports = {
    mode: 'production',
    entry: {
        "background": "./src/background.js",
        //"addressModernizer": "./src/addressModernizer.js",
        "content": "./src/content.js"
    },
    output: {
        path: __dirname +'/product/js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.js'],
    },
    module: {}
};