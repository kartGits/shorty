import * as server from '../entries/pages/_layout.server.js';

export const index = 0;
export const component = async () => (await import('../entries/pages/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/_layout.svelte-b25fab7c.js';
export { server };
export const server_id = "src/routes/+layout.server.js";
export const imports = ["_app/immutable/components/pages/_layout.svelte-b25fab7c.js","_app/immutable/chunks/index-9251ea1f.js"];
export const stylesheets = [];
export const fonts = [];
