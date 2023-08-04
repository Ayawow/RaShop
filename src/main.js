// import './assets/main.css'
import '@/styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import { componentPlugin } from '@/components'

import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'





import App from './App.vue'
import router from './router'


const app = createApp(App)

const pinia = createPinia()
//注册持久化插件    
pinia.use(piniaPluginPersistedstate)
app.use(pinia)
app.use(componentPlugin)


app.use(router)

app.use(lazyPlugin)

app.mount('#app')
