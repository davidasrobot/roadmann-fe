export const state = () => ({
  header:null,
  items:null,
})

export const mutations = {
  setHeader(state, payload){
    state.header = payload
  },
  setItems(state, payload){
    state.items = payload
  }
}