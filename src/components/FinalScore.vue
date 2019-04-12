<template>
  <div class="row justify-content-center align-items-center">
    <form class="col-6">
      <div class="form-group" style="margin-left:60px;">QUIZ RESULT</div>
      <div class="form-group">
        <label for="totalQuestions">Total questions:</label>
        <div class='info'>5</div>
      </div>
      <div class="form-group">
        <label for="correctAnswer">Correct answers:</label>
        <div class='info'>{{ numberOfCorrectAnswers($store.state.answers) }}</div>
      </div>
      <div class="form-group">
        <label for="totalTime">Total time:</label>
        <div class='info'>{{ millisToMinutesAndSeconds($store.state.time[5] - $store.state.time[0]) }}</div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    numberOfCorrectAnswers (answers) {
      var correctAnswers = ['4', '3', '3', '2', '4']
      var correctAnswersCount = 0
      for (var i = 0; i < 5; i += 1) {
        if (correctAnswers[i] === answers[i]) {
          correctAnswersCount++
        }
      }

      return correctAnswersCount
    },
    millisToMinutesAndSeconds (millis) {
      var minutes = Math.floor(millis / 60000)
      var seconds = ((millis % 60000) / 1000).toFixed(0)
      return minutes + ':' + (seconds < 10 ? '0' : '') + seconds
    }
  }
}
</script>

<style scoped>
label {
	font-family: "Proxima Nova";
  width: 200px;
}
.info {
  background-color: #95d600;
  width: 50px;
  display: inline-block;
  color: #fff;
  border-radius: 5px;
  text-align: center;
}
</style>