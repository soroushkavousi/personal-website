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

    <v-row justify="center" class="mt-10 px-10">
      <the-project
        :title="resumeWebData.title"
        :stack="resumeWebData.stack"
        :links="resumeWebData.links"
        :views="resumeWebData.views"
      >
        <template v-slot:description>
          <p>
            Resume Web is a web application developed via
            <b><i>Vuetify</i></b> and <b><i>Nuxt.js</i></b
            >, representing my resume on the web.
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
            image: 'https://files.fireplace.bitiano.com/api/swagger-top.png',
            title: 'Swagger Page',
            description: `<p class="ma-0 pa-0">With the swagger UI, you can easily interact with the API and learn it.
              It shows all routes, inputs, outputs, models, and errors.
              It also generates a <i><a href="https://api.fireplace.bitiano.com/docs/v0.1/swagger.json" target="_blank">swagger.json</a></i> which describes the schema of the API that can be imported into your app.</p>`,
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/the-architecture.png',
            title: 'The Architecture - DDD Layers',
            description:
              '<p>In this picture, you can see the layers of the API: Core, API, and Infrastructure.</p>',
          },
          {
            image: 'https://files.fireplace.bitiano.com/api/models.png',
            title: 'Models',
            description:
              '<p>In this picture, you can see the whole models.</p>',
          },
          {
            image: 'https://files.fireplace.bitiano.com/api/comment-routes.png',
            title: 'Comment Routes',
            description:
              '<p>In this picture, you can see the routes related to the comment model.</p>',
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/swagger-log-in-with-google.png',
            title: 'Swagger UI - Log In With Google - The API Access Token',
            description: `<p>The API supports Google OAuth 2.0, and you can log in with your Gmail in the swagger UI. 
            However, you can get an access token by logging in with your email address or username and a password. 
            The access token will be saved in your cookies.</p>`,
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/create-a-post-request.png',
            title: 'Create A Post (Request)',
            description: '',
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/create-a-post-response.png',
            title: 'Create A Post (Response)',
            description: '',
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/sample-responses.png',
            title: 'Swagger UI Shows Possible Responses',
            description: '',
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
            address:
              'https://files.bitiano.com/power-essentia/power-essentia.apk',
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/power-essentia-unity',
          },
        ],
        views: [
          {
            image: 'https://files.bitiano.com/power-essentia/1.fight-scene.png',
            title: 'Fight Scene 1',
            description: ``,
          },
          {
            image: 'https://files.bitiano.com/power-essentia/2.fight-scene.png',
            title: 'Fight Scene 2',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/3.about.png',
            title: 'About Dialog',
            description: '',
          },
          {
            image:
              'https://files.bitiano.com/power-essentia/4.stone-diamond.png',
            title: 'Diamond Menu - Stone Diamond',
            description: '',
          },
          {
            image:
              'https://files.bitiano.com/power-essentia/5.fire-diamond-mastered.png',
            title: 'Diamond Menu - Fire Diamond',
            description: '',
          },
          {
            image:
              'https://files.bitiano.com/power-essentia/6.king-diamond.png',
            title: 'Diamond Menu - King Diamond',
            description: '',
          },
          {
            image:
              'https://files.bitiano.com/power-essentia/7.blood-diamond.png',
            title: 'Diamond Menu - Blood Diamond',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/8.fight-scene.png',
            title: 'Fight Scene 3',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/9.fight-scene.png',
            title: 'Fight Scene 4',
            description: '',
          },
          {
            image:
              'https://files.bitiano.com/power-essentia/10.fight-scene.png',
            title: 'Fight Scene 5',
            description: '',
          },
          {
            image:
              'https://files.bitiano.com/power-essentia/11.fight-scene.png',
            title: 'Fight Scene 6',
            description: '',
          },
        ],
      },
      resumeWebData: {
        title: '3. Resume Web (This Website)',
        stack: ['Vuetify', 'Nuxt.js', 'Vue.js', 'Nginx', 'Docker'],
        links: [
          {
            name: 'Website',
            // icon: 'mdi-account-circle',
            icon: 'mdi-web',
            address: 'https://soroushkavousi.bitiano.com',
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/resume-web',
          },
        ],
        views: [
          {
            image:
              'https://files.bitiano.com/soroush-kavousi/resume-web/about.png',
            title: 'About Section',
            description: ``,
          },
          {
            image:
              'https://files.bitiano.com/soroush-kavousi/resume-web/personal-projects.png',
            title: 'Personal Project Section',
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