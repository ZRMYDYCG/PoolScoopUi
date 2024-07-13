import { createApp } from 'vue'
import App from './App.vue'
import '@pool-scoop/theme-chalk/src/index.scss'

import Icon from '@pool-scoop/components/icon'
import Avatar from '@pool-scoop/components/avatar'

const ComponetsList = [
    Icon,
    Avatar
]

const app = createApp(App)
ComponetsList.forEach(item => app.use(item))

app.mount('#app')
