<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-4 ml-16"># ABOUT</h1>
    <v-col cols="12" justify="flex-column justify-space-around">
      <v-row justify="center" class="ma-0 mt-8 mb-10 align-center">
        <v-col xl="7" lg="9" md="10" sm="12" cols="12">
          <v-card
            color="primary"
            tile
            class="lighten-1 pa-14 text-md-subtitle-1 text-subtitle-2 text-justify"
          >
            <div class="mb-5">
              Hi. I'm <span :class="vit">Soroush Kavousi</span>, a passionate
              <span :class="vit">Backend Developer</span>. I was born in 1995,
              and I have studied Software Engineering.
            </div>
            <div class="mb-5">
              I love coding and creating softwares with structured,
              maintainable, and performant code. I have tested my programming
              skills in many areas, such as backend development, cryptocurrency
              solutions, game development, and web development.
            </div>
            <div>
              <code
                class="text-md-body-2 text-caption font-weight-light px-2 py-1"
              >
                var myInterests = new List&#60;string&#62; { "coding", "gaming",
                "technology", "learning", "creating" };
              </code>
            </div>
          </v-card>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-0 align-center">
        <v-col xl="3" lg="4" md="5" sm="8" cols="12">
          <v-card color="primary pt-8" tile class="lighten-1">
            <v-card-title
              class="text-h4 font-weight-light secondary--text text--darken-2 ma-0 pa-0 d-flex justify-center"
              >Contact</v-card-title
            >
            <v-card-text
              class="secondary--text text--lighten-2 ma-0 pa-0 d-flex flex-column flex-grow-1"
            >
              <v-row class="mx-0 mt-4 mb-6" align="center" justify="center">
                <v-col align-self="center" cols="9">
                  <v-row align="center" justify="center">
                    <div class="pr-3 py-0 text-overline font-weight-regular">
                      Email:
                    </div>
                    <div>
                      <p class="ma-0 pa-0">
                        <a
                          href="mailto:soroushkavousi.me@gmail.com"
                          class="text-md-body-2 text-subtitle-2 px-0 py-auto font-weight-light"
                          style="word-wrap: break-word"
                        >
                          soroushkavousi.me@gmail.com
                        </a>
                      </p>
                    </div>
                  </v-row>
                </v-col>
              </v-row>

              <v-row class="pa-0 ma-0" align="center" justify="center">
                <a
                  v-for="(link, i) in links"
                  :key="i"
                  :href="link.href"
                  class="mx-3 mb-9"
                >
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
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
      <v-row class="my-11"></v-row>
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
p a {
  color: var(--v-secondary) !important;
}

p a:hover,
p a:active {
  color: var(--v-accent-lighten2) !important;
}
</style>
