import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'

import {Icons} from 'vue-ydui/dist/lib.rem/icons'
import {Slider, SliderItem} from 'vue-ydui/dist/lib.rem/slider'
import {Tab, TabPanel} from 'vue-ydui/dist/lib.rem/tab'
import {Button, ButtonGroup} from 'vue-ydui/dist/lib.rem/button'
import {Popup} from 'vue-ydui/dist/lib.rem/popup'

import 'vue-ydui/dist/ydui.rem.css'
import 'vue-ydui/dist/ydui.base.css'

Vue.config.productionTip = false
fastclick.attach(document.body)

Vue.component(Icons.name, Icons)
Vue.component(Slider.name, Slider)
Vue.component(SliderItem.name, SliderItem)
Vue.component(Tab.name, Tab)
Vue.component(TabPanel.name, TabPanel)
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)
Vue.component(Popup.name, Popup)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	render: h => h(App)
})
