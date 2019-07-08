<template>
  <div class="white elevation-2" style="margin-top:50px">
    <v-toolbar flat dense class="deep-purple lighten-3" dark>
      <v-toolbar-title>{{title}}</v-toolbar-title>
      <slot name="action"></slot>
    </v-toolbar>
    <div class="pl-4 pr-4 pt-2 pb-2">
      <slot>No slot content defined.</slot>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  props: ["title"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
