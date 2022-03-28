<template>
  <v-container class="red">
    <v-row>
      <v-col cols="9">Part 1</v-col>
      <v-col cols="3" align-self="center">Part 2</v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ['title', 'role', 'logo', 'description'],
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