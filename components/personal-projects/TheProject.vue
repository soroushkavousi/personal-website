<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row justify="center" class="mt-5 mb-16" dense>
      <v-col
        xl="4"
        lg="4"
        md="10"
        cols="12"
        class="ma-0 pa-0 mb-10"
        :class="{
          'mr-10': $store.state.breakpoint.isMdOrDown ? false : true,
        }"
        :style="{ height: descriptionHeight }"
      >
        <the-project-description :title="title" :stack="stack" :links="links">
          <template v-slot:description>
            <slot name="description"></slot>
          </template>
        </the-project-description>
      </v-col>
      <v-col xl="7" lg="7" md="10" cols="12" class="ma-0 pa-0">
        <the-project-carousel
          :views="views"
          ref="carousel"
        ></the-project-carousel>
      </v-col>
    </v-row>

    <!-- *** Commented codes is for fullscreen view *** -->
    <!-- <v-dialog
      v-model="carouselDialog"
      fullscreen
      width="100$"
      :scrollable="false"
      class="ma-0 pa-0"
    >
      <v-overlay
        color="black"
        opacity="0.85"
        class="fill ma-0 pa-0 overflow-y-auto"
      >
        <v-row justify="center" class="ma-0 pa-0 flex-shrink-0 fill-width">
          <v-col cols="6" class="ma-0 pa-0 d-flex flex-column justify-top">
            <v-row
              justify="end"
              class="ma-0 pa-0 d-flex flex-grow-0 flex-shrink-1"
            >
              <v-btn
                right
                color="red lighten-0 "
                text
                @click="closeDialog"
                height="60px"
                class="text-h4 pa-0 ma-0 d-flex justify-end"
              >
                <v-icon class="ma-0" :size="40"> mdi-close-circle </v-icon>
              </v-btn>
            </v-row>
            <v-row justify="center" class="ma-0 pa-0">
              <the-project-carousel
                :views="views"
                @viewClicked="carouselDialog = false"
                :initialIndex="carouselIndex"
                :hideImageButtons="true"
                ref="dialogCarousel"
              >
              </the-project-carousel>
            </v-row>
          </v-col>
        </v-row>
      </v-overlay>
    </v-dialog> -->
  </v-container>
</template>

<script>
export default {
  props: ['title', 'stack', 'links', 'views'],
  data() {
    return {
      descriptionHeight: '640px',
      // carouselIndex: 0,
      // carouselDialog: false,
    }
  },
  methods: {
    onResize() {
      this.updateDescriptionHeight()
    },
    updateDescriptionHeight() {
      if (this.$store.state.breakpoint.isMdOrDown) {
        this.descriptionHeight = 'auto'
        return
      }
      if (this.$refs.carousel == null) this.descriptionHeight = '640px'
      else this.descriptionHeight = this.$refs.carousel.$el.clientHeight + 'px'
    },
    // onMaximize(carouselIndex) {
    //   this.carouselIndex = carouselIndex
    //   if (this.$refs.dialogCarousel != null) {
    //     this.$refs.dialogCarousel.index = this.carouselIndex
    //   }
    //   this.carouselDialog = true
    // },
    // closeDialog() {
    //   this.$refs.carousel.index = this.$refs.dialogCarousel.index
    //   this.carouselDialog = false
    // },
  },
  mounted() {
    this.index = this.initialIndex
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    this.onResize()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  updated() {
    this.updateDescriptionHeight()
  },
}
</script>

<style scoped>
/* :deep(.v-overlay__content) {
  height: 100% !important;
  width: 100% !important;
}*/
</style>