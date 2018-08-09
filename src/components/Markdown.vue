<template>
    <div class="vm-markdown-html" v-html="content" v-highlight></div>
</template>

<script>
import Marked from 'marked'
import Highlight from '../lib/highlight'
import Vue from 'vue'

Vue.use(Highlight)
export default {
  name: 'Markdown',
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data: function () {
    return {

    }
  },
  computed: {
    content: function () {
      if (this.value) {
        return Marked(this.value)
      } else {
        return Marked('')
      }
    }
  },
  mounted: function () {
    // this.content = Marked(this.value)
    let self = this
    this.$nextTick(() => {
      self.parseHtml()
    })
  },
  watch: {
    value: function (newVal) {
      this.content = Marked(this.value)
    }
  },
  methods: {
    parseHtml () {
      let style = {
        ul: `
              margin: 10px 20px;
              list-style-type: square;
              padding: 0;
            `,
        ol: `
              margin: 10px 20px;
              list-style-type: decimal;
              padding: 0;
            `,
        li: `
              display: list-item;
              padding: 0;
            `,
        hr: `
              margin: 15px 0;
              border-top: 1px solid #eeeff1;
            `,
        pre: `
              display: block;
              margin: 10px 0;
              padding: 8px;
              border-radius: 4px;
              background-color: #f2f2f2;
              color: #656565;
              font-size: 14px;
             `,
        blockquote: `
                      display: block;
                      border-left: 4px solid #ddd;
                      margin: 15px 0;
                      padding: 0 15px;
                    `,
        img: `
               margin: 20px 0;
             `,
        a: `
            color: #41b883;
           `,
        table: `
                 border: 1px solid #eee;
                 border-collapse: collapse;
               `,
        tr: `
              border: 1px solid #eee;
            `,
        th: `
              padding: 8px 30px;
              border-right: 1px solid #eee;
              background-color: #f2f2f2;
            `,
        td: `
              padding: 8px 30px;
              border-right: 1px solid #eee;
            `
      }
      let html = document.getElementsByClassName('vm-markdown-html')[0]
      let tagNames = Object.keys(style)
      for (let i = 0; i < tagNames.length; i++) {
        let _tagNames = html.getElementsByTagName(tagNames[i])
        if (_tagNames.length > 0) {
          for (let j = 0; j < _tagNames.length; j++) {
            _tagNames[j].style.cssText = style[tagNames[i]]
          }
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
    .vm-markdown-html{
        padding: 15px;
        overflow: auto;
        flex-grow: 1;
        word-wrap:break-word;
        ul{
            margin: 10px 20px;
            list-style-type: square;
            padding: 0;
        }
        ol{
            margin: 10px 20px;
            list-style-type: decimal;
            padding: 0;
        }
        li{
            display: list-item;
            padding: 0;
        }
        hr{
            margin: 15px 0;
            border-top: 1px solid #eeeff1;
        }
        pre{
            display: block;
            margin: 10px 0;
            padding: 8px;
            border-radius: 4px;
            background-color: #f2f2f2;
            color: #656565;
            font-size: 14px;
        }
        blockquote{
            display: block;
            border-left: 4px solid #ddd;
            margin: 15px 0;
            padding: 0 15px;
        }
        img{
            margin: 20px 0;
        }
        a{
            color: #41b883;
        }
        table{
            border: 1px solid #eee;
            border-collapse: collapse;
        }
        tr{
            border: 1px solid #eee;
        }
        th{
            padding: 8px 30px;
            border-right: 1px solid #eee;
            background-color: #f2f2f2;
        }
        td{
            padding: 8px 30px;
            border-right: 1px solid #eee;
        }
    }
</style>
