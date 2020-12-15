export const state = () => ({
  item:null
})

export const mutations = {
  setItem(state, payload){
    state.item = payload
  }
}

export const getters = {
  getItem: (state, getters, rootState) => {
    return rootState.storage_url + state.item.image
  }
}