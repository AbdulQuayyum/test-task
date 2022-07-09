import { createApp } from 'vue'
import App from './App.vue'
import router from './Router/Router'
import store from './Store/Store'

createApp(App).use(store).use(router).mount('#app')
