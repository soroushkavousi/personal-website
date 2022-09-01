<template>
  <v-row :id="id" justify="center" dense class="flex-grow-0">
    <v-col>
      <div
        class="
          mb-4
          text-left text-lg-h6 text-md-body-1 text-body-1
          seccondary--text
          text--lighten-1
          font-weight-light
        "
        max-width="100%"
        width="100%"
      >
        {{ title }}
      </div>
      <v-divider></v-divider>
      <v-row class="mt-10 px-20 mx-0" align="center" justify="center">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="d-flex justify-center mx-4"
        >
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                class="mx-auto px-auto mb-10"
                v-if="skill.icon"
                :size="iconSize"
                :color="
                  skill.isActive ? colors.activeShape : colors.inactiveShape
                "
                v-bind="attrs"
                v-on="on"
              >
                {{ skill.icon }}
              </v-icon>
              <v-card
                class="mb-10"
                v-else-if="skill.image"
                :width="iconSize"
                :height="iconSize"
                :color="
                  skill.isActive ? colors.activeShape : colors.inactiveShape
                "
                v-bind="attrs"
                v-on="on"
              >
                <v-img :src="skill.image" width="100%" height="100%" contain>
                </v-img>
              </v-card>
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
        inactiveShape: 'secondary darken-0',
        inactiveText: 'secondary--text text--darken-0',
      },
    }
  },
  computed: {
    iconSize() {
      if (this.$store.state.breakpoint.isSmOrDown) return 40
      else if (this.$store.state.breakpoint.isMdOrDown) return 45
      else return 50
    },
  },
}
</script>

<style scoped>
</style>