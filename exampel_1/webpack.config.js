module.exports = {
    context: __dirname,
    entry: "./index.js",
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                }
            }
        ]
    },
    devServer: {
        port: 8000
    },
    output: {
        path: __dirname,
        filename: "./bundle.js"
    }
}