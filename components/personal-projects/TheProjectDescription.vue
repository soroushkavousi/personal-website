<template>
  <v-card
    color="primary darken-1"
    tile
    width="100%"
    height="100%"
    class="pa-7 d-flex flex-column justify-space-between overflow-y-auto"
  >
    <v-card-title
      class="text-xl-h5 text-lg-h5 text-md-h5 text-h6 font-weight-black ma-0 mb-0 accent--text text--lighten-1"
    >
      {{ title }}
    </v-card-title>
    <v-card-text
      class="mt-3 mb-8 py-0 text-md-body-2 text-sm-subtitle-2 secondary--text d-flex flex-column flex-grow-1 text-justify overflow-y-auto"
      :style="{ 'line-height': '23px' }"
    >
      <slot name="description" class=""></slot>
    </v-card-text>
    <div>
      <v-divider></v-divider>
      <v-card-text class="py-2 px-0">
        <v-chip-group column class="mt-0">
          <span class="my-auto ml-2 mr-2">Stack:</span>
          <v-chip
            :small="$store.state.breakpoint.isMdOrDown ? false : true"
            :x-small="$store.state.breakpoint.isMdOrDown ? true : false"
            class="mx-1 my-2 py-md-3 py-2"
            v-for="(item, i) in stack"
            :key="i"
            >{{ item }}
          </v-chip>
        </v-chip-group>
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text class="py-2 px-0">
        <v-chip-group column class="mt-0">
          <span class="my-auto ml-2 mr-2">Links:</span>
          <v-chip
            :small="$store.state.breakpoint.isSmOrDown ? true : false"
            class="mx-1 my-2 py-4"
            v-for="(link, i) in links"
            :key="i"
            :href="link.address"
            target="_blank"
            color="accent"
          >
            <v-avatar left>
              <v-icon dense> {{ link.icon }}</v-icon>
            </v-avatar>
            {{ link.name }}</v-chip
          >
        </v-chip-group>
      </v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ['title', 'stack', 'links'],
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
</script>

<style lang="css" scoped></style>
