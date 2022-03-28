<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-14 ml-16">
      #EXPERIENCE
    </h1>
    <v-row justify="center" class="mb-16 mt-0">
      <the-experience-card
        v-for="(item, i) in items"
        :key="i"
      ></the-experience-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        title: 'AyanTech',
        role: 'Backend Developer',
        logo: 'images/logos/AyanTech.png',
        description: `<span class="text--primary">Test 1</span>`,
      },
      {
        title: 'AltonTech',
        role: 'Backend Developer',
        logo: 'images/logos/AltonTech.png',
        description: `<span class="text--primary">Test 2</span>`,
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
</style>