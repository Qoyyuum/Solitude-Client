export function SET_USER (state, payload) {
      let user = payload
      state.user = user
}

export function RESET_USER (state) {
      state.user = null
}

