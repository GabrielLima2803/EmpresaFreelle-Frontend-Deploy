import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './plugins/axios';

import '@mdi/font/css/materialdesignicons.min.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
