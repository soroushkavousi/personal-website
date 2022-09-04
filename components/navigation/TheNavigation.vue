<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    :mini-variant-width="miniVariantWidth"
    permanent
    :width="250"
    :app="true"
    :fixed="true"
    color="primary darken-1"
    v-click-outside="outsideClicked"
  >
    <template #prepend>
      <div :class="navControlStyle" @click.stop="doManualOpenOrClose">
        <v-btn icon>
          <v-icon size="50" v-if="mini == false">mdi-chevron-left</v-icon>
          <v-avatar v-else>
            <v-img
              contain
              src="https://files.bitiano.com/soroush-kavousi/soroush-kavousi-profile.jpg"
              class="mx-auto"
            ></v-img>
          </v-avatar>
        </v-btn>
      </div>
    </template>
    <div v-if="mini == false" class="fill-height">
      <div class="fill-height d-flex flex-column justify-center">
        <v-list nav>
          <v-list-item class="d-flex justify-center ma-0">
            <v-list-item-avatar class="mx-auto" size="150">
              <v-img
                src="https://files.bitiano.com/soroush-kavousi/soroush-kavousi-profile.jpg"
                class="mx-auto"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item class="d-flex justify-center mb-14">
            <h1 class="accent--text text--lighten-2 text-h5 font-weight-light">
              Soroush Kavousi
            </h1>
          </v-list-item>

          <v-list-item-group v-model="selectedItemId">
            <v-list-item
              v-for="(section, i) in sections"
              :key="i"
              :to="{ path: '/', hash: section.hash }"
              exact
              ripple
              :value="section.title"
              class="mb-1"
              @click="onSectionClicked(section.title)"
            >
              <v-list-item-content
                class="text-center font-weight-light py-1"
                :class="{
                  'text--disabled': section.routeName !== $route.name,
                }"
              >
                <v-list-item-title
                  v-text="section.title"
                  class="text-overline secondary--text"
                />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
    <div
      v-else
      class="fill-height d-flex flex-column justify-center"
      @click.stop="doManualOpenOrClose"
    >
      <v-icon dense size="50" :style="{}">mdi-chevron-right</v-icon>
    </div>
    <template #append>
      <!-- <div :class="darkModeIconStyle">
        <v-tooltip v-if="!$vuetify.theme.dark" top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="primary" small fab @click="darkMode">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>

        <v-tooltip v-else top>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="primary" small fab @click="darkMode">
              <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>
      </div> -->
    </template>
  </v-navigation-drawer>
</template>

<script>
// import { mapGetters, mapMutations } from 'vuex'

export default {
  props: [],
  data() {
    return {
      drawer: true,
      mini: false,
      manualMini: false,
      lastManualMiniWidth: 0,
      selectedItemId: '',
      test: null,
      miniVariantWidth: 56,
      isScrolling: false,
      sections: [
        {
          routeName: 'about',
          title: 'ABOUT',
          hash: '#about',
        },
        {
          routeName: 'personal-projects',
          title: 'PERSONAL PROJECTS',
          hash: '#personal-projects',
        },
        {
          routeName: 'skills',
          title: 'SKILLS',
          hash: '#skills',
        },
        {
          routeName: 'experience',
          title: 'EXPERIENCE',
          hash: '#experience',
        },
        {
          routeName: 'education',
          title: 'EDUCATION',
          hash: '#education',
        },
        {
          routeName: 'honors',
          title: 'HONORS',
          hash: '#honors',
        },
      ],
    }
  },
  methods: {
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    outsideClicked() {
      this.mini = this.$store.state.breakpoint.isMdOrDown
    },
    onSectionClicked(section) {
      console.log(`section: ${section}`)
    },
    doManualOpenOrClose() {
      this.manualMini = true
      this.lastManualMiniWidth = window.innerWidth
      this.mini = !this.mini
    },
    moveToLastHash() {
      if (this.$router.currentRoute.hash != '') {
        window.scrollTo({
          top: document.querySelector(this.$router.currentRoute.hash).offsetTop,
          behavior: 'smooth',
        })
      }
      this.isScrolling = false
    },
  },
  computed: {
    navControlStyle() {
      return {
        'd-flex': true,
        'mt-5': true,
        'justify-end': this.mini == false,
        'mr-4': this.mini == false,
        'justify-center': this.mini == true,
        'mr-0': this.mini == true,
      }
    },
    darkModeIconStyle() {
      return {
        'd-flex': true,
        'mb-5': true,
        'justify-start': this.mini == false,
        'ml-4': this.mini == false,
        'justify-center': this.mini == true,
        'mr-0': this.mini == true,
      }
    },
  },
  watch: {
    '$store.state.breakpoint.isMdOrDown': function (newValue, oldValue) {
      // if (this.manualMini) return
      this.mini = newValue
    },
  },
}
</script>

<style scoped>
.darkmode {
  position: fixed;
  bottom: 10px;
  left: 10px;
}
</style>