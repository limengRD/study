import Vue from 'vue'

import app from './components/app.vue'

const vm = new Vue({
    el: "#app",
    render: c => c(app)
})