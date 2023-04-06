<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-lg-16 mb-0 ml-16">
      # ABOUT
    </h1>
    <v-col cols="12" justify="flex-column justify-space-around py-0">
      <v-row justify="center" class="ma-0 mt-2 mb-10 align-center">
        <v-col
          xl="7"
          lg="7"
          md="10"
          sm="12"
          cols="12"
          class="mx-xl-16 mx-lg-8 my-lg-0 my-10"
        >
          <v-card
            color="primary"
            tile
            class="lighten-1 pt-15 pb-13 px-16 text-md-subtitle-1 text-subtitle-2"
          >
            <div class="mb-5">
              I am a <span :class="vit">Backend Developer</span> with over 4
              years of experience. I am passionate about exploring cutting-edge
              tools and techniques to develop a high-performance, scalable, and
              reliable system.
            </div>

            <div class="mb-5">
              Apart from backend development, I have also tested my programming
              skills in other areas, such as web development, cryptocurrency
              solutions, and game development.
            </div>

            <div class="mb-5">
              If you ask about my personality, I would say that when I play a
              video game, I always ask myself, what is the best build I can get?
              Or what is the best approach I can take for this mission?
              Sometimes it immerses me for hours to discover.
            </div>

            <div class="mb-5">
              The question "Is there a better way?" is important to me. I always
              want to understand a system to find a high-quality approach. For
              that, I would think, search, and test many times to discover. And
              this is exactly what I do when I am coding.
            </div>

            <div class="text-caption mb-8">
              <code
                class="font-weight-light px-2 py-1"
                :style="{ 'line-height': '1.55rem' }"
              >
                var myInterests = new List&#60;string&#62; { "coding",
                "technology", "learning", "creating", "gaming" };
              </code>
            </div>

            <p
              class="ma-0 d-flex flex-shrink-1 flex-grow-0"
              style="margin-left: -2.5px !important"
            >
              <v-hover v-slot="{ hover }">
                <a
                  class="d-flex justify-start align-center flex-shrink-1 flex-grow-0"
                  href="https://files.bitiano.com/soroush-kavousi-cv.pdf"
                  target="_blank"
                >
                  <v-icon
                    :size="30"
                    :color="hover ? 'accent lighten-1' : 'secondary darken-0'"
                    class="mr-1"
                  >
                    mdi-file-download
                  </v-icon>
                  Download soroush-kavousi-cv.pdf
                </a>
              </v-hover>
            </p>
          </v-card>
        </v-col>
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
                      <p
                        class="ma-0 pa-0"
                        :style="{ 'padding-bottom': '2px !important' }"
                      >
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
                  target="_blank"
                >
                  <v-hover v-slot="{ hover }">
                    <v-icon
                      class="px-auto"
                      v-if="link.icon"
                      size="45px"
                      :color="hover ? 'accent lighten-1' : 'secondary darken-0'"
                    >
                      {{ link.icon }}
                    </v-icon>
                    <v-img v-else-if="link.image" :src="link.image"> </v-img>
                  </v-hover>
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
