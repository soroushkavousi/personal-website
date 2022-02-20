<template>
  <v-navigation-drawer permanent fixed app width="280" color="primary darken-2">
    <div class="fill-height d-flex flex-column justify-center">
      <v-list nav>
        <v-list-item class="d-flex justify-center ma-0">
          <v-list-item-avatar class="mx-auto" size="160">
            <v-img src="images/global/soroush.jpg" class="mx-auto"></v-img>
          </v-list-item-avatar>
        </v-list-item>
        <v-list-item class="d-flex justify-center mb-10">
          <h1 class="secondary--text text--lighten-2">Soroush Kavousi</h1>
        </v-list-item>

        <v-list-item-group v-model="selectedItemId">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            ripple
            :value="item.title"
            class="mb-1"
          >
            <v-list-item-content
              class="text-center font-weight-medium py-1"
              :class="{
                'text--disabled': item.routeName !== $route.name,
              }"
            >
              <v-list-item-title v-text="item.title" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </div>
  </v-navigation-drawer>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'

export default {
  data() {
    return {
      items: [
        {
          routeName: 'about',
          title: 'ABOUT',
          to: '/about',
        },
        {
          routeName: 'projects',
          title: 'PROJECTS',
          to: '/projects',
        },
        {
          routeName: 'experience',
          title: 'EXPERIENCE',
          to: '/experience',
        },
        {
          routeName: 'education',
          title: 'EDUCATION',
          to: '/education',
        },
        {
          routeName: 'skills',
          title: 'SKILLS',
          to: '/skills',
        },
        {
          routeName: 'interests',
          title: 'INTERESTS',
          to: '/interests',
        },
      ],
      selectedItemId: null,
    }
  },
  methods: {
    ...mapMutations({
      setSelectedPageIndex: 'setSelectedPageIndex',
    }),
  },
  watch: {},
  computed: {
    ...mapGetters(['selectedPageIndex']),
  },
}
</script>

<style scoped>
</style>