<template>
  <div id="app">
    <p>动态组件</p>
    <component :is="parseComponet" :value="componentValue"></component>
  </div>
</template>

<script>
import Markdown from './components/Markdown'
import TextPreview from './components/TextPreview'

export default {
  name: 'app',
  components: {
    Markdown,
    TextPreview
  },
  props: {
    type: {
      type: String,
      default: 'md'
    },
    value: {
      type: String,
      default: ''
    },
    url: {
      type: String,
      default: null
    }
  },
  data: function () {
    return {
      parseComponet: 'Markdown',
      mdString: '# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {console.log(a)}```',
      textString: '排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!'
    }
  },
  computed: {
    componentValue: function () {
      if (this.type === 'md') {
        return this.mdString
      } else if (this.type === 'text') {
        return this.textString
      }
    }
  },
  mounted: function () {
    switch (this.type) {
      case 'md':
        this.parseComponet = 'Markdown'
        break
      case 'text':
        this.parseComponet = 'TextPreview'
        break
    }
  },
  methods: {}
}
</script>

<style lang="less">
</style>
