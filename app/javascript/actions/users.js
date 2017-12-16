import UserAPI from '../apis/users'
import * as types from '../mutation-types'

export const search = ({commit}, name) => {
  commit(types.USER_SEARCH_LOADING)
  UserAPI.search(name, (res) => {
    commit(types.USER_SEARCH_LOADED)
    commit(types.SET_USER_LIST, res.data)
  })
}