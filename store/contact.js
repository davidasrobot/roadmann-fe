export const state = () => ({
  data:null
})

export const mutations = {
  setData(state, boolean){
    state.data = boolean
  },
  emptyData(state){
    state.data = null
  }
}

export const actions = {
  async send({commit}, data){
    try {
      await this.$axios.post('/contact', data)
      commit('setData', true)
    } catch (error) {
      commit('setData', false)
    }
  },

  async subs({commit}, data){
    try {
      await this.$axios.post('/subscribe', data)
      commit('setData', true)
    } catch (error) {
      commit('setData', false)
    }
  }
}