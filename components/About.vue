<template>
  <v-container class="mx-12">
    <h1 class="accent--text text--lighten-2 text-h3 mb-16">#ABOUT</h1>
    <!-- <v-col class="text-center" cols="3">
      <v-card flat color="red">
        <v-card-text>
          <div class="text-h5">Hello</div>
        </v-card-text>
      </v-card> -->
    <!-- <h1 class="secondary--text text--lighten-2">Soroush Kavousi</h1> -->
    <!-- src="images/global/soroush.jpg" -->
    <!-- <img
          src="~/assets/images/global/soroush.jpg"
          alt="Soroush Kavousi"
          class="mb-5"
          height="300"
        /> -->
    <!-- Row 2
    </v-col> -->

    <!-- <v-row no-gutters>
      <v-col v-for="n in 1" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile> One of three columns </v-card>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col v-for="n in 2" :key="n" cols="12" sm="4">
        <v-card class="pa-2" outlined tile> One of three columns </v-card>
      </v-col>
    </v-row> -->

    <v-row justify="center" class="mb-16 mt-0">
      <v-col cols="8">
        <v-card color="primary" tile class="lighten-1 pa-16">
          <div>I'm Soroush Kavousi.</div>
          <div>I'm Soroush Kavousi.</div>
          <div>I'm Soroush Kavousi.</div>
          <div>I'm Soroush Kavousi.</div>
          <div>I'm Soroush Kavousi.</div>
          <div>I'm Soroush Kavousi.</div>
        </v-card>
      </v-col>
    </v-row>

    <v-row class="pt-10">
      <v-col xl="3" lg="4" md="8" sm="12">
        <v-card color="primary" tile class="lighten-1 px-6 py-9">
          <v-card-title
            class="
              text-h4
              font-weight-bold
              secondary--text
              text--darken-2
              mb-4
              px-6
              py-0
            "
            >Contact</v-card-title
          >
          <v-card-text class="secondary--text text--lighten-2 px-6">
            <v-row class="my-0">
              <v-col cols="3" class="px-0 py-0 text-overline font-weight-bold">
                Email:
              </v-col>
              <v-col cols="8" class="px-0 py-0 d-flex align-center">
                <a
                  href="mailto:name@email.com"
                  class="text-body-2 px-0 py-auto"
                >
                  SoroushKavousi.me@gmail.com
                </a>
              </v-col>
            </v-row>

            <v-row class="my-0">
              <v-col cols="3" class="px-0 py-0 text-overline font-weight-bold"
                >Phone:
              </v-col>
              <v-col cols="8" class="px-0 py-0 text-body-2 d-flex align-center">
                <div class="px-0 py-auto">+98 9120910637</div>
              </v-col>
            </v-row>

            <v-row
              class="pa-0 mt-4 mb-n3"
              align="center"
              justify="space-around"
            >
              <div
                v-for="(link, i) in links"
                :key="i"
                class="d-flex justify-center mx-4"
              >
                <a :href="link.name">
                  <v-icon
                    class="mx-3 px-auto"
                    v-if="link.icon"
                    size="55px"
                    color="secondary lighten-2"
                  >
                    {{ link.icon }}
                  </v-icon>
                  <v-img v-else-if="link.image" :src="link.image"> </v-img>
                </a>
              </div>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          name: 'https://github.com/soroushkavousi',
          icon: 'devicon-github-original-wordmark',
        },
        {
          name: 'https://www.linkedin.com/in/soroushkavousi.me',
          icon: 'devicon-linkedin-plain',
        },

        // {
        //   name: '<p class="ma-0">PostgreSQL</p><p class="ma-0">pgAdmin</p>',
        //   icon: 'devicon-postgresql-plain-wordmark',
        // },
        // {
        //   name: 'Nginx',
        //   icon: 'devicon-nginx-original',
        // },
        // {
        //   name: 'Django',
        //   icon: 'devicon-django-plain',
        // },
      ],
    }
  },
}
</script>


<style scoped>
a {
  text-decoration: none;
  color: var(--v-secondary-lighten2) !important;
}

a:hover,
a:active {
  color: var(--v-accent-lighten1) !important;
}
</style>
