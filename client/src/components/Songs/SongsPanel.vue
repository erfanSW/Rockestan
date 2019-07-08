<template>
  <panel title="آهنگ ها">
    <v-btn
      light
      medium
      absolute
      left
      middle
      fab
      @click="add()"
      slot="action"
      class="deep-purple accent-2"
    >
      <v-icon>add</v-icon>
    </v-btn>
    <div class="song" v-for="song in songs" :key="song.id">
      <v-layout>
        <v-flex xs6>
          <div class="song-title">{{song.title}}</div>
          <div class="song-artist">{{song.artist}}</div>
          <div title="song-genre">{{song.genre}}</div>
          <v-btn
            dark
            class="deep-purple accent-1"
            :to="{
                name: 'song',
                params: {
                  songId: song.id
                  }
              }"
          >View</v-btn>
        </v-flex>
        <v-flex xs6>
          <img class="album-image" :src="song.albumImage" alt />
        </v-flex>
      </v-layout>
    </div>
  </panel>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import SongService from "@/services/SongService";
export default {
  data() {
    return {
      songs: null
    };
  },
  methods: {
    add() {
      this.$router.push({
        name: "songs-create"
      });
    }
  },
  watch: {
    "$route.query.search": {
      immediate: true,
      async handler(value) {
        this.songs = (await SongService.index(value)).data;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.layout {
  margin-top: 50px;
}
.song {
  padding: 20px;
  height: 330px;
  overflow: hidden;
}
.song-title {
  font-size: 30px;
}
.song-artist {
  font-size: 24px;
}
.song-genre {
  font-size: 18px;
}
.album-image {
  width: 70%;
  margin: auto;
}
</style>
