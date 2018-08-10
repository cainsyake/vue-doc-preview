# vue-doc-preview

## Use This Component
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
