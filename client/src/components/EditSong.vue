<template>
  <v-layout>
    <v-flex xs4>
      <panel title="Song Metadata" style="margin-top:50px">
        <v-text-field required :rules="[required]" label="Artist" v-model="song.artist"></v-text-field>
        <v-text-field required :rules="[required]" label="Title" v-model="song.title"></v-text-field>
        <v-text-field required :rules="[required]" label="Album" v-model="song.album"></v-text-field>
        <v-text-field required :rules="[required]" label="Genre" v-model="song.genre"></v-text-field>
        <v-text-field
          required
          :rules="[required]"
          label="Album Image URL"
          v-model="song.albumImage"
        ></v-text-field>
        <v-text-field required :rules="[required]" label="Youtube ID" v-model="song.youtubeId"></v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel style="height:474px;">
        <v-btn
          light
          medium
          absolute
          left
          middle
          fab
          @click="save"
          slot="action"
          class="cyan accent-2"
        >
          <v-icon>save</v-icon>
        </v-btn>
        <v-text-field required :rules="[required]" label="TAB" v-model="song.tab" multi-line></v-text-field>
        <v-text-field required :rules="[required]" label="Lyrics" v-model="song.lyrics" multi-line></v-text-field>
        <div class="danger-alert" v-if="error">{{error}}</div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import SongService from "@/services/SongService";
export default {
  data() {
    return {
      song: {
        title: null,
        artist: null,
        album: null,
        genre: null,
        albumImage: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: value => !!value || "Required."
    };
  },
  async mounted() {
    try {
       const songId = this.$store.state.route.params.songId;
      this.song = (await SongService.show(songId)).data;
      await SongService.show(this.song);
    } catch (error) {
      console.log(error);
    }
  },
  methods: {
    async save() {
      this.error = null;
      const areAllFieldsFilledIn = Object.keys(this.song).every(
        key => !!this.song[key]
      );
      if (!areAllFieldsFilledIn) {
        this.error = "Please fill in all the required fields.";
        return;
      }
      try {
        await SongService.put(this.song);
        this.$router.push({
          name: 'song'});
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.danger-alert {
  color: red;
}
</style>