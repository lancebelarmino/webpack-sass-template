# Webpack Sass Template

A basic HTML, Sass, and Javascript template bundled using Webpack.

## Setup

```javascript
// Install dependencies
npm install

// Run live server
npm run dev

// Build optimized output
npm run build
```

## Add more pages

1. Create a new folder in `src/pages/`
2. Create `index.html` and `index.js`
3. Add the folder in `webpack.common.js`

```javascript
// ...

const pages = ['home', 'new-page'];

// ...
```

## Import fonts inside head

1. Open `generateHtmlPages.js` in `src/utils`
2. Add your code inside `font`

```javascript
// ...

function createPage(title) {
	return new HtmlWebpackPlugin({
		// ...
		templateParameters: {
			// ...
			font: `
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;700&display=swap" rel="stylesheet">
      `,
		},
	});
}

// ...
```

3. Add `<%= font %>` inside your file's `<head>`

```html
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	<title>Home</title>
	<%= font %>
</head>
```
