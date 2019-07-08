<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="ورود" style="margin-top:50px;width:500px">
        <br />
        <div class="pl-4 pr-4 pt-4 pb-4">
          <v-text-field class="txt" label="ایمیل" v-model="email"></v-text-field>
          <br />
          <v-text-field class="txt" label="رمز عبور" type="password" v-model="password"></v-text-field>
          <v-alert :value="error" v-html="error" color="error" icon="warning" outline></v-alert>
          <br />
          <v-btn class="deep-purple darken-4 txt" @click="login()">ورود</v-btn>
        </div>
      </panel>
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
    async login() {
      try {
        const response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "songs" });
      } catch (error) {
        this.error = error.response.data.error;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.reg {
  width: 450px;
  max-width: 500px;
  margin-right: 250px;
}
.txt {
  color: white;
}
</style>
