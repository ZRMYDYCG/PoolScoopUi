import DefaultTheme from 'vitepress/theme';

import PIcon from '@pool-scoop/components/icon'
import '@pool-scoop/theme-chalk/src/index.scss'

export default {
    ...DefaultTheme,
    enhanceApp({ app }) { // 在 vitepress 中注册全局组件
        app.use(PIcon)
    }
}