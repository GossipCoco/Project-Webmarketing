import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Vuex from 'vuex'


const app = createApp(App)

app.use(Vuex)
app.use(router)
app.use(VueAxios, axios)
app.mount('#app')
