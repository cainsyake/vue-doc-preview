<template>
  <div id="app" style="height: 100%">
    <VueDocPreview :type="type" :value="value" :height="90" id="vdp"></VueDocPreview>
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
      type: 'docx',
      value: 'newteach.pbworks.com%2Ff%2Fele%2Bnewsletter.docx',
      mdString: '# Marked\n **success**\n```javascript\nconst a = 10\nfunction () {\n  console.log(a)\n}```',
      textString: '排列数A(n, m) = n! / (n-m)!\n组合数C(n, m) = A(n, m) / m!'
    }
  }
}
</script>

<style scoped>

</style>
