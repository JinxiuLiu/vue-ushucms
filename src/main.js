import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import YDUI from 'vue-ydui'

import 'vue-ydui/dist/ydui.rem.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.use(YDUI)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
