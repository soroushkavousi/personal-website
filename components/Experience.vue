<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-14 ml-16">
      #EXPERIENCE
    </h1>
    <the-experience-card
      v-for="(item, i) in items"
      :key="i"
      :title="item.title"
      :role="item.role"
      :logo="item.logo"
      :years="item.years"
      :projects="item.projects"
    ></the-experience-card>
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
        years: 'July 2018 - January 2019',
        projects: [
          {
            title: 'Telegram Bot',
            descriptions: [],
          },
        ],
      },
      {
        title: 'AltonTech',
        role: 'Backend Developer, Desktop Application Developer',
        logo: 'images/logos/AltonTech.png',
        years: 'August 2016 - October 2017',
        projects: [
          {
            title: 'Creating APIs ',
            descriptions: [
              'for telegram bots',
              "for some company's applications",
              'for consuming from Hamrah Aval Mobile Telecommunication services',
              'with framework WCF',
            ],
          },
          {
            title: 'Making desktop applications',
            descriptions: [
              'for injecting data from excel into the database',
              'for uploading files',
              'for a job managing system which calls some APIs periodically',
              'with framework WPF',
            ],
          },
        ],
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
</style>