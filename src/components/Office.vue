<template>
    <div style="height: 100%">
      <iframe :src="value" frameborder="0" width="100%" height="100%" ></iframe>
    </div>
</template>

<script>
export default {
  name: 'Office',
  props: {
    value: {
      type: String,
      default: ''
    },
    height: {
      type: [String, Number],
      default: 700
    }
  }
}
</script>
