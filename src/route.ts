import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import About from './views/About.vue';
import Blog from './views/Blog.vue';
import NotFound from './views/NotFound.vue';

export const router = createRouter({
	history: createWebHistory(),
	routes: [
		{ path: '/', component: Home },
		{ path: '/about', component: About },
		{ path: '/blog', component: Blog, name: 'blogHomePage' },
		{ path: '/blog/page/1/', redirect: to => '/blog' },
		{ path: '/blog/page/:pageNumber/', component: Blog, name: 'blog' },
		{ path: '/:pathMatch(.*)*', component: NotFound}
	]
})