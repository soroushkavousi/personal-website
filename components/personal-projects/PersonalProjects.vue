<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-15 ml-16">
      # PERSONAL PROJECTS
    </h1>

    <v-row justify="center" class="mt-0 px-10">
      <the-project
        :title="fireplaceApiData.title"
        :hash="fireplaceApiData.hash"
        :stack="fireplaceApiData.stack"
        :links="fireplaceApiData.links"
        :views="fireplaceApiData.views"
      >
        <template v-slot:description>
          <p>
            Fireplace API is
            <b>a fully-featured ASP.NET Core Web API sample</b>, and
            <b>a Reddit API clone</b> that has communities, posts, and nested
            comments.
          </p>
          <p>
            The API supports many features such as DDD structure, Swagger UI,
            integration testing, various authentication methods, error handling,
            logging system, caching system, security features, CI/CD, and Docker
            deployment.
          </p>
          <p class="mb-1">
            Please check the GitHub README for more information.
          </p>
        </template>
      </the-project>
    </v-row>

    <v-row justify="center" class="mt-0 px-10">
      <the-project
        :title="powerEssentiaTdData.title"
        :hash="powerEssentiaTdData.hash"
        :stack="powerEssentiaTdData.stack"
        :links="powerEssentiaTdData.links"
        :views="powerEssentiaTdData.views"
      >
        <template v-slot:description>
          <p>
            Power Essentia TD is <b>a 2D tower defense game</b> developed via
            Unity. It is a personal project and takes almost 30 minutes to
            finish the game. You can download the APK and play it. I hope you
            enjoy playing it.
          </p>
          <h3 class="mb-3 mt-2">Game Story</h3>
          <p>
            The world faced monsters that could not be destroyed with just an
            ordinary sword or bow. The kings of the countries heard that the
            outcast magicians managed to defend themselves by using mysterious
            diamonds. So the war heroes took on a new mission to learn how to
            use diamonds from magicians.
          </p>
          <p class="mb-1">
            Magicians of each country have their own special, unique diamond.
            You, as a hero, travel to different countries to learn how to use
            these diamonds. Each diamond you learn gives you supernatural power
            to defeat more monsters. Finally, you will gain great power from an
            effective combination of diamonds with your choice.
          </p>
        </template>
      </the-project>
    </v-row>

    <v-row justify="center" class="mt-0 px-10">
      <the-project
        :title="personalWebsiteData.title"
        :hash="personalWebsiteData.hash"
        :stack="personalWebsiteData.stack"
        :links="personalWebsiteData.links"
        :views="personalWebsiteData.views"
      >
        <template v-slot:description>
          <p class="mb-1">
            A personal website built using Vue.js, Nuxt.js, and Vuetify.
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
        hash: 'fireplace-api',
        stack: [
          'REST API',
          'GraphQL',
          'ASP.NET Core',
          'PostgreSQL',
          'Redis',
          'Swagger',
          'Nginx',
          'CI/CD',
          'Docker',
          'GitHub Actions',
          'Google OAuth 2.0',
          'Gmail API',
          'NLog',
          'xUnit',
        ],
        links: [
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/fireplace-api',
          },
          {
            name: 'Swagger',
            icon: 'mdi-web',
            address: 'https://api.fireplace.bitiano.com/swagger',
          },
          {
            name: 'GraphQL',
            icon: 'mdi-web',
            address: 'https://api.fireplace.bitiano.com/graphql',
          },
        ],
        views: [
          {
            image: 'https://files.fireplace.bitiano.com/api/swagger-top.png',
            title: 'Swagger Page',
            description: `<p class="ma-0 pa-0">With the swagger UI, you can <b>interact with the REST API and discover it</b>.
              It shows all routes, inputs, outputs, models, and errors.
              It also provides a <a href="https://api.fireplace.bitiano.com/swagger/v1/swagger.json" target="_blank">swagger.json</a> which describes the schema of the API that can be imported to your project.</p>`,
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/graphql-playground.png',
            title:
              'The GraphQL Playground, an interactive and graphical IDE for GraphQL',
            description: `<p class="ma-0 pa-0">
              <ul>
                <li>With GraphQL you can prevent over-fetching and under-fetching</li>
                <li>With GraphQL you can call multiple API actions with just one request</li>
                <li>With GraphQL playground you can check all the schema you can call</li>
                <li>Supports community posts, post comments, self posts, self comments, joined communities, and more</li>
              </ul></p>`,
          },
          {
            image:
              'https://files.fireplace.bitiano.com/api/the-architecture.png',
            title: 'The Architecture - DDD Layers',
            description:
              '<p>In this picture, you can see the layers of the API: Domain, Application, and Infrastructure.</p>',
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
              'https://files.fireplace.bitiano.com/api/response-bad-request.png',
            title: 'The Error Schema',
            description: `<p class="ma-0 pa-0">
              <ul>
                <li>Error code is unique to a pair of error type and error field</li>
                <li>Error types are ALREADY_EXISTS, INVALID_FORMAT, AUTHENTICATION_FAILED, and etc</li>
                <li>Error field refers to the item that caused the error</li>
                <li>Error client messages are stored in the database</li>
              </ul></p>`,
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
        ],
      },
      powerEssentiaTdData: {
        title: '2. Power Essentia TD',
        hash: 'power-essentia-td',
        stack: ['Unity 2D', 'C#'],
        links: [
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/power-essentia-unity',
          },
          {
            name: 'APK',
            icon: 'devicon-android-plain',
            address:
              'https://files.bitiano.com/power-essentia/power-essentia.apk',
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
      personalWebsiteData: {
        title: '3. Personal Website (This Website)',
        hash: 'personal-website',
        stack: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Nginx', 'Docker'],
        links: [
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            address: 'https://github.com/soroushkavousi/personal-website',
          },
          {
            name: 'Website',
            icon: 'mdi-web',
            address: 'https://soroushkavousi.bitiano.com',
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
