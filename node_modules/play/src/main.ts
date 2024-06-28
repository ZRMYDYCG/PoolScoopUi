import { createApp } from 'vue'
import App from './App.vue'

import Icon from '@pool-scoop/components/icon'
const ComponetsList = [
    Icon
]

const app = createApp(App)
ComponetsList.forEach(item => app.use(item))

app.mount('#app')
