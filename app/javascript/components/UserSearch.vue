<template>
  <div>
    <SearchField :action="searchUser" />
    <p v-if="isLoading">loading...</p>
  </div>
</template>

<script>
import {mapActions, mapState} from 'vuex'
import SearchField from './SearchField.vue'

export default {
  computed: {
    ...mapState([
      'isLoading'
    ])
  },

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
