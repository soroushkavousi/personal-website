<template>
  <v-row :id="id" justify="center" dense class="flex-grow-0">
    <v-col>
      <div
        class="
          mb-3
          text-left text-h6
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
      <v-row class="mt-6 px-20 mx-0" align="center" justify="center">
        <div
          v-for="(skill, i) in skills"
          :key="i"
          class="d-flex flex-column justify-center mx-3"
          :style="{ width: skillWidth + 'px' }"
        >
          <v-icon
            class="mx-auto"
            v-if="skill.icon"
            :size="iconSize"
            :color="skill.isActive ? colors.activeShape : colors.inactiveShape"
          >
            {{ skill.icon }}
          </v-icon>
          <v-card
            class="pa-1 mx-auto"
            v-else-if="skill.image"
            :width="iconSize + 2"
            :height="iconSize + 2"
            :color="skill.isActive ? colors.activeShape : 'primary lighten-1'"
            flat
            rounded="circle"
          >
            <v-img :src="skill.image" width="100%" height="100%" contain />
          </v-card>
          <span
            class="mt-1 mb-6 text-center text-caption font-weight-light"
            :class="skill.isActive ? colors.activeText : colors.inactiveText"
          >
            {{ skill.name }}
          </span>
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
        activeShape: 'secondary lighten-2',
        activeText: 'secondary--text text--lighten-2',
        inactiveShape: 'primary lighten-3',
        inactiveText: 'primary--text text--lighten-3',
      },
    }
  },
  computed: {
    iconSize() {
      if (this.$store.state.breakpoint.isSmOrDown) return 35
      else return 40
    },
    skillWidth() {
      if (this.$store.state.breakpoint.isSmOrDown) return 55
      else return 60
    },
  },
}
</script>

<style scoped>
</style>