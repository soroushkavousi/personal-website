<template>
  <v-row justify="center" no-gutters>
    <v-col xl="9" lg="9" md="10" sm="11">
      <v-card
        class="primary lighten-1 mb-10 px-5 py-2"
        width="100%"
        height="auto"
      >
        <v-row class="ma-0">
          <v-col cols="2" class="d-flex justify-center">
            <v-img
              width="100"
              height="100"
              contain
              :src="logo"
              class="secondary darken-0"
            ></v-img>
          </v-col>
          <v-col
            cols="7"
            class="
              d-flex
              flex-column
              justify-center
              secondary--text
              text--darken-1
            "
          >
            <div class="mb-2 text-h5 font-weight-bold">{{ title }}</div>
            <div>{{ role }}</div>
          </v-col>
          <v-col
            cols="3"
            class="d-flex justify-end text-overline"
            align-self="center"
          >
            {{ years }}
          </v-col>
        </v-row>
        <v-row class="ma-0 my-3">
          <v-col cols="9">
            <v-list color="primary lighten-1" class="ma-0 pa-0">
              <template v-for="(project, index) in projects">
                <v-list-item :key="index">
                  <v-list-item-content>
                    <v-list-item-title
                      :class="{ 'mb-3': project.descriptions ? true : false }"
                      v-html="'- ' + project.title"
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