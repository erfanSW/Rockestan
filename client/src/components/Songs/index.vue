<template>
  <v-layout column class="layout">
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel />
    </v-flex>
  </v-layout>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import SongService from "@/services/SongService";
import SongsPanel from "./SongsPanel";
import SongsSearchPanel from './SongsSearchPanel';
export default {
  components: {
    SongsPanel,
    SongsSearchPanel
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  margin-top: 50px;
}
</style>
