<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row
      justify="center"
      :align-content="$vuetify.breakpoint.smAndDown ? 'center' : 'start'"
      :align="$vuetify.breakpoint.smAndDown ? 'center' : 'start'"
      class="my-5"
      :class="{ 'flex-column': $vuetify.breakpoint.smAndDown ? true : false }"
    >
      <v-col
        xl="4"
        lg="4"
        md="4"
        sm="9"
        class="d-flex justify-center ma-0 pa-0 mb-10"
        :class="{
          'mr-10': $vuetify.breakpoint.smAndDown ? false : true,
        }"
      >
        <v-card
          color="primary darken-1"
          tile
          width="100%"
          :min-height="600"
          height="auto"
          class="
            px-5
            py-4
            d-flex
            flex-column
            justify-space-between
            overflow-y-auto
          "
        >
          <div>
            <v-card-title
              class="
                text-xl-h4 text-lg-h5 text-md-h5
                font-weight-black
                ma-0
                accent--text
                text--darken-1
              "
            >
              {{ title }}
            </v-card-title>
            <v-card-text
              class="my-2 text-md-body-2 text-sm-subtitle-2 overflow-y-auto"
            >
              <!-- <p class="mb-2">Description:</p> -->
              <slot name="description"></slot>
            </v-card-text>
          </div>
          <div>
            <v-divider></v-divider>
            <v-card-text class="">
              <p class="mb-1">Stack:</p>
              <v-chip
                :small="$vuetify.breakpoint.mdAndDown ? true : false"
                class="ma-1"
                v-for="(item, i) in stack"
                :key="i"
                >{{ item }}</v-chip
              >
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="">
              <p class="mb-1">Links:</p>
              <v-chip-group column class="mt-0">
                <v-chip
                  :small="$vuetify.breakpoint.mdAndDown ? true : false"
                  class="ma-1"
                  v-for="(link, i) in links"
                  :key="i"
                  :href="link.address"
                  target="_blank"
                  color="accent"
                >
                  <v-avatar left>
                    <v-icon> {{ link.icon }}</v-icon>
                  </v-avatar>
                  {{ link.name }}</v-chip
                >
              </v-chip-group>
            </v-card-text>
          </div>
        </v-card>
      </v-col>
      <the-project-carousel
        class="d-flex"
        :height="height"
        :views="views"
        @viewClicked="viewClicked"
        ref="carousel"
      ></the-project-carousel>
    </v-row>
    <v-dialog v-model="carouselDialog" width="80%" fullscreen>
      <v-overlay color="black" opacity="0.85">
        <v-row justify="end">
          <v-btn
            color="red lighten-0"
            text
            @click="closeDialog"
            class="text-h4"
          >
            Close
          </v-btn>
        </v-row>
        <v-row justify="center" class="my-10 flex-shrink-0">
          <the-project-carousel
            :views="views"
            @viewClicked="carouselDialog = false"
            :initialIndex="carouselIndex"
            ref="dialogCarousel"
            :style="{ height: '75vh', width: '75vw' }"
          ></the-project-carousel
        ></v-row>
      </v-overlay>
      <!-- <the-project-carousel :views="views" ></the-project-carousel> -->
      <!-- <v-row justify="center">
        <v-responsive :aspect-ratio="viewRatio"
              class="fill-width flex-grow-0"
              width="100%"
              height="auto">
          <v-img
            contain
            :src="views[model].image"
            class="ma-0"
            position="center top"
            :aspect-ratio="viewRatio"
            @click="carouselDialog = false"
          ></v-img>
        </v-responsive>
        <v-card>
          <v-card-title>
            <span class="text-h5">{{ views[model].title }}</span>
          </v-card-title>
          <v-card-text>
            <div v-html="views[model].description" class="text-caption"></div>
          </v-card-text>
        </v-card>
      </v-row> -->
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  props: ['title', 'stack', 'links', 'views'],
  data() {
    return {
      height: 550,
      carouselIndex: 0,
      carouselDialog: false,
      windowWidth: 0,
    }
  },
  computed: {},
  methods: {
    viewClicked(carouselIndex) {
      console.log(`carouselIndex: ${carouselIndex}`)
      this.carouselIndex = carouselIndex
      if (this.$refs.dialogCarousel != null) {
        this.$refs.dialogCarousel.index = this.carouselIndex
      }
      this.carouselDialog = true
    },
    closeDialog() {
      this.$refs.carousel.index = this.$refs.dialogCarousel.index
      this.carouselDialog = false
      console.log('Test')
    },
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
  watch: {
    carouselIndex(newValue, oldValue) {
      console.log(
        `The Project => carouselIndex: ${this.carouselIndex} | newValue: ${newValue} | oldValue: ${oldValue}`
      )
    },
    windowWidth(newWidth, oldWidth) {
      let height
      if (newWidth < this.$store.state.sm) {
        height = 550
        this.height = height
      } else if (newWidth < this.$store.state.md) {
        height = this.$calculateCurrentY(
          newWidth,
          this.$store.state.sm,
          this.$store.state.md,
          485,
          600
        )
        this.height = height
        // height = 0.45 * newWidth
        // this.height = this.$clamp(height, 550, 600)
      } else {
        height = this.$calculateCurrentY(
          newWidth,
          this.$store.state.md,
          this.$store.state.lg,
          530,
          624
        )
        this.height = height
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    this.onResize()
  },

  beforeDestroy() {
    window.removeEventListener('resize', this.onResize)
  },
  updated() {},
}
</script>

<style scoped>
</style>