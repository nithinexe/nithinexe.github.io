import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    // Consult https://github.com/sveltejs/svelte-preprocess
    // for more information about preprocessors
    preprocess: preprocess(),

    kit: {
        adapter: adapter(),
        inlineStyleThreshold: 10240,
        router: false,
        hydrate: false,

        // hydrate the <div id="svelte"> element in src/app.html
        target: '#svelte',
        paths: {
            base:process.env.NODE_ENV === 'production' ? '/nithinexe.github.io' : '', // replace '/my-app/' with your base URL
        },

    }
};

export default config;
