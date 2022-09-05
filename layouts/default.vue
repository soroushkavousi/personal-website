<template>
  <v-app>
    <TheNavigation />
    <v-main>
      <v-container
        fluid
        fill-height
        class="primary lighten-0 py-0"
        :class="{ 'pl-14': $store.state.breakpoint.isMdOrDown }"
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {}
  },
  created() {},
  methods: {
    onResize() {
      this.$store.commit('breakpoint/update', window.innerWidth)
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    this.onResize()
  },
}
</script>

<style>
.vit {
  text-decoration: none;
  color: var(--v-accent-lighten2) !important;
}

.fill-width {
  width: 100% !important;
}

.fill {
  width: 100% !important;
  height: 100% !important;
}

a {
  text-decoration: none;
}

p a {
  color: var(--v-accent-lighten2) !important;
}

p a:hover,
p a:active {
  color: var(--v-accent-lighten3) !important;
}

b {
  font-weight: 600 !important;
}

/* :deep(i a) {
  text-decoration: none;
  color: var(--v-accent-lighten2) !important;
}

:deep(p a:hover),
:deep(p a:active) {
  color: var(--v-accent-lighten3) !important;
} */
</style>
