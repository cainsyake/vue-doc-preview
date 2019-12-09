# vue-doc-preview
A vue document preview component, this component will display the contents of the document on the page.

English Readme | [中文说明书](https://github.com/cainsyake/vue-doc-preview/blob/master/README-CN.md)

[Live Demo](http://vdp.cainsyake.com/)

## Use
### import
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

### Example
```html
<VueDocPreview value="# VueDocPreview\n**Markdown Test**```" type="markdown" />
<VueDocPreview value="newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx" type="office" />
<VueDocPreview value="Normal Text" type="text" />
<VueDocPreview value="function () {\n  console.log('VueDocPreview')\n}" type="code" code="javascript"/>
```

## Config

prop | description | type| default
:-------: | -------  |  :-------:  |  :-------:
value | document contents or office document's url | String | ''
type | document type (Now supported types are 'markdown'、'office'、'text' of 'code') | String | 'md'
language | code language (It takes effect only when the type is 'code') | String | ''
height | when height > 100 it means that the component's height is hight+'px', otherwise it means that the component's height is hight+'%'| Number | 90
mdStyle | markdown view custom style (It takes effect only when the type is 'markdown' or 'code') | Object | null
textStyle | text view custom style (It takes effect only when the type is 'text') | Object | null
url | document's url, but it only takes effect only when we don't set value (this property can also be used in office documents)| String | ''
requestConfig | [axios config](https://github.com/axios/axios#request-config) | Object | {}

### Supported document types and their suffix(language)
* markdown: md
* office: docx, pptx, xlsx
* text: txt
* code: javascript(js)、html、css、java、json、typescript(ts)、cpp、xml、bash、less、nginx、php、powershell、python、scss、shell、sql、yaml、ini

### Custom style
Now, we can customize markdown view style by setting mdStyle in props.

These tags can be customized: pre, code, ul, ol, li, hr, blockquote, img, a, table, tr, th, td.

In this **example** we will customize the style of code block in markdown view.
```javascript
// template
<VueDocPreview value="# VueDocPreview" type="markdown" :mdStyle="mdStyle" />

// script
export default {
  data: function() {
    return {
      mdStyle: {
        pre: {
          'background-color': 'rgb(187, 255, 255)'
        },
        code: {
          'background-color': 'rgb(187, 255, 255)',
          'line-height': '20px'
        }
      }
    }
  }
}
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

### Run test for development
```
yarn run test
```

### Lints and fixes files
```
yarn run lint
```

### Some tips
1. Markdown preview use highlight.js to make code show different colors, you are able to modify src/lib/highlight.js to support more language with code highlight.
2. You can debug the components after development by running the test environment.
3. You can show document by a url and this component will automatically download it by the url.
4. The priority of prop **value** is higher than that of prop **url**, if you set prop value with a nonempty value, the prop url will be ignored.

## License
MIT
