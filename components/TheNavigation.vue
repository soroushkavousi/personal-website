<template>
  <v-navigation-drawer permanent fixed app width="280" color="primary darken-2">
    <div class="fill-height d-flex flex-column justify-center">
      <v-list>
        <v-list-item-group v-model="selectedItemId">
          <v-list-item
            v-for="(item, i) in items"
            :key="i"
            :to="item.to"
            router
            exact
            ripple
            :value="item.title"
          >
            <v-list-item-content
              class="text-center font-weight-medium pa-2"
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