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
        sm="8"
        class="d-flex justify-center ma-0 pa-0 mb-10"
        :class="{
          'mr-10': $vuetify.breakpoint.smAndDown ? false : true,
        }"
      >
        <v-card
          color="primary darken-1"
          tile
          width="100%"
          :min-height="topRowMinHeight"
          :min-width="300"
          :height="$vuetify.breakpoint.smAndDown ? 'auto' : '100%'"
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
                text-xl-h4 text-lg-h5 text-md-h5 text-sm-h4
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
              :style="{ 'line-height': '23px' }"
            >
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
        :height="$vuetify.breakpoint.smAndDown ? 'auto' : height"
        :views="views"
        @onMaximize="onMaximize"
        ref="carousel"
      ></the-project-carousel>
    </v-row>
    <v-dialog v-model="carouselDialog" fullscreen>
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
        <v-row justify="center" class="mt-10 flex-shrink-0">
          <the-project-carousel
            class="d-flex"
            :height="dialogHeight"
            :views="views"
            @viewClicked="carouselDialog = false"
            :initialIndex="carouselIndex"
            ref="dialogCarousel"
          ></the-project-carousel
        ></v-row>
      </v-overlay>
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
      dialogHeight: 650,
      topRowMinHeight: 650,
    }
  },
  computed: {},
  methods: {
    calculateHeight() {
      let height
      if (this.windowWidth < this.$store.state.sm) {
        height = 550
        console.log(`#1 - height: ${height}`)
        return height
      } else if (this.windowWidth < this.$store.state.md) {
        height = this.$calculateCurrentY(
          this.windowWidth,
          this.$store.state.sm,
          this.$store.state.md,
          400,
          600
        )
        console.log(`#2 - height: ${height}`)
        return height
      } else {
        height = this.$calculateCurrentY(
          this.windowWidth,
          this.$store.state.md,
          this.$store.state.lg,
          530,
          this.topRowMinHeight - 3
        )
        console.log(`#3 - height: ${height}`)
        return height
      }
    },
    calculateDialogHeight() {
      let height
      if (this.windowWidth < this.$store.state.xs) {
        height = this.$calculateCurrentY(
          this.windowWidth,
          0,
          this.$store.state.xs,
          200,
          500
        )
      } else if (this.windowWidth < this.$store.state.sm) {
        height = this.$calculateCurrentY(
          this.windowWidth,
          this.$store.state.xs,
          this.$store.state.sm,
          500,
          650
        )
      } else if (this.windowWidth < this.$store.state.md) {
        height = this.$calculateCurrentY(
          this.windowWidth,
          this.$store.state.sm,
          this.$store.state.md,
          700,
          800
        )
      } else {
        height = this.$calculateCurrentY(
          this.windowWidth,
          this.$store.state.md,
          this.$store.state.lg,
          750,
          790
        )
      }
      console.log(`calculateDialogHeight: ${height}`)
      return height
    },
    onMaximize(carouselIndex) {
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
      this.height = this.calculateHeight()
      this.dialogHeight = this.calculateDialogHeight()
    },
  },
  watch: {
    carouselIndex(newValue, oldValue) {
      console.log(
        `The Project => carouselIndex: ${this.carouselIndex} | newValue: ${newValue} | oldValue: ${oldValue}`
      )
    },
    windowWidth(newWidth, oldWidth) {},
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