<template>
  <v-app>
    <TheNavigation width="20%" />
    <v-main>
      <v-container fluid fill-height class="primary lighten-0">
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
  watch: {
    $route(to, from) {
      console.log(`$route: `)
      console.dir(to)
      console.dir(from)
    },
  },
  beforeRouteUpdate(to, from, next) {
    console.log(`beforeRouteUpdate: `)
    console.dir(to)
    console.dir(from)
    next()
  },
  created() {
    console.log('mounted')
    // this.$router.replace('about')
  },
}
</script>

<style>
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

/* ::v-deep i a {
  text-decoration: none;
  color: var(--v-accent-lighten2) !important;
}

::v-deep p a:hover,
::v-deep p a:active {
  color: var(--v-accent-lighten3) !important;
} */
</style>
