<template>
  <div id="VueDocPreviewRoot" class="root" :style="styler">
    <component :is="parseComponet" :value="actualValue"></component>
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
    isOfficeType: function () {
      const type = this.type
      const officeTypes = [
        'docx',
        'pptx',
        'xlsx'
      ]
      let result = false
      for (let i = 0, l = officeTypes.length; i < l; i++) {
        if (type === officeTypes[i]) {
          result = true
          break
        }
      }
      return result
    },
    actualValue: function () {
      if (this.isOfficeType) {
        return `http://view.officeapps.live.com/op/view.aspx?src=${this.value}`
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
        if (this.isOfficeType) {
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
        case 'md':
          this.parseComponet = 'Markdown'
          break
        case 'text':
          this.parseComponet = 'TextPreview'
          break
        case 'docx':
          this.parseComponet = 'Office'
          break
        case 'xlsx':
          this.parseComponet = 'Office'
          break
        case 'pptx':
          this.parseComponet = 'Office'
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
