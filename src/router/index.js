import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const Index = (resolve) => {
	import ('components/index/index').then((module) => {
		resolve(module)
	})
}

const Circle = (resolve) => {
	import ('components/circle/circle').then((module) => {
		resolve(module)
	})
}

const Release = (resolve) => {
	import ('components/release/release').then((module) => {
		resolve(module)
	})
}

const Chat = (resolve) => {
	import ('components/chat/chat').then((module) => {
		resolve(module)
	})
}

const User = (resolve) => {
	import ('components/user/user').then((module) => {
		resolve(module)
	})
}

const Details = (resolve) => {
	import ('components/details/details').then((module) => {
		resolve(module)
	})
}

export default new Router({
	routes: [
		{
			path: '/',
			name: 'index',
			component: Index
		},
		{
			path: '/index',
      		component: Index,
		},
		{
			path: '/circle',
      		component: Circle,
		},
		{
			path: '/release',
      		component: Release,
		},
		{
			path: '/chat',
      		component: Chat,
		},
		{
			path: '/user',
      		component: User,
		},
		{
			path: '/details',
      		component: Details,
		}
	]
})
