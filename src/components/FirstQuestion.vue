<template>
  <div class="row h-100 justify-content-center align-items-center">
    <form class="col-6">

      <div class="form-group"><span class="info">{{ minutes }}:{{ secondsToString }}:{{ hundreds }}</span></div>
      <div class="form-group">
        <div class="center">
          What is the result of 2 + 2?
        </div>
      </div>

      <div class="form-group">
        <div class="form-check form-check-inline">
          <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="1" value="1">
          <label class="form-check-label" for="1">1</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="2" value="2">
          <label class="form-check-label" for="2">2</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input" v-model='answer' type="radio" name="inlineRadioOptions" id="3" value="3">
          <label class="form-check-label" for="3">3</label>
        </div>
        <div class="form-check form-check-inline">
          <input class="form-check-input"  v-model='answer' type="radio" name="inlineRadioOptions" id="4" value="4">
          <label class="form-check-label" for="4">4</label>
        </div>
      </div>
      <div class="form-group">
        <router-link to="/question/2" @click.native="add({answer: answer, time: time})" class="btn btn-success">Next question</router-link>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      answer: '',
      time: new Date().getTime(),
      stopwatch: 0,
      minutes: 0,
      seconds: 0,
      hundreds: 0,
      secondsToString: '0'
    }
  },
  methods: {
    timer: function () {
      setInterval(() => {
        this.hundreds++
        if (this.hundreds === 100) {
          this.hundreds = 0
          this.seconds++
          this.secondsToString = this.seconds.toString()
          if (this.seconds === 60) {
            this.minutes++
            this.seconds = 0
            this.secondsToString = '0'
          } else if (this.seconds / 10 < 1) {
            this.secondsToString = '0' + this.seconds
          }
        }
      }, 10)
    },
    ...mapActions([
      'add'
    ])
  },
  mounted () {
    this.timer()
  }
}
</script>

<style scoped>
.center {
  border: 15px solid #3e3535;
  border-radius: 25px;
  height: 200px;
  padding: 15px;
}
.info {
  background-color: #95d600;
  width: 70px;
  display: inline-block;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
</style>

