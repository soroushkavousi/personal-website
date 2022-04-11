<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant="mini"
    :mini-variant-width="miniVariantWidth"
    permanent
    :width="250"
    :app="$vuetify.breakpoint.mdAndDown ? false : true"
    :fixed="true"
    color="primary darken-1"
  >
    <template #prepend>
      <div :class="navControlStyle" @click.stop="doManualOpenOrClose">
        <v-btn icon>
          <v-icon size="50" v-if="mini == false">mdi-chevron-left</v-icon>
          <v-avatar v-else>
            <v-img
              contain
              src="images/global/soroush.jpg"
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
              <v-img src="images/global/soroush.jpg" class="mx-auto"></v-img>
            </v-list-item-avatar>
          </v-list-item>
          <v-list-item class="d-flex justify-center mb-14">
            <h1 class="accent--text text--lighten-1 text-h5 font-weight-light">
              Soroush Kavousi
            </h1>
          </v-list-item>

          <v-list-item-group v-model="selectedItemId">
            <v-list-item
              v-for="(section, i) in sections"
              :key="i"
              :to="{ path: '/', hash: section.hash }"
              router
              exact
              ripple
              :value="section.title"
              class="mb-1"
              @click="outsideClicked"
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
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: [],
  data() {
    return {
      drawer: true,
      mini: false,
      manualMini: false,
      manualWidth: 0,
      selectedItemId: null,
      miniVariantWidth: 56,
      sections: [
        {
          routeName: 'about',
          title: 'ABOUT',
          hash: '#about',
        },
        {
          routeName: 'projects',
          title: 'PROJECTS',
          hash: '#projects',
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
    ...mapMutations({
      setSelectedPageIndex: 'setSelectedPageIndex',
    }),
    darkMode() {
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    },
    minimizeBelowLarge() {
      if (this.manualWidth == this.$vuetify.breakpoint.width) {
        return
      }
      if (this.$vuetify.breakpoint.mdAndDown) {
        this.mini = true
      } else {
        this.mini = false
      }
    },
    outsideClicked() {
      if (this.mini) return
      this.manualWidth = 0
      this.minimizeBelowLarge()
    },
    doManualOpenOrClose() {
      this.mini = !this.mini
      this.manualMini = true
      this.manualWidth = this.$vuetify.breakpoint.width
    },
  },
  watch: {
    'window.innerWidth'(newValue, oldValue) {
      console.log(`TEST | newValue: ${newValue}`)
    },
  },
  computed: {
    ...mapGetters(['selectedPageIndex']),
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
  mounted() {
    this.intervalid1 = setInterval(this.minimizeBelowLarge, 100)
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