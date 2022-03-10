<template>
  <v-row :id="id" justify="center">
    <v-col>
      <v-btn text :href="`#${id}`" class="mb-2">
        <h1
          class="text-h6 seccondary--text text--lighten-1 font-weight-regular"
        >
          {{ title }}
        </h1>
      </v-btn>
      <v-divider></v-divider>
      <v-row class="my-5 px-20 mx-0" align="center" justify="center">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="d-flex justify-center mx-4"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="mx-auto px-auto"
                v-if="skill.icon"
                size="55px"
                :color="
                  skill.isActive ? colors.activeShape : colors.inactiveShape
                "
                v-bind="attrs"
                v-on="on"
              >
                {{ skill.icon }}
              </v-icon>
              <v-img v-else-if="skill.image" :src="skill.image"> </v-img>
            </template>
            <span
              v-html="skill.name"
              :class="skill.isActive ? colors.activeText : colors.inactiveText"
            ></span>
          </v-tooltip>
        </div>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
  props: ['id', 'title', 'skills'],
  data() {
    return {
      colors: {
        activeShape: 'accent lighten-2',
        activeText: 'accent--text text--lighten-2',
        inactiveShape: 'secondary darken-2',
        inactiveText: 'secondary--text text--darken-2',
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>