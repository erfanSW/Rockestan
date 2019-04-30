<template>
  <div>
    email :
    <input type="email" v-model="email">
    <br>
    password :
    <input type="password" v-model="password">
    <br>
    <button @click="register">Register</button>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import AuthenticationService from '@/services/AuthenticationService.js'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
       async register () {
        await AuthenticationService.register({
            email : this.email,
            password : this.password
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
