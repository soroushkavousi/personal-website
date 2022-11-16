<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    :mini-variant-width="miniVariantWidth"
    permanent
    :width="fullWidth"
    :app="$store.state.breakpoint.isMdOrDown ? false : true"
    :fixed="true"
    color="primary darken-1"
    v-click-outside="outsideClicked"
  >
    <template #prepend>
      <div
        class="pt-7"
        @click.stop="doManualOpenOrClose"
        style="position: absolute; height: 100px; z-index: 100; cursor: pointer"
        :style="{ width: (mini ? miniVariantWidth : fullWidth) + 'px' }"
      >
        <v-btn
          plain
          :ripple="false"
          tile
          icon
          v-if="mini == false"
          class="fill d-flex justify-end align-start pr-6 my-2"
          width="100%"
        >
          <v-icon size="60">mdi-chevron-left</v-icon>
        </v-btn>
        <v-avatar v-else class="fill-width px-2">
          <v-img
            contain
            aspect-ratio="1"
            src="https://files.bitiano.com/soroush-kavousi/soroush-kavousi-profile.png"
            class="mx-auto"
            alt="Soroush Kavousi"
          ></v-img>
        </v-avatar>
      </div>
    </template>
    <div v-if="mini == false" class="fill-height">
      <div class="fill-height d-flex flex-column justify-center">
        <v-list nav>
          <v-list-item class="d-flex justify-centerma-0 mb-2">
            <v-img
              :style="{ height: `${profilePictureWidth}px` }"
              contain
              aspect-ratio="1"
              src="https://files.bitiano.com/soroush-kavousi/soroush-kavousi-profile.png"
              alt="Soroush Kavousi"
            ></v-img>
          </v-list-item>
          <v-list-item class="d-flex justify-center mb-15">
            <h1 class="accent--text text--lighten-2 text-h6 font-weight-light">
              Soroush Kavousi
            </h1>
          </v-list-item>
          <v-list-item-group v-model="selectedItemId">
            <v-list-item
              v-for="(section, i) in sections"
              :key="i"
              exact
              ripple
              :value="section.hash"
              class="mb-1"
              @click="onSectionClicked(section)"
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
      style="cursor: pointer"
      @click.stop="doManualOpenOrClose"
    >
      <v-icon dense size="60" :style="{}">mdi-chevron-right</v-icon>
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
export default {
  props: [],
  data() {
    return {
      drawer: true,
      mini: false,
      selectedItemId: '',
      fullWidth: 220,
      miniVariantWidth: 56,
      profilePictureWidth: 115,
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
      if (this.$store.state.breakpoint.isMdOrDown) this.mini = true
    },
    onSectionClicked(section) {
      this.$store.commit('setSection', {
        section: `${section.hash}`,
        isManual: true,
      })
      this.$router.push({
        path: '/',
        hash: section.hash,
      })
    },
    doManualOpenOrClose() {
      this.mini = !this.mini
    },
  },
  computed: {
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
      let currentSection = this.$store.state.section
      this.mini = newValue
      setTimeout(() => {
        let sectionOffset = document.querySelector(currentSection).offsetTop
        window.scrollTo({
          top: sectionOffset,
          behavior: 'smooth',
        })
      }, 500)
    },
    '$store.state.section': function (newValue, oldValue) {
      this.selectedItemId = newValue
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