export const state = () => ({
  blogs:null,
  activeBlog:null,
  error:false
})

export const mutations = {
  setBlogs(state, payload){
    state.blogs = payload
  },
  setActiveBlog(state, payload){
    state.activeBlog = payload
  },
  setStatus(state, status){
    state.error = status
  }
}

export const getters = {
  getImage:state => {
    if (state.activeBlog.image && state.activeBlog.image.length) {
      return state.activeBlog.image.replace(/\\/g, '/')
    }
  }
}