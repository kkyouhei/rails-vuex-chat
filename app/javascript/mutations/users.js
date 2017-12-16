import * as types from '../mutation-types'

export const state = {
  users: [],
  isLoading: false
}

export const mutations = {
  [types.USER_SEARCH_LOADING](state) {
    state.isLoading = true
  },

  [types.USER_SEARCH_LOADED](state) {
    state.isLoading = false
  },

  [types.SET_USER_LIST](state, users) {
    state.users = users
  }
}