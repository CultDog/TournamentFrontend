const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = (env) => {
	return {
		mode: env.mode ?? 'development',
		entry: path.resolve(__dirname, 'src', 'index.jsx'),
		output: {
			path: path.resolve(__dirname, 'build'),
			publicPath: '/',
			filename: 'js/bundle.[contenthash].js',
			clean: true
		},
		plugins: [
			new HtmlWebpackPlugin({
				template: path.resolve(__dirname, 'src', 'index.html')
			}),
			new webpack.ProgressPlugin(),
			new MiniCssExtractPlugin({
				filename: 'css/[name].[contenthash].css'
			}),
			new webpack.ProvidePlugin({
				"React": "react"
			})
		],
		module: {
			rules: [
				{
					test: /\.s[ac]ss$/i,
					use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
				},
				{
					test: /\.jsx?$/,
					exclude: /(node_modules)/,
					loader: "babel-loader",
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react'
						]
					}
				},
				{
					test: /\.(png|svg|jpg|jpeg|gif)$/i,
					type: 'asset/resource',
					generator: {
						publicPath: '/img/',
						outputPath: 'img/',
					}
				},
			]
		},
		devServer: {
			static: {
				directory: path.join(__dirname, 'build')
			},
			compress: true,
			port: 9000,
			watchFiles: [
				'public/**/*.html',
				'src/**/*.scss',
				'src/**/*.css',
				'src/**/*.js'
			],
			open: false,
			historyApiFallback: true
		},
		resolve: {
			alias: {
				'@src': path.resolve(__dirname, 'src'),
				'@components': path.resolve(__dirname, 'src', 'components'),
				'@node_modules': path.resolve(__dirname, 'node_modules')
			}
		}
	}
}