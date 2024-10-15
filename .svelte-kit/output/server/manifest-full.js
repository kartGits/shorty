export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		entry: {"file":"_app/immutable/start-f3b73707.js","imports":["_app/immutable/start-f3b73707.js","_app/immutable/chunks/index-9251ea1f.js","_app/immutable/chunks/singletons-56c82678.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/5.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 3 },
				endpoint: null
			},
			{
				id: "/auth/login",
				pattern: /^\/auth\/login\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/auth/logout",
				pattern: /^\/auth\/logout\/?$/,
				params: [],
				page: null,
				endpoint: () => import('./entries/endpoints/auth/logout/_server.js')
			},
			{
				id: "/auth/register",
				pattern: /^\/auth\/register\/?$/,
				params: [],
				page: { layouts: [0,2], errors: [1,,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/[shortSlug]",
				pattern: /^\/([^/]+?)\/?$/,
				params: [{"name":"shortSlug","optional":false,"rest":false,"chained":false}],
				page: null,
				endpoint: () => import('./entries/endpoints/_shortSlug_/_server.js')
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
