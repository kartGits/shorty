export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5')];

export const server_loads = [0,2];

export const dictionary = {
	"/": [~3],
	"/auth/login": [4,[2]],
	"/auth/register": [5,[2]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};