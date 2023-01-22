<template>
  <v-card
    color="primary lighten-0"
    tile
    class="ma-0 pa-0"
    height="auto"
    width="100%"
  >
    <v-carousel
      v-model="index"
      class="fill-width"
      :continuous="false"
      height="auto"
    >
      <v-carousel-item
        eager
        v-for="(view, i) in views"
        :key="i"
        class="fill-width"
        :style="carouselItemStyle"
      >
        <div class="d-flex flex-column fill-width">
          <v-responsive
            :aspect-ratio="viewRatio"
            class="fill-width flex-grow-0 overflow-y-auto"
            width="100%"
            height="auto"
          >
            <v-overlay :absolute="true" :value="true" :opacity="0.25">
            </v-overlay>
            <div
              v-if="!hideImageButtons"
              class="image-button-bar d-flex justify-space-between align-center px-0 pb-1"
              :style="{ backgroundColor: 'rgba(7, 8, 20, 0.7)' }"
            >
              <div
                v-for="(button, i) in imageButtons"
                :key="i"
                @click.stop="onImageButtonClicked(button.name, index, view)"
                class="mx-1"
              >
                <v-tooltip top class="mb-n11">
                  <template v-slot:activator="{ on, attrs }">
                    <v-icon
                      v-bind="attrs"
                      v-on="on"
                      :size="button.size"
                      color="secondary darken-1"
                    >
                      {{ button.icon }}
                    </v-icon>
                  </template>
                  <span class="secondary--text text--lighten-1">
                    {{ button.tooltip }}
                  </span>
                </v-tooltip>
              </div>
            </div>
            <v-img
              contain
              :src="view.image"
              class="ma-0 pa-0"
              position="center top"
              :aspect-ratio="viewRatio"
              width="100%"
              height="100%"
            >
            </v-img>
          </v-responsive>

          <v-card
            color="primary lighten-0"
            tile
            width="100%"
            :height="descriptionHeight + 'px'"
            :max-height="descriptionHeight + 'px'"
            class="px-5 ma-0 py-3 d-flex flex-column justify-content-center justify-center overflow-y-auto overflow-x-hidden"
          >
            <v-card-title class="text-lg-body-1 text-sm-body-2 pa-0 ma-0 mb-3">
              {{ view.title }}
            </v-card-title>
            <v-card-text
              class="mt-0 mb-0 mx-1 pa-0"
              :style="{ height: 'max-content', 'min-height': '2rem' }"
            >
              <div
                v-html="view.description"
                class="text-xl-subtitle-2 text-lg-caption text-md-subtitle-2 text-caption"
              ></div>
            </v-card-text>
          </v-card>
        </div>
      </v-carousel-item>
    </v-carousel>
  </v-card>
</template>

<script>
export default {
  props: ['views', 'initialIndex', 'hideImageButtons'],
  emits: ['onMaximize'],
  data() {
    return {
      viewRatio: 16 / 9,
      controlsHeight: 50,
      descriptionHeight: 150,
      index: 0,
      imageButtons: [
        {
          name: 'open-in-new',
          icon: 'mdi-open-in-new',
          tooltip: 'Open image in a new tab',
          size: 20,
        },
        // <!-- *** Commented codes is for fullscreen view *** -->
        // {
        //   name: 'fullscreen',
        //   icon: 'mdi-fullscreen',
        //   tooltip: 'Full screen',
        //   size: 30,
        // },
      ],
    }
  },
  methods: {
    changeIndex(index) {
      this.index = index
    },
    onImageButtonClicked(buttonName, index, view) {
      switch (buttonName) {
        case 'open-in-new':
          this.openImage(view.image)
          break
        case 'fullscreen':
          this.$emit('onMaximize', index)
          break
      }
    },
    openImage(url) {
      if (this.hideImageButtons) return
      window.open(url, '_blank')
    },
  },
  mounted() {
    this.index = this.initialIndex
  },
  computed: {
    carouselItemStyle() {
      return {
        'padding-bottom': `${this.controlsHeight}px !important`,
        height: 'auto',
      }
    },
  },
}
</script>

<style lang="css" scoped>
:deep(p) {
  height: max-content;
  overflow: auto;
}

.image-button-bar {
  position: absolute;
  bottom: 0px;
  right: 0px;
  z-index: 10;
}

:deep(.v-window__next) {
  top: calc(42%) !important;
}

:deep(.v-window__prev) {
  top: calc(42%) !important;
}
</style>
