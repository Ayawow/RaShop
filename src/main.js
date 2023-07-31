// import './assets/main.css'
import './styles/common.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { lazyPlugin } from './directives'
import { componentPlugin } from '@/components'


import App from './App.vue'
import router from './router'


const app = createApp(App)

app.use(componentPlugin)

app.use(createPinia())
app.use(router)

app.use(lazyPlugin)

app.mount('#app')
