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
        years: 'JUNE 2019 - Current',
        projects: [
          {
            title:
              'Design and develop <a href="https://soroushkavousi.bitiano.com/#resume-web">Resume Web</a>',
          },
          {
            title: `Design and develop APIs such as <a href="https://soroushkavousi.bitiano.com/#fireplace-api">Fireplace API</a>`,
          },
          {
            title: `Design and develop games such as <a href="https://soroushkavousi.bitiano.com/#power-essentia-td">Power Essentia TD</a>`,
          },
          {
            title: 'Research and develop a project about technical analysis',
          },
        ],
      },
      {
        title: 'Ayan',
        role: 'Blockchain Engineer, Backend Developer',
        website: 'https://ayanco.com/en',
        years: 'JULY 2018 - JANUARY 2019',
        projects: [
          {
            title:
              'Responsible for developing a <span class="vit">Cryptocurrency HD Wallet</span> for the company',
            descriptions: [
              `<a href="https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki" target="_blank">BIP 32</a>
               and <a href="https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki" target="_blank">BIP 44</a> 
              were used to generate asymmetric keys from a master key in a hierarchy! (BIP: Bitcoin Improvement Proposal)`,
              `<a href="https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki" target="_blank">BIP 39</a>
               was used to generate a Mnemonic Code`,
            ],
          },
          {
            title: `Responsible for running a
               <a href="https://bitcoin.org/en/full-node#what-is-a-full-node" target="_blank">Bitcoin Full Node</a>
               via Bitcoin Core`,
          },
          {
            title:
              'Responsible for designing and developing an API for a <span class="vit">Cryptocurrency Payment Gateway</span>',
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
              'Responsible for creating and maintaining <span class="vit">APIs</span>',
          },
          {
            title:
              'Responsible for consuming APIs such as <span class="vit">Telegram Bot API</span> and a <span class="vit">National Mobile Telecommunication Service</span>',
          },
          {
            title:
              'Responsible for designing and making <span class="vit">Desktop Applications</span>',
            descriptions: [
              'for injecting data from excel into the database',
              'for uploading files',
              'for a job managing system (bot) that calls some APIs periodically',
            ],
          },
        ],
      },
    ],
  }),
}
</script>

<style scoped>
</style>