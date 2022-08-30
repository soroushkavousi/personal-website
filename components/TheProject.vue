<template>
  <v-container fluid class="ma-0 pa-0">
    <v-row
      justify="center"
      :align-content="$store.state.breakpoint.isSmOrDown ? 'center' : 'start'"
      :align="$store.state.breakpoint.isSmOrDown ? 'center' : 'start'"
      class="my-5"
      :class="{
        'flex-column': $store.state.breakpoint.isSmOrDown ? true : false,
      }"
    >
      <v-col
        xl="4"
        lg="4"
        md="4"
        sm="8"
        class="d-flex justify-center ma-0 pa-0 mb-10"
        :class="{
          'mr-10': $store.state.breakpoint.isSmOrDown ? false : true,
        }"
      >
        <v-card
          color="primary darken-1"
          tile
          width="100%"
          :min-height="topRowMinHeight"
          :min-width="300"
          :height="$store.state.breakpoint.isSmOrDown ? 'auto' : '100%'"
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
                text-xl-h5 text-lg-h5 text-md-h5 text-sm-h4
                font-weight-black
                ma-0
                mb-4
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
                :small="$store.state.breakpoint.isMdOrDown ? true : false"
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
                  :small="$store.state.breakpoint.isMdOrDown ? true : false"
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
        :height="$store.state.breakpoint.isSmOrDown ? 'auto' : height"
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
            :hideImageButtons="true"
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
      dialogHeight: 650,
      topRowMinHeight: 650,
      carouselIndex: 0,
      carouselDialog: false,
    }
  },
  computed: {},
  methods: {
    onMaximize(carouselIndex) {
      this.carouselIndex = carouselIndex
      if (this.$refs.dialogCarousel != null) {
        this.$refs.dialogCarousel.index = this.carouselIndex
      }
      this.carouselDialog = true
    },
    closeDialog() {
      this.$refs.carousel.index = this.$refs.dialogCarousel.index
      this.carouselDialog = false
    },
    onResize() {
      this.updateHeight()
      this.updateDialogHeight()
    },
    updateHeight() {
      if (typeof window == 'undefined') return 550

      if (this.$store.state.breakpoint.isSmOrDown) {
        this.height = 550
      } else if (this.$store.state.breakpoint.isMdOrDown) {
        this.height = this.$calculateCurrentY(
          window.innerWidth,
          this.$store.state.breakpoint.sm,
          this.$store.state.breakpoint.md,
          400,
          600
        )
      } else {
        this.height = this.$calculateCurrentY(
          window.innerWidth,
          this.$store.state.breakpoint.md,
          this.$store.state.breakpoint.lg,
          530,
          this.topRowMinHeight - 3
        )
      }
    },
    updateDialogHeight() {
      if (typeof window == 'undefined') return 650

      if (this.$store.state.breakpoint.isXsOrDown) {
        this.dialogHeight = this.$calculateCurrentY(
          window.innerWidth,
          0,
          this.$store.state.breakpoint.xs,
          200,
          500
        )
      } else if (this.$store.state.breakpoint.isSmOrDown) {
        this.dialogHeight = this.$calculateCurrentY(
          window.innerWidth,
          this.$store.state.breakpoint.xs,
          this.$store.state.breakpoint.sm,
          500,
          650
        )
      } else if (this.$store.state.breakpoint.isMdOrDown) {
        this.dialogHeight = this.$calculateCurrentY(
          window.innerWidth,
          this.$store.state.breakpoint.sm,
          this.$store.state.breakpoint.md,
          700,
          800
        )
      } else {
        this.dialogHeight = this.$calculateCurrentY(
          window.innerWidth,
          this.$store.state.breakpoint.md,
          this.$store.state.breakpoint.lg,
          750,
          790
        )
      }
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
}
</script>

<style scoped>
</style>