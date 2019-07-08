<template>
  <panel title="یوتیوب" style="width:400px">
    <div class="img">{{youtubeId}}</div>
    <!-- <youtube :video-id="youtubeId" :player-width="370" :player-height="215"></youtube> -->
  </panel>
</template>

<script>
// eslint-disable-next-line
/* eslint-disable */
export default {
  props: ["youtubeId"]
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
