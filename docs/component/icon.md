# Icon 图标

p-ui 推荐使用 [xicon](https://www.xicons.org/#/) 作为组件库

```bash
$ pnpm install @vicons/ionicons5
```

## 使用图标

如果你想像用例一样直接使用, 你需要全局注册组件, 才能在项目里使用。

<script setup lang="ts">
import { AddCircle } from '@vicons/ionicons5' 
</script>
<el-icon color="red" size="20">
    <AddCircle></AddCircle>
</el-icon>
<el-icon color="red" size="25">
    <AddCircle></AddCircle>
</el-icon>
<el-icon color="red" size="30">
    <AddCircle></AddCircle>
</el-icon>
<el-icon color="red" size="35">
    <AddCircle></AddCircle>
</el-icon>

```html
<script setup lang="ts">
  import { AddCircle } from "@vicons/ionicons5";
</script>

<template>
  <el-icon>
    <AddCircle />
  </el-icon>
</template>
```

## API

### Icon Props

| 名称  | 类型             | 默认值 | 说明     |
| ----- | ---------------- | ------ | -------- |
| color | string           | null   | 图标颜色 |
| size  | number \| string | null   | 图片大小 |
