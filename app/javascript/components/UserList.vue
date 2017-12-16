<template>
    <div v-if="isLoading === false">
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <div>loading...</div>
    </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: "UserList",

  computed: {
    ...mapState([
      'isLoading',
      'users'
    ])
  },
}
</script>
