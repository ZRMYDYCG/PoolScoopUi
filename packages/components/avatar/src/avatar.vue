<template>
    <span :class="avatarClass" :style="sizeStyle">
        <img v-if="(src || srcSet) && !hasLoadError" :src="src" :alt="alt" :srcset="srcset" :style="fitStyle"
            @error="handleError" />
        <el-icon v-else-if="icon">
            <component :is="icon"></component>
        </el-icon>
        <slot v-else></slot>
    </span>
</template>

<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { createNamespace } from '@pool-scoop/utils/create'
import { avatarProps, avatarEmits } from './avatar'

defineOptions({
    name: 'el-avatar'
})

const props = defineProps(avatarProps)
const emits = defineEmits(avatarEmits)

const bem = createNamespace('avatar')

const hasLoadError = ref(false)

const avatarClass = computed(() => {
    const { size, icon, shape } = props
    const classList = [bem.b()]
    if (size) classList.push(bem.m(size))
    if (icon) classList.push(bem.m('icon'))
    if (shape) classList.push(bem.m(shape))
    return classList
})

// 如果src发生变化，需要将hasLoadError重置为false。
watch((
    () => props.src,
    () => {
        handleError.value = false
    }
))

function handleError(e: Event) {
    hasLoadError.value = true
    emit('error', e)
}
</script>

<style lang="scss"></style>
