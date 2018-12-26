const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const CssExtract = require('mini-css-extract-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: {
		index: [
			'../polyfills.js',
			'./js/index.js'
		]
	},
	resolve: {
		modules: [path.resolve(__dirname, 'src/js'), 'node_modules'],
		extensions: ['.js', '.json', '.jsx', '.scss']
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				}
			},
			{
				test: /\.s*css$/,
				use: [
					CssExtract.loader,
					// 'style-loader',
					'css-loader',
					'sass-loader'
				]
			},
			{
				test: /\.html$/,
				use: {
					loader: 'html-loader',
					options: {
						minimize: true
					}
				}
			}
		]
	},
	externals: {
		react: 'React',
		'react-dom': 'ReactDOM'
	},
	plugins: [
		new CssExtract({
			filename: "[name].css",
			chunkFilename: "[id].css"
		}),
		new HtmlPlugin({
			template: './index.html',
			filename: './index.html'
		}),
	],
	devtool: 'eval-source-map'
}
