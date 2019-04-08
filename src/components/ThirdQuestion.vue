<template>
  <div>
    <div>
      What is the result of 4^4?
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="1" value="1">
      <label class="form-check-label" for="1">4</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="2" value="2">
      <label class="form-check-label" for="2">8</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="3" value="3">
      <label class="form-check-label" for="3">16</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="4" value="4">
      <label class="form-check-label" for="4">32</label>
    </div>

    <br />

    <button @click='collectAnswer'>Check</button>
    <router-link to="/question/4" @click='collectAnswer'>Next question</router-link>
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
    }
  }
}
</script>