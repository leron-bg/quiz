import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  answers: [],
  time: [new Date().getTime()]
}

const mutations = {
  add (state, payload) {
    state.answers.push(payload.answer)
    state.time.push(payload.time)
  }
}

const actions = {
  add: ({ commit }, payload) => commit('add', payload)
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})
