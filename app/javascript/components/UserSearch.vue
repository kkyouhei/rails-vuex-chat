<template>
  <input type="text" @input="searchUser" placeholder="user name"/>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  methods: {
    ...mapActions([
      'search'
    ]),
    searchUser(val){
      this.search(val.target.value)
    }
  }
}
</script>
