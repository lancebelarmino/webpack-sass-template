export default function generateEntryPoints(pages, modules = []) {
	const paths = {};
	const hasSharedModules = modules.length !== 0;

	pages.forEach(
		page =>
			(paths[page === 'home' ? 'index' : page] = {
				import: `./src/pages/${page}/index.js`,
				...(hasSharedModules && { dependOn: 'shared' }),
			})
	);

	if (hasSharedModules) {
		paths.shared = [...modules];
	}

	return paths;
}
