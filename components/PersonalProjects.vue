<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-14 ml-16">
      # PERSONAL PROJECTS
    </h1>

    <v-row justify="center" class="mt-15 px-10">
      <the-project
        :title="fireplaceApiData.title"
        :stack="fireplaceApiData.stack"
        :links="fireplaceApiData.links"
        :views="fireplaceApiData.views"
      >
        <template v-slot:description>
          <p>
            <b><i>Fireplace</i></b> is a discussion application with
            communities, posts, and comments, just like Reddit.
          </p>
          <p>
            This project, <b><i>Fireplace API</i></b
            >, provides an API for Fireplace, and it aims to be a real-world
            example of web API concepts with the <i>ASP.NET Core</i> framework.
            As I needed to record the knowledge and experience I have learned in
            my coding history, I created this project for myself and everyone
            who considers it valuable.
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
            This game is just a <b>fun project</b> that is developed via
            <b>Unity 2D</b>. Currently, it takes almost <b>30 minutes</b> to
            finish it. You can download the APK and play it. I hope you enjoy
            playing it.
          </p>
          <br />
          <h3 class="mb-3">Game Summary</h3>
          <p>
            Power Essentia TD is a <b>tower defense 2D game</b>. You play as a
            <b>magician</b> to fight monsters and defend countries against
            <b>monsters</b>.
          </p>
          <p>
            Each country has a special <b>diamond</b> that gives magicians a
            powerful ability. Your mission is to study diamonds and upgrade
            them, and finally, you will gain great power from an effective
            <b>combination of diamonds</b> with your choice.
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
              It shows all routes, inputs, outputs, models, and errors.
              It also generates a <i><a href="https://api.fireplace.bitiano.com/docs/v0.1/swagger.json" target="_blank">swagger.json</a></i> which describes the schema of the API that can be imported into your app.</p>`,
          },
          {
            image: 'images/projects/fireplace-api/models.png',
            title: 'Models',
            description: '<p>In this picture you can see the whole models.</p>',
          },
          {
            image: 'images/projects/fireplace-api/comment-routes.png',
            title: 'Comment Routes',
            description:
              '<p>In this picture you can see the routes related to the comment model.</p>',
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
            address: 'http://bitiano.com/power-essentia.apk',
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/power-essentia-unity',
          },
        ],
        views: [
          {
            image: 'images/projects/power-essentia-td/1.fight-scene.png',
            title: 'Fight Scene 1',
            description: ``,
          },
          {
            image: 'images/projects/power-essentia-td/2.fight-scene.png',
            title: 'Fight Scene 2',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/3.about.png',
            title: 'About Dialog',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/4.stone-diamond.png',
            title: 'Stone Diamond - Diamond Menu',
            description: '',
          },
          {
            image:
              'images/projects/power-essentia-td/5.fire-diamond-mastered.png',
            title: 'Fire Diamond - Diamond Menu',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/6.king-diamond.png',
            title: 'King Diamond - Diamond Menu',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/7.blood-diamond.png',
            title: 'Blood Diamond - Diamond Menu',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/8.fight-scene.png',
            title: 'Fight Scene 3',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/9.fight-scene.png',
            title: 'Fight Scene 4',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/10.fight-scene.png',
            title: 'Fight Scene 5',
            description: '',
          },
          {
            image: 'images/projects/power-essentia-td/11.fight-scene.png',
            title: 'Fight Scene 6',
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