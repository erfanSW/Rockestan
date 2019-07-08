<template>
  <v-footer class="pa-3 blue-grey darken-4 footer">
    <v-spacer></v-spacer>
    <div>&copy; {{ new Date().getFullYear() }}</div>
  </v-footer>
</template>
<script>
// eslint-disable-next-line
/* eslint-disable */

export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
    bottom: 0;
    position: absolute;
    width: 100%;
    color: white;
}
.footer:fullscreen {
  bottom: 50px;
}
</style>
