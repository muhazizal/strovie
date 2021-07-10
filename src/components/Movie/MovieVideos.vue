<template>
  <div class="videos text-center d-inline-block">
    <v-dialog v-model="dialog" width="fit-content" persistent no-click-animation>
      <template v-slot:activator="{ on, attrs }">
        <v-btn class="mb-3 mb-md-0" rounded outlined :small="$vuetify.breakpoint.xs" v-bind="attrs" v-on="on">
          <v-icon left>mdi-youtube</v-icon>
          Trailer
        </v-btn>
      </template>
      <v-card class="black">
        <div class="videos-container">
          <youtube
            :video-id="videoKey"
            :player-vars="{ autoplay: 1 }"
            :player-width="playerWidth"
            :player-height="playerHeight"
          >
          </youtube>
        </div>
        <v-card-actions class="justify-end pt-0 black">
          <v-btn color="default" class="white--text" text @click="buttonClose">
            Close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
export default {
  name: "MovieVideos",
  props: {
    movieVideos: Object,
  },
  data() {
    return {
      dialog: false,
    };
  },
  computed: {
    videoKey() {
      let videoKey = "";
      const videoList = this.movieVideos.results;

      videoList.forEach((video) => {
        if (video.type === "Trailer") {
          videoKey = video.key;
        }
      });

      return videoKey;
    },
    // eslint-disable-next-line vue/return-in-computed-property
    playerWidth() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 300;
        case "sm":
          return 500;
        case "md":
          return 800;
        case "lg":
          return 1080;
        case "xl":
          return 1366;
      }
    },
    // eslint-disable-next-line vue/return-in-computed-property
    playerHeight() {
      switch (this.$vuetify.breakpoint.name) {
        case "xs":
          return 200;
        case "sm":
          return 250;
        case "md":
          return 400;
        case "lg":
          return 440;
        case "xl":
          return 600;
      }
    },
  },
  methods: {
    buttonClose() {
      this.dialog = false;
      this.player.stopVideo();
    },
  },
};
</script>
<style lang="scss">
.videos-container {
  width: 100%;
  position: relative;
  overflow: hidden;
}
</style>
