import * as universal from '../entries/pages/contact/_page.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/contact/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/contact/+page.ts";
export const imports = ["_app/immutable/nodes/3.B7n08ySH.js","_app/immutable/chunks/scheduler.BJ7TQcqY.js","_app/immutable/chunks/index.B9XU1y6w.js"];
export const stylesheets = [];
export const fonts = [];
