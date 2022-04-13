import Vue from 'vue'
import App from './App'
import api from './utils/request/api.js'
import config from './utils/request/config.js'
import Tools from './utils/Tools.js'
import * as dd from 'dingtalk-jsapi';

let WebIM = require("utils/request/config")["default"];

Vue.config.productionTip = false
Vue.prototype.$api = api
Vue.prototype.$config = config
Vue.prototype.$Tools = Tools
Vue.prototype.$im = WebIM;
Vue.prototype.$dd = dd;

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
