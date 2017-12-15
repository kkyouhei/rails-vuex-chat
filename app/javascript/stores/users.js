import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from '../actions/users'

Vue.use(Vuex)

export default new Vuex.Store({
  actions,
})