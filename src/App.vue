<template>
  <div id="app">
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
    }
  },
  data: function () {
    return {
      parseComponet: 'Markdown'
    }
  },
  computed: {
    actualValue: function () {
      if (this.isOfficeType) {
        return `http://view.officeapps.live.com/op/view.aspx?src=${this.value}`
      } else {
        return this.value
      }
    },
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
      case 'docx':
        // this.officeView()
        this.isOfficeType = true
        this.parseComponet = 'Office'
        break
      case 'xlsx':
        // this.officeView()
        this.isOfficeType = true
        this.parseComponet = 'Office'
        break
      case 'pptx':
        // this.officeView()
        this.isOfficeType = true
        this.parseComponet = 'Office'
        break
    }
  },
  methods: {
    officeView: function () {
      const url = `http://view.officeapps.live.com/op/view.aspx?src=${this.value}`
      window.open(url)
    }
  }
}
</script>

<style lang="less">
</style>
