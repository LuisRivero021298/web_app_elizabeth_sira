import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home/Home.vue'
import Services from './views/Services/ServicesView.vue'
import Works from './views/Works/WorksView.vue'
import Login from './views/LogIn/LogInView.vue'
Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'Home',
			component: Home,
		},
		{
			path: '/services/:id_category?',
			name: 'Services',
			component: Services
		},
		{
			path: '/works/:id_service?',
			name: 'Works',
			component: Works,
			props: true
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		}
  	]
})
