import * as types from '../mutation-types'
import * as T from '../src/types/user'
import {MutationTree, ActionTree} from 'vuex'

interface State{
  users: T.User[],
  isLoading: Boolean
}

export const mutations: MutationTree<State> = {
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

export const state: State = {
  users: [],
  isLoading: false
}