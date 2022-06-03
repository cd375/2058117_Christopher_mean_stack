module.exports = {
    entry: './cart_fun',
    output: {
        filename: './dist/bundle.js'
    },
    resolve:{
        extensions:['.ts']
    },
    module: {
        rulls: [
            {
                test: /\.ts$/,
                loader: 'ts-loader'
            },
            {
                test: /\.ts$/,
                enforce:'pre',
                loader: 'tslint-loader'
            }
        ]
    }
};