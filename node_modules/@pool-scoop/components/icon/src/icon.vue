<template>
    <i :class="bem.b()" :style="style">
        <slot></slot>
    </i>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { createNamespace } from '@pool-scoop/utils/create';
import { iconProps } from './icon';

defineOptions({
    name: 'p-icon'
})

const bem = createNamespace('icon')
const props = defineProps(iconProps)

const style = computed(() => {
    if(!props.size && !props.color) return {}
    return {
        ...(props.size ? {"font-size": props.size + "px"} : {}),
        ...(props.color ? {color: props.color} : {})
    }
})
</script>

<style lang="scss" scoped></style>