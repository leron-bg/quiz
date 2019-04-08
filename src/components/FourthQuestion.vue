<template>
  <div>
    <div>
      How old is the universe?
    </div>

    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="1" value="1">
      <label class="form-check-label" for="1">3 billion</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="2" value="2">
      <label class="form-check-label" for="2">13 billion</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="3" value="3">
      <label class="form-check-label" for="3">23 billion</label>
    </div>
    <div class="form-check form-check-inline">
      <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="4" value="4">
      <label class="form-check-label" for="4">33 billion</label>
    </div>

    <br />

    <router-link to="/question/5" @click='collectAnswer'>Next question</router-link>
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