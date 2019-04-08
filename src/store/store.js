import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  answers: []
}

const getters = {
  answers: () => state.answers === [] ? [] : state.answers
}

const actions = {
  add ({ commit }, answer) {
    console.log(answer)
    commit('addAnswer', answer)
  }
}

const mutations = {
  addAnswer (state, { answer }) {
    state.answers.push(answer)
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
