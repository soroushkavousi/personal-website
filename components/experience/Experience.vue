<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-sm-h3 text-h4 mb-14 ml-16">
      # EXPERIENCE
    </h1>
    <the-experience-card
      v-for="(experience, i) in experiences"
      :key="i"
      :company="experience.company"
      :location="experience.location"
      :role="experience.role"
      :website="experience.website"
      :years="experience.years"
      :highlights="experience.highlights"
    ></the-experience-card>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    experiences: [
      {
        company: 'Professional development',
        location: 'Tehran, Iran',
        role: 'Backend Developer, Game Developer, Web Developer',
        website: 'https://soroushkavousi.bitiano.com/#personal-projects',
        years: 'APRIL 2020 - PRESENT',
        highlights: [
          {
            title: `Developed <a href="https://github.com/soroushkavousi/fireplace-api">Fireplace API</a>, 
              <b>a fully-featured ASP.NET Core Web API sample</b> that is also <b>a Reddit API clone</b> with communities, 
              posts, and nested comments. The API supports many features such as DDD structure, Swagger UI, 
              integration testing, various authentication methods, error handling, logging system, caching system, 
              security features, CI/CD, and Docker deployment.`,
          },
          {
            title: `Created <a href="https://github.com/soroushkavousi/power-essentia-unity">Power Essentia TD</a>, 
              <b>a 2D tower defense game in Unity</b> where the player, as an archer, protects people from monsters 
              using magical diamonds.`,
          },
          {
            title: `Launched an open-source <a href="https://soroushkavousi.bitiano.com">Personal Website</a> 
            using <b>Vue.js</b>, <b>Nuxt.js</b>, and <b>Vuetify</b>.`,
          },
          {
            title: `Implemented <b>a backtesting bot for analyzing cryptocurrency markets</b> using <b>Python</b> 
            and <b>Matplotlib</b>. The bot collects historical candlestick data from popular cryptocurrency exchanges 
            and tests various technical analysis strategies described by a combination of indicators, 
            oscillators, and money management methods.`,
          },
        ],
      },
      {
        company: 'Ayan',
        location: 'Tehran, Iran',
        role: 'Backend Developer, Blockchain Engineer',
        website: 'https://ayanco.com/en',
        years: 'JULY 2018 - JANUARY 2019',
        highlights: [
          {
            title: `Designed and developed the API of Cryptino, <b>a cryptocurrency payment gateway</b> 
            that raised <b>an initial fund of 100,000$</b> from a national bank.`,
          },
          {
            title: `Created <b>a cryptocurrency HD wallet</b> by implementing BIP 32, 
            BIP 44 (generating asymmetric keys from a master key in a hierarchy), 
            and BIP 39 (generating a mnemonic code as a human-readable key seed).`,
          },
          {
            title: `<b>Accelerated and secured</b> blockchain operations, such as sending transactions, 
            by running <b>a local Bitcoin full node</b> via Bitcoin Core.`,
          },
          {
            title: `<b>Maintained</b> web crawlers for regional support of <b>Ghabzino</b>, 
            a leading national bill management platform <b>with 1M+ Google Play downloads</b>.`,
          },
          {
            title: `Extracted data from national paper bills using OCR libraries such as Tesseract.`,
          },
          {
            title: `<b>Guided</b> a new backend team member through learning the structure of projects.`,
          },
        ],
      },
      {
        company: 'AltonTech',
        location: 'Tehran, Iran',
        role: 'Backend Developer, Desktop Application Developer',
        website: 'http://www.altontech.ir/',
        years: 'AUGUST 2016 - OCTOBER 2017',
        highlights: [
          {
            title: `Connected end users to <b>more than 10 microservices</b> by providing an application gateway API.`,
          },
          {
            title: `<b>Decreased response time</b> of backend APIs and <b>controlled the request rate</b>
            of calling external services by establishing <b>a job scheduler system.</b>`,
          },
          {
            title: `Built an API for registering users in a national mobile service.`,
          },
          {
            title: `<b>Automated transferring reports</b> from an external FTP server to an internal one by 
            introducing an intermediary <b>FTP client.</b>`,
          },
          {
            title: `<b>Accelerated the marketing workflow</b> by implementing desktop applications used 
            for uploading mass multimedia files and transferring bulk data from datasheets to databases.`,
          },
          {
            title: `Built the backend API for Salehin, an Android application featuring 
            national ceremonies encyclopedia.`,
          },
          {
            title: `Implemented <b>a Telegram bot</b> used for creating and sharing polls. The bot API was 
            also responsible for receiving and storing the user choices in the polls.`,
          },
          {
            title: `<b>Lectured</b> at a company-internal conference about the features of Telegram Bot API.`,
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped></style>
