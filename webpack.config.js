module.exports = {
    mode: 'production',
    entry: {
        "background": "./src/background.ts",
        "content": "./src/content.ts"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    output: {
        path: __dirname + '/product/js',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['.ts', '.js'],
    },
};
