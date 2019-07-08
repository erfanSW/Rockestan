<template>
  <div id="app">
    <v-app>
      <page-header />
      <main>
        <v-container fluid>
          <router-view />
        </v-container>
      </main>
      <!-- <page-footer/> -->
    </v-app>
  </div>
</template>

<script>
/* eslint-disable */
import PageHeader from "@/components/Header.vue";
import PageFooter from "@/components/footer.vue";
export default {
  name: "App",
  components: {
    PageHeader,
    PageFooter
  }
};
</script>

<style>
</style>
