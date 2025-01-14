const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'build/js'),
		filename: '[name].min.js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
				},
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	optimization: {
		minimizer: [
			new TerserPlugin({
				parallel: true, // parallel minify (for optimization)
				extractComments: false, // disable comment
				terserOptions: {
					mangle: true, // minify var names
					compress: {
						drop_console: true, // delete console.log
					},
					format: {
						comments: false, // disable comment
					},
				},
			}),
		],
		splitChunks: {
			cacheGroups: {
				gsap: {
					test: /[\\/]node_modules[\\/]gsap[\\/]/,
					name: 'gsap',
					chunks: 'all',
				},
				swiper: {
					test: /[\\/]node_modules[\\/]swiper[\\/]/,
					name: 'swiper',
					chunks: 'all',
				},
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
					chunks: 'all',
					priority: -10,
				},
			},
		},
	},
	devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
	mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
	// mode: 'production',
};
