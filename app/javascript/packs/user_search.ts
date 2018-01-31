import Vue from 'vue'
import Vuex from 'vuex'
import UserSearch from '../components/UserSearch.vue'
import store from '../stores/users'

new Vue({
  el: '#user_search',
  store,
  render: h => h(UserSearch)
})