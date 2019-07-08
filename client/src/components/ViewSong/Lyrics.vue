<template>
  <panel title="متن آهنگ" style="width:400px">
    <v-textarea readonly v-model="lyrics"></v-textarea>
  </panel>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  props: ["lyrics"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
