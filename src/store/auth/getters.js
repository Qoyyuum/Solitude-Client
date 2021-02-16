export function user (state) {
    return state.user
}

export function isAuthenticated (state) {
    return !!state.user
}