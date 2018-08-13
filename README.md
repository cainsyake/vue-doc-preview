# vue-doc-preview
A vue document preview component, this component will display the contents of the document on the page.

English Readme | [中文说明书](https://github.com/cainsyake/vue-doc-preview/blob/master/README-CN.md)

## Use
First, add this package from yarn or npm.
```
yarn add vue-doc-preview
or
npm i vue-doc-preview --save
```
Then, import this component in .vue file.
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
You also can open demo.vue(which in src) to learn how to use this component, but it is introduced directly to the component from the source code.

## Config

prop | description | type| default
:-------: | -------  |  :-------:  |  :-------:
value | document contents or office document's url | String | ''
type | document type (Now supported types are 'markdown'、'office'、'text' of 'code') | String | 'md'
language | code language (It takes effect only when the type is 'code') | String | ''
height | when height > 100 it means that the component's height is hight+'px', otherwise it means that the component's height is hight+'%'| Number | 90

### Supported document types and their suffix(language)
* markdown: md
* office: docx, pptx, xlsx
* text: txt
* code: javascript(js)、html、css、java、json、typescript(ts)、cpp、xml、bash、less、nginx、php、powershell、python、scss、shell、sql、yaml、ini

## Development

### Compiles and hot-reloads for development
```
yarn run serve
```

### Compiles and minifies for production
```
yarn run build-lib
```

### Lints and fixes files
```
yarn run lint
```
Markdown preview use highlight.js to make code show different colors, you are able to modify src/lib/highlight.js to support more language with code highlight.


## License
MIT
