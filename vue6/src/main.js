import Vue from 'vue'

import app from './components/app.vue'

import mintUI from 'mint-ui'

Vue.use(mintUI)

import 'mint-ui/lib/style.css'

import '../lib/mui/css/mui.min.css'

import '../lib/mui/css/icons-extra.css'

import axios from 'axios'

Vue.prototype.$http = axios.create({
    baseURL: 'http://39.106.32.91:3000/'
})

import VueRouter from 'vue-router'

Vue.use(VueRouter)

import router from './router'

const vm = new Vue({
    el: "#app",
    render: c => c(app),
    router
})