<template>
  <v-navigation-drawer
    v-model="drawer"
    :mini-variant.sync="mini"
    permanent
    app
    :width="width"
    color="primary darken-1"
  >
    <div v-if="mini == false">
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
    <div v-else class="fill-height">
      <div class="d-flex justify-center py-16 fill-height">
        <v-btn icon @click.stop="mini = !mini" class="mr-1">
          <v-icon class="text-h3">mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
    <div class="darkmode">
      <v-tooltip v-if="!$vuetify.theme.dark" bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode On</span>
      </v-tooltip>

      <v-tooltip v-else bottom>
        <template v-slot:activator="{ on }">
          <v-btn v-on="on" color="info" small fab @click="darkMode">
            <v-icon color="yellow">mdi-white-balance-sunny</v-icon>
          </v-btn>
        </template>
        <span>Dark Mode Off</span>
      </v-tooltip>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  props: ['width'],
  data() {
    return {
      drawer: true,
      mini: true,
      selectedItemId: null,
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
          routeName: 'education',
          title: 'EDUCATION',
          hash: '#education',
        },
        {
          routeName: 'experience',
          title: 'EXPERIENCE',
          hash: '#experience',
        },
        {
          routeName: 'interests',
          title: 'INTERESTS',
          hash: '#interests',
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
  },
  watch: {},
  computed: {
    ...mapGetters(['selectedPageIndex']),
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