import './assets/main.css'

import { createApp } from 'vue'
import Toast from "vue-toastification";
import { createPinia } from 'pinia'
import "vue-toastification/dist/index.css";
import App from './App.vue'

const app = createApp(App)
const pinia = createPinia()
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true
});
app.use(pinia)
app.mount('#app')
