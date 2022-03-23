<template>
  <v-container fluid class="px-12">
    <h1 class="accent--text text--lighten-2 text-h3 mb-16">#EDUCATION</h1>
    <v-row>
      <v-col cols="6">
        <v-timeline>
          <v-timeline-item
            v-for="(education, i) in educations"
            :key="i"
            :color="contentColor1"
            right
            fill-dot
          >
            <v-card
              elevation="10"
              :width="timeLineCardWidth"
              :max-width="timeLineCardWidth"
              tile
              outlined
              class="ml-10"
            >
              <v-card
                tile
                height="160"
                color="secondary darken-0"
                class="d-flex justify-center"
              >
                <v-card
                  tile
                  color="secondary darken-0"
                  class="d-flex flex-column justify-center"
                  v-for="(image, i) in education.images"
                  :key="i"
                  :href="image.website"
                >
                  <v-img
                    class="d-inline-block"
                    :max-width="timeLineCardWidth / education.images.length"
                    max-height="160"
                    :src="image.src"
                    light
                    contain
                  ></v-img>
                </v-card>
              </v-card>
              <v-card-title>
                <p :class="`${textColor1}`">{{ education.title }}</p>
              </v-card-title>
              <v-card-text>
                <span
                  v-html="education.location"
                  :class="`${textColor2}`"
                ></span>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      timeLineCardWidth: 550,
      color1Parts: {
        name: 'blue',
        type: 'darken-1',
      },
      color2Parts: {
        name: 'blue',
        type: 'lighten-3',
      },
      educations: [
        {
          date: '2013 - 2019',
          title: 'B.Sc, Computer Engineering ( Software Engineering )',
          images: [
            {
              src: 'images/logos/amirkabir-university-logo.png',
              website: 'https://ce.aut.ac.ir/en',
            },
          ],
          location: `<p><a href="https://ce.aut.ac.ir/en" class="vit">Amirkabir University of Technology</a>, Tehran, Iran 
            (<a href="https://www.usnews.com/education/best-global-universities/amirkabir-university-of-technology-aut-506266">Ranked 253th in Computer Science [U.S. News]</a>)</p>`,
        },
        {
          date: '2009 - 2013',
          images: [
            {
              src: 'images/logos/nodet-logo.png',
              website:
                'https://en.wikipedia.org/wiki/National_Organization_for_Development_of_Exceptional_Talents',
            },
            // {
            //   src: 'images/logos/salam-logo.webp',
            //   website: 'http://yousefabad.salamsch.com/hschool',
            // },
          ],
          title: 'High School Diploma in Mathematics and Physics',
          location: `
            <p class="ma-0">Shahid Beheshti (NODET) High School, Gonbad Kavus, Iran.</p>
            <p><a href="https://en.wikipedia.org/wiki/National_Organization_for_Development_of_Exceptional_Talents" class="vit ml-2">- Affiliated with the National Organization for the Development of Exceptional Talents</a></p>
            <p><a href="http://yousefabad.salamsch.com/hschool">Salam IranZamin High School</a>, Tehran, Iran.</p>`,
        },
      ],
    }
  },
  computed: {
    contentColor1() {
      return `primary lighten-1`
    },
    textColor1() {
      return `secondary--text text--lighten-1`
    },
    contentColor2() {
      return `primary lighten-3`
    },
    textColor2() {
      return `secondary--text text--lighten-4`
    },
  },
}
</script>

<style scoped>
::v-deep .vit {
  text-decoration: none;
  color: var(--v-accent-lighten2) !important;
}

::v-deep p > a {
  text-decoration: none;
  color: var(--v-secondary-base) !important;
}

::v-deep p > a:hover,
::v-deep p > a:active {
  color: var(--v-accent-lighten3) !important;
}

::v-deep .no-content-link {
  text-decoration: none;
  color: orange !important;
}

::v-deep .very-small-text {
  font-size: 0.9rem !important;
}
</style>