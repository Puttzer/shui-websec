import Vue from 'vue'
import VueRouter from 'vue-router'
import Feed from '../views/Feed.vue'
import Login from '../views/Login.vue'
import Settings from '../views/Settings.vue'
import Register from "../views/Register.vue"

Vue.use(VueRouter)

const routes = [
	{
		path: '/',
		name: 'Feed',
		component: Feed
	},
	{
		path: '/login',
		name: 'Login',
		component: Login
	},
	{
		path: '/settings',
		name: 'Settings',
		component: Settings
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	}

]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
