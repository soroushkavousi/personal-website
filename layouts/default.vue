<template>
  <v-app>
    <TheNavigation ref="navigation" />
    <v-main
      :style="{
        'padding-left': $vuetify.breakpoint.mdAndDown ? '56px' : 'auto',
      }"
    >
      <v-container
        fluid
        fill-height
        class="primary lighten-0"
        @click="onMainContainerClicked"
      >
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      isOutsideClicked: false,
    }
  },
  watch: {
    $route(to, from) {
      console.dir(to)
      console.dir(from)
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.dir(to)
    console.dir(from)
    next()
  },
  created() {},
  methods: {
    onMainContainerClicked() {
      this.$refs.navigation.outsideClicked()
    },
  },
}
</script>

<style>
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

/* :deep(i a) {
  text-decoration: none;
  color: var(--v-accent-lighten2) !important;
}

:deep(p a:hover),
:deep(p a:active) {
  color: var(--v-accent-lighten3) !important;
} */
</style>
