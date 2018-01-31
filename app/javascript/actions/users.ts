import UserAPI from '../apis/users'
import * as types from '../mutation-types'
import { ActionContext } from 'vuex';

export const search = (store: ActionContext<any, any>, name: string) => {
  store.commit(types.USER_SEARCH_LOADING)
  UserAPI.search(name, (res: any) => {
    store.commit(types.USER_SEARCH_LOADED)
    store.commit(types.SET_USER_LIST, res.data)
  })
}