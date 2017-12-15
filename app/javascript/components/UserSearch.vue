<template>
  <div>
    <SearchField :action="searchUser" />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import SearchField from './SearchField.vue'

export default {
  components: {
    SearchField
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
