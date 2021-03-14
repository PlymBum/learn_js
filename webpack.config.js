const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin=require('mini-css-extract-plugin')
const TerserWebpackPlugin=require('terser-webpack-plugin')
const CssMinimizerWebpackPlugin=require('css-minimizer-webpack-plugin')

const isDev=process.env.NODE_ENV==='development'
const isProd=!isDev

const optimization =()=>{
    const config= {
        splitChunks: {
            chunks: "all"
        }
    }
    if(isProd){
       config.minimizer=[
           new TerserWebpackPlugin(),
           new CssMinimizerWebpackPlugin()
       ]
    }
    return config
}

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: {
        main: "./index.js",
        analytics: './analytics.js'
    },
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        port: 666
    },
    optimization: optimization()
    ,
    resolve: {
        alias: {
            '@styles':path.resolve(__dirname,'src/styles')
        }
    },
    devtool: isDev ? 'source-map': false,
    plugins: [
        new HTMLWebpackPlugin({
            template: "./index.html"
        }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use:['file-loader']
            },
            {
                test: /\.ttf$/,
                use:['file-loader']
            }
        ]
    }
}