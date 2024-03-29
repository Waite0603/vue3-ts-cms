import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
// pinia 持久化存储
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

import ElementPlus from 'element-plus'
import JsonExcel from 'vue-json-excel3'
import 'element-plus/dist/index.css'
import './assets/css/index.css'

import navbarView from './views/layout/navbarView.vue'

import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
const pinia = createPinia()

// 全局注册组件
app.component('navbarView', navbarView)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

pinia.use(piniaPluginPersistedstate)

app.use(router)
app.use(pinia)
app.use(ElementPlus)
app.component('downloadExcel', JsonExcel)
app.mount('#app')
