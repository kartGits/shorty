import * as server from '../entries/pages/auth/_layout.server.js';

export const index = 2;
export const component = async () => (await import('../entries/pages/auth/_layout.svelte.js')).default;
export const file = '_app/immutable/components/pages/auth/_layout.svelte-e2a6fd01.js';
export { server };
export const server_id = "src/routes/auth/+layout.server.js";
export const imports = ["_app/immutable/components/pages/auth/_layout.svelte-e2a6fd01.js","_app/immutable/chunks/index-9251ea1f.js"];
export const stylesheets = [];
export const fonts = [];
