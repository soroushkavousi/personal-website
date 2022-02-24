<template>
  <v-app>
    <TheNavigation />
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
