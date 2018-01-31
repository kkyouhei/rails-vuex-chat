<template>
  <div>
    <p> hwllo </p>
    <SearchField :action="searchUser" />
    <UserList />
  </div>
</template>

<script lang="ts">
import {mapActions, mapState} from 'vuex'
import SearchField from './SearchField.vue'
import UserList from './UserList.vue'
import Vue from 'vue'
import actions from '../actions/users'
import store from '../stores/users'

export default Vue.extend({
  components: {
    SearchField,
    UserList
  },

  methods: {
    searchUser(val: string){
      store.dispatch('search', val)
    }
  }
})
</script>
