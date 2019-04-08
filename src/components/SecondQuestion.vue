<template>
  <div>
    <div>
      What is the result of 3 * 3?
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="1" value="1">
      <label class="form-check-label" for="1">3</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="2" value="2">
      <label class="form-check-label" for="2">6</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="3" value="3">
      <label class="form-check-label" for="3">9</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="4" value="4">
      <label class="form-check-label" for="4">12</label>
    </div>

    <br />

    <router-link to="/question/3" @click='collectAnswer'>Next question</router-link>
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