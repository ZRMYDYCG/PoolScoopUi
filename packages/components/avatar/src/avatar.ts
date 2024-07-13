import { ExtractPropTypes, PropType } from "vue"

export const avatarProps = {
    /**
     * @description 使用 shape 和 size 属性来设置 Avatar 的形状和大小。
    */
   size: {
    type: [Number, String] as PropType<number | string>,
    default: '',
   },
    shape: {
        type: String,
        default: 'circle',
        validator: function(value: string): boolean {
            return ['circle', 'square'].indexOf(value) !== -1
        }
    },
    /**
     * @description 支持使用图片，图标或者文字作为 Avatar。
    */
    icon: {
        type: String,
    },
    src: {
        type: String,
        default: ''
    },
    /**
     * @description 当使用图片作为用户头像时，设置该图片如何在容器中展示。与 object-fit 属性一致
    */
    fit: {
        type: String,
        default: 'cover',
        validator: (value: string) => ['fill', 'contain', 'cover', 'none', 'scale-down'].includes(value),
    },
    /**
     * @description native attribute `alt` of image avatar.
    */
   alt: String,
    /**
     * @description native attribute srcset of image avatar.
     * srcset 是一个 HTML 的属性，它允许你为图片元素 <image> 指定多个源文件，这些文件可以是不同尺寸或分辨率的图片。这使得浏览器能够根据当前设备显示的需要选择最合适的图片来加载，从而提高页面的加载速度和性能。
     * */
    srcSet: String
} as const


export type AvatarProps = ExtractPropTypes<typeof avatarProps>

export const avatarEmits = {
    error: (evt: Event) => evt instanceof Event // 类型守卫函数，用于运行时验证传入的事件对象evt是否是Event的一个实例
}

export type AvatarEmits = typeof avatarEmits