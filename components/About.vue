<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-10 ml-16"># ABOUT</h1>
    <v-col cols="12" justify="flex-column justify-space-around">
      <v-row justify="center" class="ma-0 mb-10 align-center">
        <v-col xl="6" lg="8" md="10" sm="10">
          <v-card color="primary" tile class="lighten-1 pa-16 text-subtitle-1">
            <div class="mb-3">
              Hi. I am <span :class="vit">Soroush Kavousi</span>, a passionate
              <span :class="vit">Backend Developer</span>. I was born in 1995,
              and I have studied <span :class="vit">Software Engineering</span>.
            </div>
            <div>
              As I love computer programming, I have done programming in many
              areas such as
              <i>
                Game Development, Web Development, Blockchain projects, and
                Desktop Development</i
              >.
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="ma-0 align-center">
        <v-col xl="3" lg="5" md="7" sm="7">
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
                d-flex
                justify-center
                align-center
                text-center
              "
              ><div class="text-center">Contact</div></v-card-title
            >
            <v-card-text class="secondary--text text--lighten-2 px-6">
              <v-row class="my-0">
                <v-col
                  md="3"
                  sm="10"
                  class="px-0 py-0 text-overline font-weight-bold"
                >
                  Email:
                </v-col>
                <v-col md="8" sm="10" class="px-0 py-0 d-flex align-center">
                  <p class="ma-0 pa-0">
                    <a
                      href="mailto:soroushkavousi.me@gmail.com"
                      class="text-body-2 px-0 py-auto"
                    >
                      SoroushKavousi.me@gmail.com
                    </a>
                  </p>
                </v-col>
              </v-row>

              <v-row class="my-0">
                <v-col
                  md="3"
                  sm="10"
                  class="px-0 py-0 text-overline font-weight-bold"
                  >Phone:
                </v-col>
                <v-col
                  md="8"
                  sm="10"
                  class="px-0 py-0 text-body-2 d-flex align-center"
                >
                  <div class="px-0 py-auto">+98 9120910637</div>
                </v-col>
              </v-row>

              <v-row
                class="pa-0 mt-4 mb-n3"
                align="center"
                justify-md="center"
                justify="space-around"
              >
                <v-col
                  cols="1"
                  v-for="(link, i) in links"
                  :key="i"
                  class="d-flex justify-center mx-7"
                >
                  <a :href="link.href">
                    <v-icon
                      class="px-auto"
                      v-if="link.icon"
                      size="45px"
                      color="secondary lighten-2"
                    >
                      {{ link.icon }}
                    </v-icon>
                    <v-img v-else-if="link.image" :src="link.image"> </v-img>
                  </a>
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          href: 'https://t.me/soroushkavousi',
          icon: 'fa-brands fa-telegram',
        },
        {
          href: 'https://github.com/soroushkavousi',
          icon: 'devicon-github-original-wordmark',
        },
        {
          href: 'https://www.linkedin.com/in/soroushkavousi/',
          icon: 'devicon-linkedin-plain',
        },
      ],
    }
  },
  computed: {
    vit() {
      return `font-weight-black accent--text text--lighten-2 ma-0 pa-0`
    },
  },
}
</script>


<style scoped>
</style>
