<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-14 ml-16">
      # EDUCATION
    </h1>
    <v-row
      justify="center"
      align="center"
      :style="{ 'min-height': sectionMinHeight + 'px' }"
    >
      <v-col xl="5" lg="7" md="8" sm="11" cols="12">
        <v-timeline dense class="ml-n11">
          <v-timeline-item
            v-for="(education, i) in educations"
            :key="i"
            :color="contentColor1"
            right
            fill-dot
            small
          >
            <v-card
              elevation="10"
              width="100%"
              color="primary lighten-0"
              tile
              outlined
              class="ml-1"
            >
              <v-card
                tile
                :height="imageHeight"
                color="secondary darken-1"
                class="d-flex flex-column justify-center"
              >
                <v-img
                  class="d-inline-block"
                  width="100%"
                  :max-height="imageHeight - 15"
                  :src="education.image"
                  :href="education.website"
                  light
                  contain
                ></v-img>
              </v-card>
              <v-card-title :class="`${textColor1}`" class="pa-8 pb-4">
                <div class="text-lg-h6 text-body-2 font-weight-normal">
                  <span class="font-weight-bold">{{ education.location }}</span
                  ><span>, {{ education.country }}</span>
                </div>
                <div class="text-lg-body-2 text-caption font-weight-normal">
                  {{ education.title }}
                </div>
              </v-card-title>
              <v-card-text
                class="highlight pa-8 pt-0"
                :class="{
                  'highlight-lg': !$store.state.breakpoint.isMdOrDown,
                }"
              >
                <p
                  class="mb-1"
                  v-for="(highlight, i) in education.highlights"
                  :key="i"
                  v-html="'- ' + highlight"
                ></p>
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
      sectionMinHeight: 700,
      imageHeight: 190,
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
          location: 'Amirkabir University of Technology',
          country: 'Iran',
          website: 'https://ce.aut.ac.ir/en',
          title: 'B.Sc, Computer Engineering (Software Engineering)',
          image:
            'https://files.bitiano.com/logos/amirkabir-university-logo.png',
          highlights: [
            'Thesis: <b>Part-of-speech tagging and text normalizing for informal Persian texts</b> using various methods such as the sequence-to-sequence deep learning model.',
            '<a href="https://www.scimagoir.com/rankings.php?sector=Higher+educ.&country=IRN&ranking=Overall&area=1700" target="_blank">Top 3 high-ranked universities in the country</a>',
          ],
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
.highlight {
  font-size: 0.8rem !important;
  font-weight: 300;
  line-height: 1.45;
  white-space: normal;
  font-family: 'OpenSans' !important;
  color: rgba(255, 255, 255, 0.6);
}
.highlight-lg {
  font-size: 0.9rem !important;
}

:deep(a) {
  color: rgba(255, 255, 255, 0.85) !important;
  font-weight: 600;
}

:deep(a:hover),
:deep(a:active) {
  color: var(--v-accent-lighten4) !important;
}

:deep(b) {
  color: rgba(255, 255, 255, 0.85) !important;
}
</style>
