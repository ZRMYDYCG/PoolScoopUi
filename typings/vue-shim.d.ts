/**
 * 为 .vue 文件做类型提示（多包依赖, 公共类型）
 * */ 
declare module '*.vue' {
    import type { DefineComponent } from "vue"
    const component: DefineComponent<{}, {}, any>
    export default component
}