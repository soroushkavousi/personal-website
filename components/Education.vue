<template>
  <v-container class="mx-12">
    <h1 class="accent--text text--lighten-2 text-h3 mb-16">#EDUCATION</h1>
    <v-row>
      <v-col cols="10">
        <v-timeline>
          <v-timeline-item
            v-for="(education, i) in educations"
            :key="i"
            :color="contentColor1"
            right
          >
            <v-card
              elevation="10"
              :width="timeLineCardWidth"
              :max-width="timeLineCardWidth"
              tile
              outlined
            >
              <v-card
                tile
                height="200"
                color="grey lighten-1"
                class="d-flex justify-center"
              >
                <v-card
                  tile
                  color="grey lighten-1"
                  class="d-flex flex-column justify-center"
                  v-for="(image, i) in education.images"
                  :key="i"
                  :href="image.website"
                >
                  <v-img
                    class="d-inline-block"
                    :max-width="timeLineCardWidth / education.images.length"
                    max-height="200"
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
            <template v-slot:opposite>
              <span
                :class="`headline font-weight-bold ${textColor1}`"
                v-text="education.date"
              ></span>
            </template>
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
          location:
            '<p><a href="https://ce.aut.ac.ir/en">Amirkabir University of Technology</a>, Tehran, Iran (Ranked 85th in Computer Science [U.S. News])</p>',
        },
        {
          date: '2009 - 2013',
          images: [
            {
              src: 'images/logos/nodet-logo.png',
              website:
                'https://en.wikipedia.org/wiki/National_Organization_for_Development_of_Exceptional_Talents',
            },
            {
              src: 'images/logos/salam-logo.webp',
              website: 'http://yousefabad.salamsch.com/hschool',
            },
          ],
          title: 'High School Diploma in Mathematics and Physics',
          location: `<p><a href="http://yousefabad.salamsch.com/hschool">Salam IranZamin High School</a>, Tehran, Iran. [2011-2013]</p>
            <p class="ma-0"><a href="https://en.wikipedia.org/wiki/National_Organization_for_Development_of_Exceptional_Talents">Shahid Beheshti (NODET) High School</a>, Gonbad Kavus, Iran. [2009-2011]</p>
            <p class="text-caption ml-2 font-weight-regular very-small-text">- Affiliated with the National Organization for the Development of Exceptional Talents</p>`,
        },
      ],
    }
  },
  computed: {
    contentColor1() {
      return `primary lighten-1`
    },
    textColor1() {
      return `primary--text text--lighten-1`
    },
    contentColor2() {
      return `primary lighten-4`
    },
    textColor2() {
      return `primary--text text--lighten-4`
    },
  },
  beforeMount() {
    // var elements = document.getElementsByClassName('v-timeline-item__opposite')
    // console.log('That element:')
    // console.dir(elements)
    // console.dir(elements[0])
    // console.dir(elements[0].classList)
    // elements[0].classList.add('test')
  },
}
</script>

<style scoped>
::v-deep p > a {
  text-decoration: none;
  color: var(--v-secondary-base) !important;
}

::v-deep p > a:hover,
::v-deep p > a:active {
  color: var(--v-secondary-lighten3) !important;
}

::v-deep .no-content-link {
  text-decoration: none;
  color: orange !important;
}

::v-deep .very-small-text {
  font-size: 0.7rem !important;
}

.bring-timeline-to-mid {
  /* margin-left: -120px; */
}
</style>