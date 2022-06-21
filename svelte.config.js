import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		alias: {
			$components: "/src/lib/components",
			$styles: "/src/lib/styles",
			$scripts: "/src/lib/scripts"
		},
		prerender: {
			default: true,
		}
	}
};

export default config;
