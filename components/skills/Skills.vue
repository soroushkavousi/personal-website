<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-4 ml-16"># SKILLS</h1>
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
      <v-row justify="center" class="ma-0 mt-0 mb-2 flex-grow-0">
        <v-col xl="9" lg="12" md="12" cols="12">
          <skill-container
            :id="tools.id"
            :title="tools.title"
            :skills="tools.skills"
          ></skill-container>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-0 mt-0 mb-3 flex-grow-0">
        <v-col xl="9" lg="12" md="12" cols="12">
          <skill-container
            :id="workflow.id"
            :title="workflow.title"
            :skills="workflow.skills"
          ></skill-container>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-0 mb-2 flex-grow-0">
        <v-col
          xl="5"
          lg="8"
          md="7"
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
        <v-col xl="3" lg="3" md="4" cols="8" class="pr-7">
          <skill-container
            :id="game.id"
            :title="game.title"
            :skills="game.skills"
          ></skill-container>
        </v-col>
        <v-col xl="1" lg="1" md="1" cols="4">
          <skill-container
            :id="desktop.id"
            :title="desktop.title"
            :skills="desktop.skills"
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
              color="secondary darken-0"
              class="d-inline-block rounded-sm my-auto"
            ></v-card>
            <p class="d-inline ml-3 my-auto secondary--text text--darken-0">
              Proficient
            </p>
          </div>
          <div class="d-flex justify-center">
            <v-card
              width="20"
              height="20"
              color="primary lighten-4"
              class="d-inline-block rounded-sm my-auto"
            ></v-card>
            <p class="d-inline ml-3 my-auto primary--text text--lighten-5">
              Prior experience / Familiar with
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
            name: 'PostgreSQL',
            icon: 'devicon-postgresql-plain',
            isActive: true,
          },
          {
            name: 'SQL Server',
            icon: 'devicon-microsoftsqlserver-plain',
            isActive: true,
          },
          {
            name: 'MongoDB',
            icon: 'devicon-mongodb-plain',
            isActive: true,
          },
          {
            name: 'Redis',
            icon: 'devicon-redis-plain',
            isActive: true,
          },
          {
            name: 'gRPC',
            image: 'https://files.bitiano.com/logos/grpc.png',
            isActive: true,
          },
          {
            name: 'RabbitMQ',
            image: 'https://files.bitiano.com/logos/rabbitmq.png',
            isActive: true,
          },
          {
            name: 'REST API',
            image: 'https://files.bitiano.com/logos/rest-api.png',
            isActive: true,
          },
          {
            name: 'GraphQL',
            icon: 'devicon-graphql-plain',
            isActive: true,
          },
          {
            name: 'Nginx',
            icon: 'devicon-nginx-original',
            isActive: true,
          },
          {
            name: 'IIS',
            image: 'https://files.bitiano.com/logos/microsoft-iis.png',
            isActive: true,
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
        ],
      },
      web: {
        id: 'web',
        title: 'Web',
        skills: [
          // {
          //   name: 'Tailwind CSS 2',
          //   icon: 'devicon-tailwindcss-plain',
          //   isActive: true,
          // },
          {
            name: 'Vue.js',
            icon: 'devicon-vuejs-plain',
            isActive: false,
          },
          {
            name: 'Nuxt.js',
            icon: 'mdi-nuxt',
            isActive: false,
          },
          {
            name: 'Vuetify',
            icon: 'devicon-vuetify-line',
            isActive: false,
          },
          {
            name: 'HTML',
            icon: 'devicon-html5-plain',
            isActive: false,
          },
          {
            name: 'CSS',
            icon: 'devicon-css3-plain',
            isActive: false,
          },
          {
            name: 'JavaScript',
            icon: 'devicon-javascript-plain',
            isActive: false,
          },
        ],
      },
      game: {
        id: 'game',
        title: 'Game',
        skills: [
          {
            name: 'Unity 2D',
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
        title: 'Tools',
        skills: [
          {
            name: 'Docker',
            icon: 'devicon-docker-plain',
            isActive: true,
          },
          {
            name: 'Docker Compose',
            image: 'https://files.bitiano.com/logos/docker-compose.png',
            isActive: true,
          },
          {
            name: 'Git',
            icon: 'devicon-git-plain',
            isActive: true,
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original',
            isActive: true,
          },
          {
            name: 'GitHub Action',
            image: 'https://files.bitiano.com/logos/github-actions.png',
            isActive: true,
          },
          {
            name: 'GitLab',
            icon: 'devicon-gitlab-plain',
            isActive: true,
          },
          {
            name: 'Jira',
            icon: 'devicon-jira-plain',
            isActive: true,
          },
          {
            name: 'AWS',
            image: 'https://files.bitiano.com/logos/aws.png',
            isActive: true,
          },
          {
            name: 'Ubuntu Server',
            icon: 'devicon-ubuntu-plain',
            isActive: true,
          },
          {
            name: 'Windows Server',
            icon: 'devicon-windows8-original',
            isActive: true,
          },
        ],
      },
      workflow: {
        id: 'workflow',
        title: 'Concepts & Methodologies',
        skills: [
          {
            text: 'CI/CD',
            isActive: true,
          },
          {
            text: 'DDD',
            isActive: true,
          },
          {
            text: 'Microservices',
            isActive: true,
          },
          {
            text: 'Integration Testing',
            isActive: true,
          },
          {
            text: 'Unit Testing',
            isActive: true,
          },
          {
            text: 'Trunk-based Development',
            isActive: true,
          },
          {
            text: 'CDN',
            isActive: true,
          },
          {
            text: 'Design Patterns',
            isActive: true,
          },
          {
            text: 'Design Principles',
            isActive: true,
          },
          {
            text: 'UML',
            isActive: true,
          },
          {
            text: 'SOLID',
            isActive: true,
          },
          {
            text: 'Agile',
            isActive: true,
          },
          {
            text: 'Scrum',
            isActive: true,
          },
        ],
      },
    }
  },
}
</script>

<style scoped></style>
