const path = require('path');

const entryConfig = {
    entry: path.resolve(__dirname, './src/index.ts'),
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dev'),
        library: 'Puke',
        libraryExport: 'default',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
};

module.exports = entryConfig;