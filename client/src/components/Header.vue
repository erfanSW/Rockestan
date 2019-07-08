<template>
  <v-toolbar fixed class="deep-purple darken-4">
    <v-toolbar-title flat dense class="mr-4">
      <router-link tag="span" class="home dark" :to="{name:'songs'}" dark>راکستان</router-link>
    </v-toolbar-title>
    <v-toolbar-items class="marg">
      <router-link tag="button" class="mt-2 mr-4 home dark" :to="{name:'songs'}" dark>آهنگ ها</router-link>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" :to="{name:'register'}" class="home">ثبت نام</v-btn>
      <v-btn flat v-if="!$store.state.isUserLoggedIn" :to="{name:'login'}" class="home">ورود</v-btn>
      <v-btn flat v-if="$store.state.isUserLoggedIn" @click="logOut()" class="home">خروج</v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */

export default {
  data() {
    return {
      prevRoute: null,
      beforeRouteEnter(to, from, next) {
        next(vm => {
          vm.prevRoute = from;
        });
      }
    };
  },
  methods: {
    logOut() {
      this.$store.dispatch("setToken", null);
      this.$store.dispatch("setUser", null);
      this.$router.push({ name: "songs" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  cursor: grabbing;
  color: white;
}
</style>
