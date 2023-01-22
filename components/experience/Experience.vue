<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-sm-h3 text-h4 mb-14 ml-16">
      # EXPERIENCE
    </h1>
    <the-experience-card
      v-for="(item, i) in items"
      :key="i"
      :title="item.title"
      :role="item.role"
      :website="item.website"
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
        title: 'Self Employed',
        role: 'Backend Developer, Game Developer, Web Developer',
        website: 'https://soroushkavousi.bitiano.com/#personal-projects',
        years: 'APRIL 2021 - CURRENT',
        projects: [
          {
            title: `Designed and developed <a href="https://soroushkavousi.bitiano.com/#fireplace-api">Fireplace API</a>`,
          },
          {
            title: `Designed and developed games such as <a href="https://soroushkavousi.bitiano.com/#power-essentia-td">Power Essentia TD</a>`,
          },
          {
            title:
              'Designed and developed <a href="https://soroushkavousi.bitiano.com/#resume-web">Resume Web</a>',
          },
          {
            title:
              'Researched and developed a project about Technical Analysis',
          },
        ],
      },
      {
        title: 'Ayan',
        role: 'Backend Developer, Blockchain Engineer',
        website: 'https://ayanco.com/en',
        years: 'JULY 2018 - JANUARY 2019',
        projects: [
          {
            title:
              'Designed and developed an API for a Cryptocurrency Payment Gateway',
          },
          {
            title: 'Designed and developed a Cryptocurrency HD Wallet',
            descriptions: [
              `<a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" target="_blank">BIP 32</a>
               and <a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">BIP 44</a> 
              were used to generate asymmetric keys from a master key in a hierarchy! (BIP: Bitcoin Improvement Proposal)`,
              `<a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" target="_blank">BIP 39</a>
               was used to generate a mnemonic code`,
            ],
          },
          {
            title: `Ran a new
               <a href="https://bitcoin.org/en/full-node#what-is-a-full-node" target="_blank">Bitcoin full node</a> via Bitcoin Core`,
          },
          {
            title:
              'Worked with OCR libraries such as Tesseract to read data from national paper bills',
          },
        ],
      },
      {
        title: 'AltonTech',
        role: 'Backend Developer, Desktop Application Developer',
        website: 'http://www.altontech.ir/',
        years: 'AUGUST 2016 - OCTOBER 2017',
        projects: [
          {
            title:
              'Developed backend APIs for several Android applications in education, books & reference, and music & audio categories',
          },
          {
            title:
              'Developed a backend API for registering users in a mobile service via National Mobile Telecommunication Service API',
          },
          {
            title:
              'Developed Application Gateway API for connecting clients to multiple internal APIs',
          },
          {
            title: 'Developed a polling bot in Telegram via Telegram Bot API',
          },
          {
            title: 'Spoke at a conference in the company about Telegram Bot',
          },

          {
            title: 'Ran an FTP client via FluentFTP',
          },
          {
            title: 'Designed and developed desktop applications',
            descriptions: [
              'For injecting data from excel into the database',
              'For uploading files',
              'For a task managing system (bot) that runs tasks stored in the database periodically',
            ],
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped></style>
