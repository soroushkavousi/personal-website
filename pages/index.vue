<template>
  <v-container fluid class="pa-0" id="page-top">
    <section
      class="mb-16 py-7"
      id="about"
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: 0.5,
        },
      }"
    >
      <about />
    </section>

    <div class="py-13"></div>

    <section
      class="my-3 py-7"
      id="personal-projects"
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: 0,
        },
      }"
    >
      <personal-projects />
    </section>

    <section
      class="my-16 py-7"
      id="skills"
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: 0.5,
        },
      }"
    >
      <skills />
    </section>

    <section
      class="my-16 py-7"
      id="experience"
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: 0.5,
        },
      }"
    >
      <experience />
    </section>

    <section
      class="my-16 py-7"
      id="education"
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: 0.5,
        },
      }"
    >
      <education />
    </section>

    <section
      class="my-16 py-7"
      id="honors"
      v-intersect="{
        handler: onIntersect,
        options: {
          threshold: 0.5,
        },
      }"
    >
      <honors />
    </section>
  </v-container>
</template>

<script>
export default {
  methods: {
    onIntersect(entries, observer) {
      for (const section of entries) {
        if (section.isIntersecting) {
          this.$store.commit('setSection', {
            section: `#${section.target.id}`,
            isManual: false,
          })
          break
        }
      }
    },
  },
}
</script>
