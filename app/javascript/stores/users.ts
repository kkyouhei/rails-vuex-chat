import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '../actions/users'
import {state, mutations} from '../mutations/users'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
})