<template>
    <div>
      <h2>You did... tragically!</h2>
      <button @click='showShame'>Show me the shame</button>
    </div>
</template>

<script>
export default {
  methods: {
    showShame () {
      this.$emit('showShame')
    }
  }
}
</script>