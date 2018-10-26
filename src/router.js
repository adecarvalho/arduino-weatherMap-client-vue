import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import WeatherMap from './views/WeatherMap.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home
		},
		{
			path: '/weathermap',
			name: 'weather-map',
			component: WeatherMap
		}
	]
})
