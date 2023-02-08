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
            class="lighten-1 py-15 px-16 text-md-subtitle-1 text-subtitle-2"
          >
            <div class="mb-5">
              When playing a video game, I always ask myself, what is the best
              build I can get? Or what is the best approach I can take for this
              mission? Sometimes it immerses me for hours to discover.
            </div>

            <div class="mb-5">
              The question of "Is there a better way?" is not just limited to my
              games; my entire life is about it. To find a high-quality
              approach, we should try to understand the system by thinking,
              searching, and testing. This is what I do when I am coding.
            </div>

            <div class="mb-5">
              I'm a passionate <span :class="vit">Backend Developer</span> with
              over six years of experience. I graduated in software engineering
              at one of the top universities in my country. I also have tested
              my programming skills in other areas, such as cryptocurrency
              solutions, game development, and web development.
            </div>

            <div class="mb-5">
              I don't want to be the best; I want to do the best I can. I'm
              currently looking for a remote position in ASP.NET Core web API.
            </div>

            <div class="text-caption">
              <code
                class="font-weight-light px-2 py-1"
                :style="{ 'line-height': '1.55rem' }"
              >
                var myInterests = new List&#60;string&#62; { "coding", "gaming",
                "technology", "learning", "creating" };
              </code>
            </div>
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
