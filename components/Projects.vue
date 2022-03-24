<template>
  <v-container fluid class="px-10">
    <h1 class="accent--text text--lighten-2 text-h3 mb-14 ml-16">#PROJECTS</h1>

    <v-row justify="center" class="my-7">
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
            description: '<p>In this picture you can see the API models.</p>',
          },
          {
            image: 'images/projects/fireplace-api/swagger-top.png',
            title: 'Test',
            description: `<p>This is just a test!</p>`,
          },
        ],
      },
    }
  },
}
</script>

<style lang="scss" scoped>
</style>