// var path = require('C:\\Users\\cdfir\\Cart_Test\\src\\js_ts');

module.exports = {
    mode: 'development',
    entry: [
        './src/js_ts/shop_page.ts',
        './src/js_ts/cart_man'
    ],

    output: {
        filename: './dist/bundle.js'
    },
    devtool:'inline-source-map',
    resolve: {
       // root: path.resolve('./js_ts'),
        extensions:['.ts']
    },
    
    module: {
        rules: [
            {
                test:/\.ts$/,
                //exclude: /node_modules/,
                loader:'ts-loader',
                //include: /src/
                   // path.resolve(__dirname, "js_ts")
                  
                  
            },
            {
                test:/\.ts$/,
                enforce:'pre',
                loader:'tslint-loader'
            }
        ]
    }
}