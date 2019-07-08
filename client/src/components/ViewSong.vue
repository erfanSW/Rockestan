<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <song-metadata :song="song"></song-metadata>
      </v-flex>
      <v-flex xs6 class="mr-4">
        <you-tube :youtubeId="song.youtubeId" />
      </v-flex>
    </v-layout>
    <v-layout>
        <v-flex xs6>
          <lyrics :lyrics="song.lyrics" />
      </v-flex>
      <v-flex xs6>
          <tab :tab="song.tab" />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import SongService from "@/services/SongService";
import SongMetadata from "./ViewSong/SongMetadata";
import YouTube from "./ViewSong/YouTube";
import Lyrics from "./ViewSong/Lyrics";
import Tab from "./ViewSong/Tab";

export default {
  data() {
    return {
      song: null
    };
  },
  async mounted() {
    const songId = this.$store.state.route.params.songId;
    this.song = (await SongService.show(songId)).data;
  },
  components: {
    SongMetadata,
    YouTube,
    Lyrics,
    Tab
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.textarea {
  width: 80%;
  font-family: monospace;
  border: none;
  height: 600px;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
</style>
