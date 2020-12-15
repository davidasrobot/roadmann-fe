export const state = () => ({
  artists:null,
  activeArtist:null
})

export const mutations = {
  setArtists(state, payload){
    state.artists = payload
  },
  setActiveArtist(state, payload){
    state.activeArtist = payload
  },
}

export const getters = {
  getImage:(state) => {
    if (state.activeArtist.image && state.activeArtist.image.length) {
      return JSON.parse(state.activeArtist.image)[0].download_link
    }
  }
}