<template>
  <input type="text" @input="changeValue" placeholder="user name"/>
</template>

<script>
import {mapActions} from 'vuex'

export default {
  name: 'SearchField' ,

  props: {
    action: {
      type: Function,
      required: false,
    }
  },

  methods: {
    changeValue(val){
      this.action(val.target.value)
    }
  }
}
</script>