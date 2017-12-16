<template>
  <div>
    <SearchField :action="searchUser" />
    <UserList />
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import SearchField from './SearchField.vue'
import UserList from './UserList.vue'

export default {
  components: {
    SearchField,
    UserList
  },

  methods: {
    ...mapActions([
      'search'
    ]),
    searchUser(val){
      this.search(val)
    }
  }
}
</script>
