export const state = () => ({
  activeEvent: {},
  currentMonthEvent:null,
  upcomingEvent:null
})

export const mutations = {
  set(state, event) {
    state.activeEvent = event
  },
  remove(state) {
    state.activeEvent = {}
  },
  setThisMonthEvent(state,payload){
    state.currentMonthEvent = payload
  },
  setUpcomingEvent(state,payload){
    state.upcomingEvent = payload
  },
}

export const getters = {
  status: (state) => {
    return state.activeEvent.online? 'WATCH HERE!' : 'GET TICKET HERE!'
  }
}