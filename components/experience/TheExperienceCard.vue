<template>
  <v-row justify="center" no-gutters>
    <v-col xl="8" lg="10" md="10" cols="12">
      <v-card
        class="primary lighten-1 mb-10 pa-8"
        width="100%"
        height="auto"
        tile
      >
        <v-row class="ma-0 mb-6">
          <v-col
            lg="8"
            cols="12"
            class="
              d-flex
              flex-column
              justify-center
              secondary--text
              text--darken-1
              pb-0
            "
          >
            <div class="mb-0 text-h6 font-weight-bold">{{ role }}</div>
            <div class="text-md-overline text-body-2 font-weight-bold">
              <a :href="website" target="_blank" class="invisible-link">
                {{ title }}</a
              >
            </div>
          </v-col>
          <v-col
            lg="4"
            sm="12"
            cols="12"
            class="
              pa-lg-3
              pt-lg-4
              py-0
              d-flex
              justify-end
              text-overline
              font-weight-light
            "
            align-self="start"
            :style="{
              'font-size': $store.state.breakpoint.isMdOrDown
                ? '0.69rem !important'
                : '0.75rem !important',
            }"
          >
            {{ years }}
          </v-col>
        </v-row>
        <v-row class="ma-0">
          <v-col cols="12" class="py-0">
            <client-only>
              <p class="ma-0">
                <v-list color="primary lighten-1" class="ma-0 pa-0">
                  <template v-for="(project, index) in projects">
                    <v-list-item
                      :key="index"
                      class="pa-0"
                      style="min-height: auto"
                    >
                      <v-list-item-content class="px-0 pt-0 pb-2">
                        <v-list-item-title
                          v-html="'- ' + project.title"
                          class="text-lg-body-1 text-body-2 font-weight-light"
                          :style="{
                            'white-space': 'normal',
                            'line-height': '1.3',
                          }"
                        ></v-list-item-title>
                        <v-list-item-subtitle
                          v-if="project.descriptions"
                          class="mt-1"
                          :style="{
                            'white-space': 'normal',
                          }"
                        >
                          <div
                            v-for="(description, i) in project.descriptions"
                            :key="i"
                            class="ml-5 my-1"
                            v-html="'- ' + description"
                          ></div>
                        </v-list-item-subtitle>
                      </v-list-item-content>
                    </v-list-item>
                  </template>
                </v-list>
              </p>
            </client-only>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['title', 'role', 'website', 'years', 'projects'],
  data() {
    return {}
  },
  methods: {},
  mounted() {},
  beforeDestroy() {},
  computed: {},
}
</script>

<style lang="css" scoped>
.invisible-link {
  color: var(--v-secondary) !important;
}

.invisible-link:hover,
.invisible-link:active {
  color: var(--v-accent-lighten3) !important;
}
</style>