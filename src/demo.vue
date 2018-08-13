<template>
  <div id="app" style="height: 100%">
    <VueDocPreview :type="type" :value="codeString" :height="80" id="vdp" language="javascript" ></VueDocPreview>
  </div>
</template>

<script>
import VueDocPreview from './index'
export default {
  name: 'demo',
  components: {
    VueDocPreview
  },
  data: function () {
    return {
      mdStyle: {
        code: {
          'background-color': 'rgb(187, 255, 255)',
          'line-height': '20px'
        }
      },
      type: 'code',
      value: 'newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx',
      mdString: '# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {\n  console.log(a)\n}```',
      textString: '排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!',
      codeString: 'import Marked from \'marked\'\n' +
      'import HLJS from \'../lib/highlight\'\n' +
      '  watch: {\n' +
      '    value: function (val) {\n' +
      '      this.updateContent(val)\n' +
      '    }\n' +
      '  },\n' +
      '  mounted: function () {\n' +
      '    this.updateContent(this.value)\n' +
      '  },\n' +
      'updateContent: function (val) {\n' +
      '      if (val) {\n' +
      '        const parseMarked = Marked(val)\n' +
      '        this.content = parseMarked\n' +
      '        let self = this\n' +
      '        this.$nextTick(() => {\n' +
      '          self.parseHtml()\n' +
      '          console.log(\'Hello VueDocPreview\')\n' +
      '        })\n' +
      '      }\n' +
      '    }'
    }
  }
}
</script>

<style scoped>

</style>
