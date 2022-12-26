<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-6 ml-16"># SKILLS</h1>
    <v-col class="d-flex flex-column justify-space-around px-md-10 px-2">
      <v-row justify="center" class="ma-0 flex-grow-0 mb-2">
        <v-col xl="9" lg="12" md="12" cols="12">
          <skill-container
            :id="backend.id"
            :title="backend.title"
            :skills="backend.skills"
          ></skill-container>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-0 mb-7 flex-grow-0">
        <v-col
          xl="5"
          lg="7"
          md="6"
          cols="12"
          class="pr-7"
          :class="{ 'mb-16': $store.state.breakpoint.isSmOrDown }"
        >
          <skill-container
            :id="web.id"
            :title="web.title"
            :skills="web.skills"
          ></skill-container>
        </v-col>
        <v-col xl="2" lg="3" md="4" cols="7" class="pr-7">
          <skill-container
            :id="game.id"
            :title="game.title"
            :skills="game.skills"
          ></skill-container>
        </v-col>
        <v-col xl="2" lg="2" md="2" cols="5">
          <skill-container
            :id="desktop.id"
            :title="desktop.title"
            :skills="desktop.skills"
          ></skill-container>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-0 mt-2 mb-0 flex-grow-0">
        <v-col xl="9" lg="12" md="12" cols="12">
          <skill-container
            :id="tools.id"
            :title="tools.title"
            :skills="tools.skills"
          ></skill-container>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-0 mt-0 mb-4 flex-grow-0">
        <v-col xl="9" lg="12" md="12" cols="12">
          <skill-container
            :id="workflow.id"
            :title="workflow.title"
            :skills="workflow.skills"
          ></skill-container>
        </v-col>
      </v-row>
      <v-row justify="center" align="center" class="ma-0 d-flex flex-grow-0">
        <v-col
          xl="9"
          lg="12"
          md="12"
          cols="12"
          align-self="start"
          class="d-flex justify-lg-start justify-start pl-4"
        >
          <div class="mr-6 d-flex justify-center">
            <v-card
              width="20"
              height="20"
              color="secondary lighten-3"
              class="d-inline-block rounded-sm my-auto"
            ></v-card>
            <p class="d-inline ml-3 my-auto secondary--text text--lighten-2">
              Recently Used
            </p>
          </div>
          <div class="d-flex justify-center">
            <v-card
              width="20"
              height="20"
              color="primary lighten-2"
              class="d-inline-block rounded-sm my-auto"
            ></v-card>
            <p class="d-inline ml-3 my-auto primary--text text--lighten-3">
              Past Experience
            </p>
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      backend: {
        id: 'backend',
        title: 'Backend',
        skills: [
          {
            name: '.Net Core',
            icon: 'devicon-dotnetcore-plain',
            isActive: true,
          },
          {
            name: 'C#',
            icon: 'devicon-csharp-plain',
            isActive: true,
          },
          {
            name: 'Nginx',
            icon: 'devicon-nginx-original',
            isActive: true,
          },
          {
            name: 'PostgreSQL',
            icon: 'devicon-postgresql-plain',
            isActive: true,
          },
          {
            name: 'MongoDB',
            icon: 'devicon-mongodb-plain',
            isActive: false,
          },
          {
            name: 'SQL Server',
            icon: 'devicon-microsoftsqlserver-plain',
            isActive: false,
          },
          {
            name: 'Python',
            icon: 'devicon-python-plain',
            isActive: false,
          },
          {
            name: 'Django',
            icon: 'devicon-django-plain',
            isActive: false,
          },
          {
            name: 'IIS',
            image: 'https://files.bitiano.com/logos/microsoft-iis.png',
            isActive: false,
          },
        ],
      },
      web: {
        id: 'web',
        title: 'Web',
        skills: [
          {
            name: 'Vuetify',
            icon: 'devicon-vuetify-line',
            isActive: true,
          },
          {
            name: 'Nuxt.js',
            icon: 'mdi-nuxt',
            isActive: true,
          },
          {
            name: 'Vue.js',
            icon: 'devicon-vuejs-plain',
            isActive: true,
          },
          {
            name: 'HTML',
            icon: 'devicon-html5-plain',
            isActive: true,
          },
          {
            name: 'CSS',
            icon: 'devicon-css3-plain',
            isActive: true,
          },
          {
            name: 'JavaScript',
            icon: 'devicon-javascript-plain',
            isActive: true,
          },
        ],
      },
      game: {
        id: 'game',
        title: 'Game',
        skills: [
          {
            name: 'Unity',
            icon: 'mdi-unity',
            isActive: true,
          },
          {
            name: 'C#',
            icon: 'devicon-csharp-plain',
            isActive: true,
          },
        ],
      },
      desktop: {
        id: 'desktop',
        title: 'Desktop',
        skills: [
          {
            name: 'WPF',
            image: 'https://files.bitiano.com/logos/wpf-logo.png',
            isActive: false,
          },
        ],
      },
      tools: {
        id: 'tools',
        title: 'Tools & Misc',
        skills: [
          {
            name: 'Docker',
            icon: 'devicon-docker-plain',
            isActive: true,
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            isActive: true,
          },
          {
            name: 'GitLab',
            icon: 'devicon-gitlab-plain',
            isActive: true,
          },
          {
            name: 'Ubuntu',
            icon: 'devicon-ubuntu-plain',
            isActive: true,
          },
          {
            name: 'Windows',
            icon: 'devicon-windows8-original',
            isActive: true,
          },
          {
            name: 'Visual Studio',
            icon: 'devicon-visualstudio-plain',
            isActive: true,
          },
          {
            name: 'VS Code',
            icon: 'devicon-vscode-plain',
            isActive: true,
          },
          {
            name: 'PyCharm',
            icon: 'devicon-pycharm-plain',
            isActive: false,
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Workflow & Concepts',
        skills: [
          {
            text: 'DDD',
            isActive: true,
          },
          {
            text: 'Agile & Scrum',
            isActive: true,
          },
          {
            text: 'Design Patterns & Principles',
            isActive: true,
          },
        ],
      },
    }
  },
}
</script>

<style scoped>
</style>