<template>
  <v-layout column>
    <v-flex xs6 offset-xs3 >
      <panel title="ثبت نام" style="margin-top:50px">
        <div class="pl-4 pr-4 pt-2 pb-2">
          <form name="tab-tracker-form" autocomplete="off">
            <v-text-field label="ایمیل" v-model="email"></v-text-field>
            <br>
            <v-text-field
              label="رمز عبور"
              type="password"
              v-model="password"
              autocomplete="new-password"
            ></v-text-field>
          </form>
          <br>
          <v-alert :value="error" v-html="error" color="error" icon="warning" outline></v-alert>
          <br>
          <v-btn class="deep-purple darken-4 txt" @click="register()">ثبت نام</v-btn>
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
    async register() {
      try {
        const response = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        this.$store.dispatch("setToken", response.data.token);
        this.$store.dispatch("setUser", response.data.user);
        this.$router.push({ name: "login" });
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
  margin-top: 60px;
  height: auto;
  width: 500px;
}
.txt {
  color: white;
}
</style>
