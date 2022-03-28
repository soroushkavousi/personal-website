<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-14 ml-16">#PROJECTS</h1>

    <v-row justify="center" class="mt-15 px-10">
      <the-project
        :title="fireplaceApiData.title"
        :stack="fireplaceApiData.stack"
        :links="fireplaceApiData.links"
        :views="fireplaceApiData.views"
      >
        <template v-slot:description>
          <p>
            Fireplace API is a web API that is the backend side of the project
            Fireplace. It contains complex models and various sign-in methods.
          </p>
          <p>
            Fireplace itself is a discussion application which has communities,
            posts, and comments just like Reddit.
          </p>
        </template>
      </the-project>
    </v-row>

    <v-row justify="center" class="mt-10 px-10">
      <the-project
        :title="powerEssentiaTdData.title"
        :stack="powerEssentiaTdData.stack"
        :links="powerEssentiaTdData.links"
        :views="powerEssentiaTdData.views"
      >
        <template v-slot:description>
          <p>
            Power Essentia TD is a tower defense 2D game. You play as a magician
            to fight monsters and defend countries against monsters.
          </p>
          <p>
            Each country has a special diamond that gives magicians a powerful
            ability. Your mission is to study diamonds and upgrade them, and
            finally, you will gain great power by an effective combination of
            diamonds by your choice.
          </p>
        </template>
      </the-project>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      fireplaceApiData: {
        title: '1. Fireplace API',
        stack: ['ASP.NET Core', 'PostgreSQL', 'Nginx', 'Docker'],
        links: [
          {
            name: 'Website',
            // icon: 'mdi-account-circle',
            icon: 'mdi-web',
            address: 'https://api.fireplace.bitiano.com/docs',
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/fireplace-api',
          },
        ],
        views: [
          {
            image: 'images/projects/fireplace-api/swagger-top.png',
            title: 'Swagger Page',
            description: `<p class="ma-0 pa-0">With the swagger UI, you can easily interact with the API and learn it.
              It shows all routes, inputs, outputs, and errors.
              It also generates a <i><a href="https://api.fireplace.bitiano.com/docs/v0.1/swagger.json" target="_blank">swagger.json</a></i> which describes the schema of the API that can be imported into your app.</p>`,
          },
          {
            image: 'images/projects/fireplace-api/models.png',
            title: 'Models',
            description: '<p>In this picture you can see the whole models.</p>',
          },
        ],
      },
      powerEssentiaTdData: {
        title: '2. Power Essentia TD',
        stack: ['Unity 2D', 'C#'],
        links: [
          {
            name: 'APK',
            // icon: 'mdi-account-circle',
            icon: 'devicon-android-plain',
            address: 'https://api.fireplace.bitiano.com/docs',
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/power-essentia-unity',
          },
        ],
        views: [
          {
            image: 'images/projects/power-essentia-td/fight-1.png',
            title: 'Fight Scene 1',
            description: ``,
          },
          {
            image: 'images/projects/power-essentia-td/fight-3.png',
            title: 'Fight Scene 2',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/fight-4.png',
            title: 'Fight Scene 3',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/diamond-menu-1.png',
            title: 'Diamond Menu 1',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/diamond-menu-2.png',
            title: 'Diamond Menu 2',
            description: '',
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>