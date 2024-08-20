import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.B_1F0Wat.js","_app/immutable/chunks/scheduler.BJ7TQcqY.js","_app/immutable/chunks/index.B9XU1y6w.js","_app/immutable/chunks/sectionStore.DpCDUfLZ.js","_app/immutable/chunks/index.DNySnZDx.js"];
export const stylesheets = ["_app/immutable/assets/2.ewrhO3sp.css"];
export const fonts = [];
