<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-16 ml-16"># ABOUT</h1>
    <v-col cols="12" justify="flex-column justify-space-around">
      <v-row justify="center" class="ma-0 mt-8 mb-16 align-center">
        <v-col xl="7" lg="7" md="11" sm="12" cols="12">
          <v-card color="primary" tile class="lighten-1 pa-12 text-subtitle-1">
            <div class="mb-3">
              Hi. I'm <span :class="vit">Soroush Kavousi</span>, a passionate
              <span :class="vit">Backend Developer</span>. I was born in 1995,
              and I have studied Software Engineering. I also have experience in
              other areas such as
              <i>Game Development, Blockchain, and Web Development</i>.
            </div>
            <div>
              <code class="text-body-2 font-weight-light px-2 py-1">
                var myInterests = new List&#60;string&#62; { "coding", "gaming",
                "technology", "learning", "creating" };
              </code>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row justify="center" class="ma-0 align-center">
        <v-col xl="3" lg="4" md="6" sm="8" cols="12">
          <v-card color="primary pt-6" tile class="lighten-1">
            <v-card-title
              class="
                text-h4
                font-weight-light
                secondary--text
                text--darken-2
                ma-0
                pa-0
                d-flex
                justify-center
              "
              >Contact</v-card-title
            >
            <v-card-text class="secondary--text text--lighten-2 my-0 py-0">
              <v-row class="mx-0 mt-4 mb-6" align="center" justify="center">
                <v-col align-self="center" cols="9">
                  <v-row align="center">
                    <div class="pr-3 py-0 text-overline font-weight-regular">
                      Email:
                    </div>
                    <div class="px-0 py-0">
                      <p
                        class="ma-0 pa-0"
                        style="word-wrap: break-word !important"
                      >
                        <a
                          href="mailto:soroushkavousi.me@gmail.com"
                          class="text-lg-body-2 text-md-body-2 px-0 py-auto"
                          style="word-wrap: break-word"
                        >
                          SoroushKavousi.me@gmail.com
                        </a>
                      </p>
                    </div>
                  </v-row>

                  <v-row align="center">
                    <div class="pr-3 py-0 text-overline font-weight-regular">
                      Phone:
                    </div>
                    <div class="px-0 py-auto">+98 9120910637</div>
                  </v-row>
                </v-col>
              </v-row>

              <v-row class="pa-0 ma-0" align="center" justify="center">
                <a
                  v-for="(link, i) in links"
                  :key="i"
                  :href="link.href"
                  class="mr-5 mb-7"
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
