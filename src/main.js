import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'
import 'jquery/dist/jquery'
import 'popper.js/dist/umd/popper.min.js'
import 'popper.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'


import './assets/css/Layout.css'
const app = createApp(App)

app.use(Vuex)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
