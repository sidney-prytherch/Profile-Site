export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","favicon.png","github.svg","menu.svg","name-animation-old.gif","name-animation.gif","name.png","robots.txt","self-portrait.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".gif":"image/gif",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.CyChJuyp.js","app":"_app/immutable/entry/app.DdQv5wx7.js","imports":["_app/immutable/entry/start.CyChJuyp.js","_app/immutable/chunks/entry.C7hZ7kjv.js","_app/immutable/chunks/scheduler.BJ7TQcqY.js","_app/immutable/chunks/index.DNySnZDx.js","_app/immutable/entry/app.DdQv5wx7.js","_app/immutable/chunks/scheduler.BJ7TQcqY.js","_app/immutable/chunks/index.B9XU1y6w.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
