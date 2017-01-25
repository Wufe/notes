var webpack = require( 'webpack' );
var path = require( 'path' );

const prod = process.env.NODE_ENV == "production"

module.exports = {
    context: __dirname,
    devtool: prod ? null : "source-map-loader",
    resolve: {
        extensions: [ "", ".webpack.js", ".web.js", ".jsx", ".js" ]
    },
    entry: {
        main: "./index.jsx"
    },
    output: {
        publicPath: "/",
        path: path.resolve( path.join( 'build', 'resources', 'assets' ) ),
        filename: "javascript/[name].bundle.js",
        chunkFilename: 'javascript/[name].chunk.js'
    },
    target: 'web',
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            {
                test: /\.scss$/,
                loader: 'style!css!sass!'
            },
            {
                test: /\.jpg$/,
                loader: 'url-loader?mimetype=image/jpeg&limit=100000&name=images/img-[name].[ext]'
            }
        ]
    },
    plugins: prod ?
        [
            new webpack.optimize.DedupePlugin(),
            new webpack.optimize.OccurrenceOrderPlugin(),
            new webpack.optimize.UglifyJsPlugin({
                debug: false,
                minimize: true,
                sourceMap: false,
                output: {
                    comments: false
                },
                compressor: {
                    warnings: false
                },
                mangle: false
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    'NODE_ENV': JSON.stringify( 'production' )
                }
            })
        ]
    : [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoErrorsPlugin()
    ]
};
