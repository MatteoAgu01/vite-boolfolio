import { createRouter, createWebHistory } from 'vue-router';
import home from './pages/pageHome.vue' ;
import projects from './pages/pageProjects.vue';
const router = createRouter(
	{
		history:createWebHistory(),
		routes:[
			{
				path:'/home',
				name:'home',
				component: home,
			},
			{
				path:'/projects',
				name:'projects',
				component: projects,
			},
		]
	}
);
export { router };