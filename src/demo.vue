<template>
  <div id="app" style="height: 100%">
    <VueDocPreview :type="type" :value="codeString" :height="80" id="vdp" language="javascript"></VueDocPreview>
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
      type: 'code',
      value: 'newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx',
      mdString: '# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {\n  console.log(a)\n}```',
      textString: '排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!',
      codeString: 'import VueDocPreview from \'./index\'\n' +
      'export default {\n' +
      '  name: \'demo\',\n' +
      '  components: {\n' +
      '    VueDocPreview\n' +
      '  },\n' +
      '  data: function () {\n' +
      '    return {\n' +
      '      type: \'code\',\n' +
      '      value: \'newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx\',\n' +
      '      mdString: \'# Marked\\n **success**\\n```javascript\\nconst a = 10\\nfunction () {\\n  console.log(a)\\n}```\',\n' +
      '      textString: \'排列数A(n, m) = n! / (n-m)!\\n组合数C(n, m) = A(n, m) / m!\',\n' +
      '      codeString: \'function () {\\n  console.log(a)\\n}\'\n' +
      '    }\n' +
      '  }\n' +
      '}\nfunction () {\n  console.log(a)\n}'
    }
  }
}
</script>

<style scoped>

</style>
