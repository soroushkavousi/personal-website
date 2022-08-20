<template>
  <v-row justify="center" no-gutters>
    <v-col xl="9" lg="9" md="10" sm="11">
      <v-card
        class="primary lighten-1 mb-10 px-5 py-2"
        width="100%"
        height="auto"
      >
        <v-row class="ma-0">
          <v-col md="2" sm="4" cols="6" class="d-flex justify-center">
            <v-img
              width="100"
              height="100"
              contain
              :src="logo"
              class="secondary darken-0"
              min-width="100"
            ></v-img>
          </v-col>
          <v-col
            md="7"
            sm="6"
            cols="6"
            class="
              d-flex
              flex-column
              justify-center
              secondary--text
              text--darken-1
            "
          >
            <div class="mb-2 text-h5 font-weight-bold">{{ title }}</div>
            <div class="text-md-overline text-body-2">{{ role }}</div>
          </v-col>
          <v-col
            md="3"
            sm="12"
            cols="12"
            class="d-flex justify-end text-overline"
            align-self="center"
          >
            {{ years }}
          </v-col>
        </v-row>
        <v-row class="ma-0 my-3">
          <v-col cols="11">
            <v-list color="primary lighten-1" class="ma-0 pa-0">
              <template v-for="(project, index) in projects">
                <v-list-item
                  :key="index"
                  class="pa-0"
                  :style="{ 'min-height': '30px' }"
                >
                  <v-list-item-content class="pa-1">
                    <v-list-item-title
                      :style="{
                        'overflow-wrap': 'break-word',
                        'word-wrap': 'break-word',
                        'white-space': 'normal',
                        'line-height': '1.3',
                      }"
                      :class="{ 'mb-2': project.descriptions ? true : false }"
                      v-html="'- ' + project.title"
                      class="text-sm-body-1 text-body-2 font-weight-light"
                    ></v-list-item-title>
                    <v-list-item-subtitle v-if="project.descriptions">
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
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['title', 'role', 'logo', 'years', 'projects'],
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
</style>