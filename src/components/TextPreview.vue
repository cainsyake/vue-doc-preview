<template>
  <div class="content">
    <pre>{{value}}</pre>
  </div>
</template>

<script>
export default {
  name: 'TextPreview',
  props: {
    value: {
      type: String,
      default: ' '
    }
  },
  data: function () {
    return {}
  },
  created: function () {
    // 注释
  },
  mounted: function () {

  }
}
</script>

<style scoped lang="less">
  .content {
    font-size: 18px;
  }
</style>
