<template>
  <div>
    <div>
      What's my name? (trollface)
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="1" value="1">
      <label class="form-check-label" for="1">John</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="2" value="2">
      <label class="form-check-label" for="2">Billy</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="3" value="3">
      <label class="form-check-label" for="3">Tom</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="4" value="4">
      <label class="form-check-label" for="4">I don't know</label>
    </div>

    <br />

    <button @click='showShame'>Shame</button>
    <router-link to="/register" @click='collectAnswer'>Finish quiz</router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      answer: ''
    }
  },
  methods: {
    collectAnswer () {
      this.$emit('collectAnswer', this.answer)
    },
    showShame () {
      this.$emit('showShame')
    }
  }
}
</script>