<template>
  <v-row :id="id" justify="center">
    <v-col>
      <v-btn
        text
        :href="`#${id}`"
        class="
          mb-2
          text-truncate text-left
          justify-start
          text-lg-h6 text-md-body-1 text-body-2
          seccondary--text
          text--lighten-1
          font-weight-regular
          flex-wrap
        "
        max-width="100%"
        width="100%"
      >
        {{ title }}
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
                class="mx-auto px-auto mb-5"
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
                v-else-if="skill.image"
                :width="imageIconSize"
                :height="imageIconSize"
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
        inactiveShape: 'secondary darken-2',
        inactiveText: 'secondary--text text--darken-2',
      },
      iconSize: 55,
      imageIconSize: 55,
    }
  },
  methods: {
    onResize() {
      this.iconSize = this.calculateIconSize()
      this.imageIconSize = this.calculateImageIconSize()
    },
    calculateIconSize() {
      let size
      if (window.innerWidth < this.$store.state.sm) {
        size = 40
        return size
      } else if (window.innerWidth < this.$store.state.md) {
        size = 45
        return size
      } else {
        size = 55
        return size
      }
    },
    calculateImageIconSize() {
      let size
      if (window.innerWidth < this.$store.state.sm) {
        size = 50
        return size
      } else if (window.innerWidth < this.$store.state.md) {
        size = 50
        return size
      } else {
        size = 55
        return size
      }
    },
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', this.onResize)
    })
    this.onResize()
  },
}
</script>

<style scoped>
</style>