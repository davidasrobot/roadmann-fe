export const actions = {
  async nuxtServerInit({commit}, {app}){
    try {
      const init = await app.$axios.get('init').then(res => {return res.data})
      commit('hero/setItem', init.hero, {root:true})
      commit('about/setHeader', init.about, {root:true})
      commit('about/setItems', init.aboutitem, {root:true})
      commit('event/setThisMonthEvent', init.thisMonth, {root:true})
      commit('event/setUpcomingEvent', init.upcoming, {root:true})
      commit('artist/setArtists', init.artist, {root:true})
      commit('blog/setBlogs', init.blog, {root:true})
    } catch (error) {
      console.log(error);
    }
  }
}

export const state = () => ({
  storage_url:process.env.STORAGE_URL || 'http://localhost:8000/storage/'
})