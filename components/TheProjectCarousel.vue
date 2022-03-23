<template>
  <v-card
    color="primary lighten-0"
    tile
    class="ma-0 pa-0"
    :height="$vuetify.breakpoint.smAndDown ? 'auto' : height"
    :width="carouselMaxWidth"
    ref="rootCard"
  >
    <!-- @change="$emit('update:model', $event.target.value)" -->
    <v-carousel v-model="index" class="fill" height="auto">
      <v-carousel-item
        eager
        v-for="(view, i) in views"
        :key="i"
        class="fill"
        :style="carouselItemStyle"
      >
        <div class="d-flex flex-column fill">
          <v-responsive
            :aspect-ratio="viewRatio"
            class="fill-width flex-grow-0 overflow-y-auto"
            width="100%"
            height="auto"
            :max-height="viewMaxHeight"
            ref="carousel"
          >
            <!-- <a :href="view.image" target="_blank" class="fill"> -->
            <v-img
              contain
              :src="view.image"
              class="ma-0 pa-0"
              position="center top"
              :aspect-ratio="viewRatio"
              width="100%"
              height="100%"
              @click="$emit('viewClicked', index)"
            ></v-img>
            <!-- </a> -->
          </v-responsive>

          <v-card
            color="primary lighten-0"
            tile
            width="100%"
            height="auto"
            :min-height="descriptionMinHeight"
            :max-height="descriptionMaxHeight"
            class="
              px-5
              ma-0
              py-3
              d-flex
              flex-column
              justify-content-center justify-center
              overflow-y-auto overflow-x-hidden
            "
          >
            <v-card-title class="text-sm-body-2 text-lg-body-1 pa-0 ma-0 mb-2">
              {{ view.title }}
            </v-card-title>
            <v-card-text
              class="mt-0 mb-0 mx-1 pa-0"
              :style="{ height: 'max-content', 'min-height': '2rem' }"
            >
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
  props: ['height', 'views', 'initialIndex'],
  emits: ['viewClicked'],
  data() {
    return {
      viewRatio: 16 / 9,
      controlsHeight: 50,
      descriptionMinHeight: 150,
      descriptionMaxHeight: 0,
      index: 0,
    }
  },
  methods: {
    changeIndex(index) {
      this.index = index
    },
    onResize() {
      this.descriptionMaxHeight =
        this.height -
        this.$refs.carousel[0].$el.clientHeight -
        this.controlsHeight
    },
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
  computed: {
    carouselItemStyle() {
      return {
        'padding-bottom': `${this.controlsHeight}px !important`,
      }
    },
    viewMaxHeight() {
      return this.height - this.descriptionMinHeight - this.controlsHeight
    },
    carouselMaxWidth() {
      return this.viewMaxHeight * this.viewRatio
    },
  },
}
</script>

<style lang="css" scoped>
::v-deep p {
  height: max-content;
  overflow: auto;
}
</style>