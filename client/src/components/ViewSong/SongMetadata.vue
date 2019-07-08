<template>
  <panel title="اطلاعات اهنگ">
    <v-layout>
      <v-flex xs6>
        <v-card>
          <v-img :src="song.albumImage"></v-img>

          <v-chip color="orange darken-4" text-color="white">{{song.title}}</v-chip>
        </v-card>
      </v-flex>
      <v-flex xs6 class="mt-4 mr-4 pd-4" style="top:100%">
        <v-chip color="lime darken-1" text-color="white">
          <br />
          {{song.artist}}
        </v-chip>
        <br />
        <v-chip color="lime darken-1" text-color="white">{{song.album}}</v-chip>
        <br />
        <v-chip color="lime darken-1" text-color="white">{{song.genre}}</v-chip>
        <v-btn
          dark
          class="lime darken-1"
          :to="{
                name: 'song-edit',
                params: {
                  songId: song.id
                  }
              }"
        >Edit</v-btn>
        <v-btn
          v-if="isUserLoggedIn && !bookmark"
          dark
          class="lime darken-1"
          @click="setAsBookmark"
        >Bookmark</v-btn>

        <v-btn
          v-if="isUserLoggedIn && bookmark"
          @click="unsetBookmark"
          dark
          class="lime darken-1"
        >Unbookmark</v-btn>
      </v-flex>
    </v-layout>
  </panel>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import { mapState } from "vuex";
import BookmarkService from "@/services/BookmarkService";

export default {
  props: ["song"],
  data() {
    return {
      bookmark: null
    };
  },
  computed: {
    ...mapState(["isUserLoggedIn"])
  },
  watch: {
    async song() {
      if (!this.isUserLoggedIn) {
        return;
      }
      try {
        console.log(this.bookmark.id);
        this.bookmark = (await BookmarkService.index({
          songId: this.song.id,
          userId: this.$store.state.user.id
        })).data;
      } catch (error) {
        console.log(error);
      }
    }
  },
  methods: {
    async setAsBookmark() {
      try {
        this.bookmark = (await BookmarkService.post({
          songId: this.song.Id,
          userId: this.$store.state.user.id
        })).data;
        this.isBookmarked = true;
      } catch (error) {
        console.log(error);
      }
    },
    async unsetBookmark() {
      try {
        console.log(this.bookmark)
        await BookmarkService.delete(this.bookmark.id);
        this.bookmark = null;
      } catch (error) {
        console.log(error);
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
