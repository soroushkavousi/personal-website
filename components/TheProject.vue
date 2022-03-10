<template>
  <v-container>
    <v-row justify="center" class="mb-16 mt-0">
      <v-col cols="4" class="mx-0 pa-0">
        <v-card
          color="primary lighten-1"
          tile
          :height="height"
          class="fill-height pa-6 d-flex flex-column justify-space-between"
        >
          <div>
            <v-card-title class="text-h4 mb-3">{{ title }}</v-card-title>
            <v-card-text>
              <slot name="description"></slot>
            </v-card-text>
          </div>
          <div>
            <v-divider></v-divider>
            <v-card-text class="my-2 py-2">
              <p class="mb-1">Stack:</p>
              <v-chip
                class="text-caption ma-1"
                v-for="(item, i) in stack"
                :key="i"
                >{{ item }}</v-chip
              >
            </v-card-text>
            <v-divider></v-divider>
            <v-card-text class="my-2 py-2">
              <p class="mb-1">Links:</p>
              <v-chip-group column class="mt-0">
                <v-chip
                  class="text-caption ma-1"
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
      <v-card
        color="primary lighten-0"
        tile
        :height="height"
        :width="carouselWidth"
      >
        <!-- <v-col cols="6" class="mx-0 px-0"> -->
        <v-carousel v-model="model" height="100%">
          <v-carousel-item eager v-for="(view, i) in views" :key="i">
            <v-responsive
              :aspect-ratio="16 / 9"
              :height="viewImageHeight"
              :max-height="viewImageHeight"
              :max-width="carouselWidth"
            >
              <v-img
                contain
                :src="view.image"
                class="ma-0"
                position="center top"
                :aspect-ratio="16 / 9"
                :height="viewImageHeight"
                :max-height="viewImageHeight"
                :max-width="carouselWidth"
              ></v-img>
            </v-responsive>

            <v-card
              color="primary lighten-0"
              tile
              elevation="5"
              :height="viewDescriptionHeight"
              :width="carouselWidth"
            >
              <div
                fill-height
                class="
                  py-3
                  px-5
                  ma-0
                  d-flex
                  flex-column
                  justify-space-around
                  align-content-space-between
                  fill-height
                "
              >
                <v-card-title class="text-subtitle-1 pa-0 ma-0">
                  {{ view.title }}
                </v-card-title>
                <v-card-text class="ma-0 pa-0"
                  ><div v-html="view.description" class="text-caption"></div
                ></v-card-text>
              </div>
            </v-card>
          </v-carousel-item>
        </v-carousel>
        <!-- </v-col> -->
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['title', 'stack', 'links', 'views'],
  data() {
    return {
      model: 0,
      colors: ['primary', 'secondary', 'yellow darken-2', 'red', 'orange'],
      height: 550,
      carouselActionBarHeight: 50,
      viewDescriptionHeight: 120,
    }
  },
  computed: {
    viewImageHeight() {
      return (
        this.height - this.viewDescriptionHeight - this.carouselActionBarHeight
      )
    },
    carouselWidth() {
      return (16 / 9) * this.viewImageHeight
    },
  },
}
</script>

<style lang="css" scoped>
</style>