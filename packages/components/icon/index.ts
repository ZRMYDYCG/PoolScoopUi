/**
 * 用于整合组件统一导出
 * */ 
import { withInstall } from '@pool-scoop/utils/with-install'
import _Icon from './src/icon.vue'

const Icon = withInstall(_Icon)

export default Icon
export * from './src/icon'

// 这里添加的类型 可以在模板中被解析
declare module 'vue' {
    export interface GlobalComponents {  // 接口可以自动合并
        PIcon: typeof Icon
    }
}
