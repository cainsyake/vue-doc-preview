<template>
  <div id="VueDocPreviewRoot" class="root" :style="styler">
    <component :is="parseComponet" :value="actualValue" :mdStyle="mdStyle"></component>
  </div>
</template>

<script>
import Markdown from './components/Markdown'
import TextPreview from './components/TextPreview'
import Office from './components/Office'

export default {
  name: 'app',
  components: {
    Markdown,
    TextPreview,
    Office
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
    height: {
      type: Number,
      default: 90
    },
    language: {
      type: String,
      default: ''
    },
    mdStyle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data: function () {
    return {
      parseComponet: 'Markdown',
      styler: ''
    }
  },
  watch: {
    type: function (val) {
      this.updateType()
    }
  },
  computed: {
    actualValue: function () {
      if (this.type === 'office') {
        return `http://view.officeapps.live.com/op/view.aspx?src=${this.value}`
      } else if (this.type === 'code' && this.language) {
        return `\`\`\`${this.language}\n${this.value}\n\`\`\``
      } else {
        return this.value
      }
    }
  },
  mounted: function () {
    this.updateType()
  },
  methods: {
    setHeiht: function () {
      let height = this.height
      if (height < 0) height = 0
      if (height > 100) {
        // height大于100时将视作固定高度，单位px
        this.styler = `height: ${height}px`
      } else {
        // height小于等于100时为百分比高度
        if (this.type === 'office') {
          const contentHeight = this.getClientHeight() * height / 100
          this.styler = `height: ${contentHeight}px`
        } else {
          this.styler = `height: ${height}%`
        }
      }
    },
    getClientHeight: function () {
      const clientHeight = document.documentElement.clientHeight
      return clientHeight
    },
    updateType: function () {
      switch (this.type) {
        case 'markdown':
          this.parseComponet = 'Markdown'
          break
        case 'text':
          this.parseComponet = 'TextPreview'
          break
        case 'office':
          this.parseComponet = 'Office'
          break
        case 'code':
          this.parseComponet = 'Markdown'
          break
      }
      this.setHeiht()
    }
  }
}
</script>

<style lang="less" scoped>
  .root {
    height: 100%;
  }
</style>
