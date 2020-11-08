import Vue from 'vue'
import VueRouter from 'vue-router'
import Landing from '../views/Landing.vue'
import Login from '../views/Login.vue'
import Settings from '../views/Settings.vue'
import Register from "../views/Register.vue"
import Flow from "../views/Flow.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Landing',
		component: Landing
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: '/flow',
		name: 'Flow',
		component: Flow
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings
	},


]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
