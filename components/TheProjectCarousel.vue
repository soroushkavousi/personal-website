<template>
  <v-card color="primary lighten-0" tile class="fill">
    <!-- <v-col cols="6" class="mx-0 px-0"> -->
    <v-carousel v-model="model" height="100%">
      <v-carousel-item eager v-for="(view, i) in views" :key="i" class="fill">
        <div class="d-flex flex-column fill-height">
          <v-responsive
            :aspect-ratio="viewRatio"
            class="fill-width flex-grow-0"
            width="100%"
            height="auto"
          >
            <a :href="view.image" target="_blank" class="fill">
              <v-img
                contain
                :src="view.image"
                class="ma-0"
                position="center top"
                :aspect-ratio="viewRatio"
                width="100%"
              ></v-img>
            </a>
          </v-responsive>

          <v-card
            color="primary lighten-0"
            tile
            width="100%"
            min-height="180"
            class="
              px-5
              ma-0
              d-flex
              flex-column flex-grow-1
              justify-content-center justify-center
              carousel-item
            "
          >
            <v-card-title class="text-sm-body-2 text-lg-body-1 pa-0 ma-0 mb-2">
              {{ view.title }}
            </v-card-title>
            <v-card-text class="mt-0 mb-0 mx-1 pa-0">
              <div v-html="view.description" class="text-caption"></div>
            </v-card-text>
          </v-card>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  props: ['views'],
  data() {
    return {
      model: 0,
      viewRatio: 16 / 9,
      viewWidth: '50%',
      height: this.width / this.ratio,
      carouselActionBarHeight: 50,
      viewDescriptionHeight: 120,
      imageDialog: false,
    }
  },
  computed: {
    viewHeight() {
      return this.width / this.ratio
    },
    viewImageHeight() {
      return (
        this.height - this.viewDescriptionHeight - this.carouselActionBarHeight
      )
    },
    carouselWidth() {
      return this.viewRatio * this.viewImageHeight
    },
  },
}
</script>

<style lang="css" scoped>
.container {
  /* padding-top: 1px !important; */
}

.v-responsive__content {
  /* display: flex !important; */
}

.carousel-item {
  padding-bottom: 50px;
}

.fill-width {
  width: 100% !important;
}

.fill {
  width: 100% !important;
  height: 100% !important;
}
</style>