import { withInstall } from '@pool-scoop/utils/with-install'
import _Avatar from './src/avatar.vue'

const Avatar = withInstall(_Avatar)

export default Avatar
export * from './src/avatar.vue'

declare module 'vue' {
    export interface GlobalComponents {
        PAvatar: typeof Avatar
    }
}
