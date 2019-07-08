<template>
  <panel title="جست و جو">
    <v-text-field label="جستجوی آهنگ با  نام|خواننده|آلبوم|سبک" v-model="search"></v-text-field>
  </panel>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
import _ from "lodash";
export default {
  data() {
    return {
      search: ""
    };
  },
  watch: {
    search: _.debounce(async function(value) {
      console.log(value);
      const route = {
        name: "songs"
      };
      if (this.search !== "") {
        route.query = {
          search: this.search
        };
      }
      this.$router.push(route);
    }, 700),
    "$route.query.search": {
      immediate: true,
      handler(value) {
        this.search = value;
      }
    }
  }
};
</script>
