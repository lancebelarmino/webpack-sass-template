import path from 'path';
import { fileURLToPath } from 'url';
import generateHtmlPages from './src/utils/generateHtmlPages.js';
import generateEntryPoints from './src/utils/generateEntryPoints.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const pages = ['home'];
const htmlFiles = generateHtmlPages(pages);
const jsFiles = generateEntryPoints(pages);

const common = {
	entry: jsFiles,
	output: {
		path: path.resolve(__dirname, './dist'),
		filename: pathName =>
			pathName.chunk.name === 'runtime'
				? 'static/chunks/[name].js'
				: 'static/chunks/pages/[name].js',
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.(jpg|jpeg|webp|png|svg|ico|gif)$/,
				type: 'asset/resource',
				generator: {
					filename: 'assets/images/[name][ext]',
				},
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
				generator: {
					filename: 'assets/fonts/[name][ext]',
				},
			},
		],
	},
	resolve: {
		extensions: ['.js', '.scss'],
		alias: {
			'@assets': path.resolve(__dirname, './src/assets'),
			'@data': path.resolve(__dirname, './src/data'),
			'@helpers': path.resolve(__dirname, './src/helpers'),
			'@scss': path.resolve(__dirname, './src/scss'),
			'@utils': path.resolve(__dirname, './src/utils'),
		},
	},
	plugins: htmlFiles,
};

export default common;
