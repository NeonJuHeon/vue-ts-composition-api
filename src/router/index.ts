import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/HomeView.vue'),
	},
	{
		path: '/simple_counter',
		name: 'SimpleCounter',
		component: () => import(/* webpackChunkName: "about" */ '../views/SimpleCounter.vue'),
	},
	{
		path: '/todo',
		name: 'TodoList',
		component: () => import(/* webpackChunkName: "about" */ '../views/TodoList.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
