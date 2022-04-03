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
        role: 'Backend Developer, Blockchain Engineer',
        logo: 'images/logos/AyanTech.png',
        years: 'July 2018 - January 2019',
        projects: [
          {
            title:
              'Responsible for creating a cryptocurrency wallet for the company',
          },
          {
            title:
              'Responsible for designing and creating a cryptocurrency payment gateway API',
          },
          {
            title:
              'Responsible for running a Bitcoin Full Node via Bitcoin Core',
          },
          {
            title: 'Responsible for producing documentation for the APIs',
          },
          {
            title: 'Responsible for work with OCRs such as Tesseract OCR',
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
            title: 'Responsible for creating and maintaining APIs',
          },
          {
            title:
              'Responsible for consuming APIs such as telegram bot API and a mobile telecommunication service',
          },
          {
            title: 'Responsible for designing and making desktop applications',
            descriptions: [
              'for injecting data from excel into the database',
              'for uploading files',
              'for a job managing system that calls some APIs periodically',
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