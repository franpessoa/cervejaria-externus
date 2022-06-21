import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: "/src/lib/components",
			$styles: "/src/lib/styles",
			$scripts: "/src/lib/scripts"
		}
	}
};

export default config;
