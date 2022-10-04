import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function createPage(title) {
	return new HtmlWebpackPlugin({
		filename: title === 'home' ? `index.html` : `${title}.html`,
		template: `./src/pages/${title}/index.html`,
		minify: false,
		chunks: [title === 'home' ? `index` : `${title}`],
		templateParameters: {
			font: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
      `,
		},
	});
}

export default function generateHtmlPages(pages) {
	const renderedPages = [];

	pages.forEach(page => renderedPages.push(createPage(page)));

	return renderedPages;
}
