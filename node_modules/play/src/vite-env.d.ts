/// <reference types="vite/client" />

/**
 * 为 .vue 文件做类型提示
 * */ 
declare module '*.vue' {
    import type { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}