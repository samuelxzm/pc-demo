import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
// import 'element-plus/lib/theme-chalk/index.css';
import './assets/style/cusTheme.scss'
import axios from './utils/require';
import VueAxios from 'vue-axios';


const app = createApp(App)
app.use(store).use(router).use(VueAxios, axios).use(ElementPlus)
app.mount('#app')
