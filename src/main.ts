import { createApp } from 'vue'
import App from './App.vue'
import Preview from '../lib/index'

createApp(App)
.use(Preview)
.mount('#app')
