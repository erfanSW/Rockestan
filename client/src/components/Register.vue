<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <div class="white elevation-1">
        <v-toolbar flat dense class="violet">
          <v-toolbar-title>Register</v-toolbar-title>
        </v-toolbar>

        <div class="pl-4 pr-4 pt-2 pb-2">
          
          <input type="email" name="email" v-model="email" placeholder="email">
          <br>
          <input type="password" name="password" v-model="password" placeholder="pasword">
          <br>
          <div class="error" v-html="error"/>
          <br>
          <v-btn @click="register">Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import AuthenticationService from "@/services/AuthenticationService.js";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: null
    };
  },
  methods: {
    async register() {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error {
  color: red;
}
div {
  bottom: 100px;
}
</style>
