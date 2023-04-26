<template>
  <v-row justify="center" no-gutters>
    <v-col xl="8" lg="10" md="10" cols="12">
      <v-card
        class="primary lighten-1 mb-10 pa-10"
        width="100%"
        height="auto"
        tile
      >
        <v-row class="ma-0 mb-6">
          <v-col lg="8" cols="12" class="mb-3 py-0">
            <v-row class="ma-0 mb-1">
              <a
                :href="website"
                target="_blank"
                class="company"
                :class="{
                  'company-lg': !$store.state.breakpoint.isMdOrDown,
                }"
              >
                {{ company }}
              </a>
              <div
                class="location"
                :class="{
                  'location-lg': !$store.state.breakpoint.isMdOrDown,
                }"
              >
                , {{ location }}
              </div>
            </v-row>
            <v-row class="ma-0">
              <div
                class="role"
                :class="{
                  'role-lg': !$store.state.breakpoint.isMdOrDown,
                }"
              >
                {{ role }}
              </div>
            </v-row>
          </v-col>
          <v-col
            lg="4"
            sm="12"
            cols="12"
            class="pa-lg-3 pt-lg-4 py-0 d-flex justify-end text-overline font-weight-light"
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
                  <v-list-item
                    class="pa-0"
                    style="min-height: auto"
                    v-for="(highlight, index) in highlights"
                    :key="index"
                  >
                    <v-list-item-content class="px-0 pt-0 pb-2">
                      <v-list-item-title
                        v-html="'- ' + highlight.title"
                        class="highlight-title"
                        :class="{
                          'highlight-title-lg':
                            !$store.state.breakpoint.isMdOrDown,
                        }"
                      ></v-list-item-title>
                      <v-list-item-subtitle
                        v-if="highlight.descriptions"
                        class="mt-1 text-lg-subtitle-2 text-caption"
                        :style="{
                          'white-space': 'normal',
                        }"
                      >
                        <div
                          v-for="(description, i) in highlight.descriptions"
                          :key="i"
                          class="ml-5 my-1"
                          v-html="'- ' + description"
                        ></div>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>
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
  props: ['company', 'location', 'role', 'website', 'years', 'highlights'],
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
.company {
  display: inline;
  font-size: 1.1rem !important;
  font-weight: 600;
  line-height: 1.3;
  font-family: 'OpenSans' !important;
  color: var(--v-secondary) !important;
}
.company-lg {
  font-size: 1.2rem !important;
}

.company:hover,
.company:active {
  color: var(--v-accent-lighten3) !important;
}

.location {
  display: inline;
  font-size: 1.1rem !important;
  font-weight: 300;
  line-height: 1.3;
  font-family: 'OpenSans' !important;
}
.location-lg {
  font-size: 1.2rem !important;
}

.role {
  font-size: 0.8rem !important;
  font-weight: 400;
  line-height: 1.3;
  font-family: 'OpenSans' !important;
}
.role-lg {
  font-size: 0.9rem !important;
}

.highlight-title {
  font-size: 0.9rem !important;
  font-weight: 300;
  line-height: 1.45;
  white-space: normal;
  font-family: 'OpenSans' !important;
  color: rgba(255, 255, 255, 0.6);
}
.highlight-title-lg {
  font-size: 1rem !important;
}

:deep(a) {
  color: var(--v-accent-lighten3) !important;
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
