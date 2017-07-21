const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'classical-languages.js',
        path: path.resolve(__dirname, 'dist'),
        library: 'classicalLanguages',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    externals: [
        // List any external dependencies
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            }
        ]
    },
    resolve: {
        extensions: [ '.js', '.json' ]
    }
};
