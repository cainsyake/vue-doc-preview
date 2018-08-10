# vue-doc-preview

## 使用
首先, 通过yarn或npm等包管理工具添加这个包.
```
yarn add vue-doc-preview
or
npm i vue-doc-preview --save
```
然后, 在你的.vue文件中引入此组件.
```javascript
<template>
  <VueDocPreview :value="docValue" :type="docType" />
</template>

<script>
import VueDocPreview from 'vue-doc-preview'
export default {
  components: {
    VueDocPreview
  }
}
</script>
```
你也可以打开src目录下的demo.vue来学习如何使用这个组件，但是它(demo.vue)是直接从源代码中引入这个组件的（并非从NPM上引入）.

## Config

属性 | 说明 | 类型| 默认值
:-------: | -------  |  :-------:  |  :-------:
value | 文档内容或Office文档的url | String | ''
type | 文档类型 | String | 'md'
height | 当height > 100 时，它意味着组件的将使用绝对高度(px), 否则组件的高度将为相对高度(%)| Number | 90

### 支持的文档类型
* markdown: md
* office: docx, pptx, xlsx
* text: txt
* code: js, html, css, java, json, yml, ini, gitignore, bat


## 开发

### 开发环境编译（开启热更新）
```
yarn run serve
```

### 生产环境编译
```
yarn run build-lib
```

### 代码检查
```
yarn run lint
```
Markdown预览使用highlight.js使得代码展示出不同的颜色，你可以修改src/lib/highlight.js来支持更多编程语言的代码高亮（但会使编译出来的文件更庞大）。

## 许可证
MIT
