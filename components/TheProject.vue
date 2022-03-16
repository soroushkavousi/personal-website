<template>
  <v-container fluid>
    <v-row justify="center" class="my-5 fill-height">
      <v-col
        xl="4"
        lg="5"
        md="5"
        sm="5"
        class="d-flex justify-center ma-0 pa-0 fill-height"
      >
        <v-card
          color="primary darken-1"
          tile
          width="100%"
          class="fill-height px-5 py-4 d-flex flex-column justify-space-between"
        >
          <div>
            <v-card-title
              class="text-lg-h4 text-sm-body-2 font-weight-black ma-0"
            >
              {{ title }}
            </v-card-title>
            <v-card-text class="my-2 text-lg-body-2 text-sm-caption">
              <!-- <p class="mb-2">Description:</p> -->
              <slot name="description"></slot>
            </v-card-text>
          </div>
          <div>
            <v-divider></v-divider>
            <v-card-text class="">
              <p class="mb-1">Stack:</p>
              <v-chip
                class="text-caption ma-1"
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
      <v-col xl="5" lg="6" md="6" sm="6" class="ma-0 pa-0 fill-height">
        <the-project-carousel :views="views"></the-project-carousel>
      </v-col>
    </v-row>
    <!-- <v-row justify="center" v-if="imageDialog == true">
      <v-dialog v-model="imageDialog" persistent width="60%">
        <v-card>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text @click="imageDialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
        <v-responsive :aspect-ratio="16 / 9">
          <v-img
            contain
            :src="views[model].image"
            class="ma-0"
            position="center top"
            :aspect-ratio="16 / 9"
            @click="imageDialog = false"
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
      </v-dialog>
    </v-row> -->
  </v-container>
</template>

<script>
export default {
  props: ['title', 'stack', 'links', 'views'],
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
      return (16 / 9) * this.viewImageHeight
    },
  },
}
</script>

<style lang="css" scoped>
.view-inside {
  width: 100%;
  height: 100%;
}

.container {
  width: 100% !important;
  height: 60vh !important;
}
</style>