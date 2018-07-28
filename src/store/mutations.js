const mutations = {
  CHANGE_COLLAPS (state) {
    state.collapsed = !state.collapsed
    if (!state.collapsed) {
      state.aside_width = '230px'
    } else {
      state.aside_width = '64px'
    }
  }
}

export default mutations
