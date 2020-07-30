const path = require("path")
const HtmlWebPackPlugin = require("html-webpack-plugin")

module.exports = {
    mode : 'development',

    entry : {
        main : "./src/index.js"
    },
    output : {
        path : path.resolve(__dirname, './bundle/'),
        filename : "[name].bundle.js"
    },
    module :{
        rules : [
            {
                test : /\.html$/,
                use : [
                    {
                        loader : "html-loader",
                        options : { minimize : true}
                    }
                ]
            }
        ]
    },
    plugins : [
        new HtmlWebPackPlugin({
            template : "./public/index.html",
            filename : "index.bundle.html"
        })
    ]
}