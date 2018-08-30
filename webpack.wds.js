const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const GitRevisionPlugin = require('git-revision-webpack-plugin')
let gitRevisionPlugin = new GitRevisionPlugin({
    lightweightTags: true
})

module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './assets/js',
        compress: true,
        port: 8081,
        historyApiFallback: true,
        https: true
    },
    context: path.join(__dirname, './assets/js'),
    entry: {
        polls: './polls-app.js',
        'studip-cliqr': './studip-app.js'
    },
    output: {
        path: path.join(__dirname, './static'),
        chunkFilename: '[name].chunk.js',
        filename: '[name].js',
        publicPath: 'https://localhost:8081/'
    },
    module: {
        rules: [
            {
                test: /assets\/scss\/.+\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /assets\/js\/.+\.scss$/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            url: false,
                            importLoaders: 1
                        }
                    },
                    { loader: 'postcss-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: true
                    }
                }
            },
            {
                test: /\.hbs$/,
                use: {
                    loader: 'handlebars-loader',
                    options: {
                        partialDirs: path.join(__dirname, './assets/hbs'),
                        helperDirs: [path.join(__dirname, './assets/js/helpers')]
                    }
                }
            }
        ]
    },
    resolve: {
        alias: {
            jquery: path.join(__dirname, './assets/js/jquery')
        },
        extensions: ['.js'],
        modules: [path.resolve('./assets/js'), 'node_modules']
    },
    plugins: [
        gitRevisionPlugin,
        new webpack.DefinePlugin({
            VERSION: JSON.stringify(gitRevisionPlugin.version()),
            COMMITHASH: JSON.stringify(gitRevisionPlugin.commithash())
        })
    ]
}
