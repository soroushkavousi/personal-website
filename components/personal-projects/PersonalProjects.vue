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
            Fireplace API is a Reddit API clone that has communities, posts, and
            nested comments. This project is just an individual effort to create
            a real-world Web API with some advanced features.
          </p>
          <p>
            The API is developed via ASP.NET Core framework and has many
            features such as DDD structure, Swagger UI, Integration Testing,
            various Sign Up Methods, Error Handling, Logging System, Security
            Features, CICD, and Docker Deployment.
          </p>
          <p>Please check the GitHub README for more information.</p>
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
            Power Essentia TD is a tower defense 2D game developed via Unity. It
            is just a personal, fun project, and it takes almost 30 minutes to
            finish it. You can download the APK and play it. I hope you enjoy
            playing it.
          </p>
          <h3 class="mb-3 mt-2">Game Story</h3>
          <p>
            The world faced monsters that could not be destroyed with just an
            ordinary sword or bow. The kings of the countries heard that the
            outcast magicians managed to defend themselves by using mysterious
            diamonds. So the war heroes took on a new mission to learn how to
            use diamonds from magicians.
          </p>
          <p>
            Magicians of each country have their own special, unique diamond.
            You, as a hero, travel to different countries to learn how to use
            these diamonds. Each diamond you learn gives you supernatural power
            to defeat more monsters. Finally, you will gain great power from an
            effective combination of diamonds with your choice.
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
            Resume Web is a web application developed via Vuetify and Nuxt.js,
            representing my resume on the web.
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
        stack: [
          'ASP.NET Core',
          'PostgreSQL',
          'Nginx',
          'GitHub Actions',
          'Docker',
        ],
        links: [
          {
            name: 'Swagger',
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
              It also generates a <a href="https://api.fireplace.bitiano.com/docs/v0.1/swagger.json" target="_blank">swagger.json</a> which describes the schema of the API that can be imported into your app.</p>`,
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/the-architecture.png',
            title: 'The Architecture - DDD Layers',
            description:
              '<p>In this picture, you can see the layers of the API: Core, API, and Infrastructure.</p>',
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/swagger-sample-execution.png',
            title: 'Sample Execution',
            description:
              '<p>In this picture, you can see a sample execution.</p>',
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/various-log-in-sign-up.png',
            title: 'User Routes',
            description:
              '<p>In this picture, you can see the routes related to the user model.</p>',
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
            image: 'https://files.bitiano.com/power-essentia/fight-scene-1.png',
            title: 'Fight Scene 1',
            description: ``,
          },
          {
            image: 'https://files.bitiano.com/power-essentia/fight-scene-2.png',
            title: 'Fight Scene 2',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/fight-scene-3.png',
            title: 'Fight Scene 3',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/fight-scene-4.png',
            title: 'Fight Scene 4',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/stone-diamond.png',
            title: 'Diamond Menu - Stone Diamond',
            description: '',
          },
          {
            image:
              'https://files.bitiano.com/power-essentia/fire-diamond-mastered.png',
            title: 'Diamond Menu - Fire Diamond',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/king-diamond.png',
            title: 'Diamond Menu - King Diamond',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/blood-diamond.png',
            title: 'Diamond Menu - Blood Diamond',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/fight-scene-5.png',
            title: 'Fight Scene 5',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/fight-scene-6.png',
            title: 'Fight Scene 6',
            description: '',
          },
          {
            image: 'https://files.bitiano.com/power-essentia/about.png',
            title: 'About Dialog',
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
:deep(a) {
  text-decoration: none;
  color: var(--v-secondary-lighten0) !important;
}

:deep(p a:hover),
:deep(p a:active) {
  color: var(--v-accent-lighten3) !important;
}
</style>