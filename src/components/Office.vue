<template>
    <div>
      <iframe :src="value" frameborder="0"></iframe>
    </div>
</template>

<script>
export default {
  name: 'Office',
  props: {
    value: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
