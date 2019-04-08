<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view @collectAnswer='add'></router-view>
    <div>{{ $store.state.answers }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'app',
  computed: mapGetters([
    'answers'
  ]),
  methods: mapActions([
    'add'
  ])
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
