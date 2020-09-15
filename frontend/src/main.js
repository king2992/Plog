import Vue from 'vue'
import vuetify from './plugins/vuetify';
import App from './App.vue'
import router from './router'
import {library} from '@fortawesome/fontawesome-svg-core'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {far} from '@fortawesome/free-regular-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import {MdButton, MdContent, MdTabs} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import axios from 'axios'
import './../node_modules/roboto-font/css/fonts.css'

Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)

//fontawesome
library.add(fas)
library.add(far)

Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('v-chart', ECharts)

Vue.config.productionTip = false

Vue.prototype.$axios = axios;

new Vue({
    router,
    vuetify,
    render: h => h(App)
}).$mount('#app')
