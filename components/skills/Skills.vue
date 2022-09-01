<template>
  <v-container fluid>
    <h1
      v-intersect="onIntersect"
      class="accent--text text--lighten-2 text-h3 mb-10 ml-16"
    >
      # SKILLS
    </h1>
    <v-row justify="center" style="height: 750px">
      <v-col cols="9" class="d-flex flex-column justify-space-around">
        <skill-container
          :id="backend.id"
          :title="backend.title"
          :skills="backend.skills"
        ></skill-container>
        <skill-container
          :id="tools.id"
          :title="tools.title"
          :skills="tools.skills"
        ></skill-container>
        <skill-container
          :id="web.id"
          :title="web.title"
          :skills="web.skills"
        ></skill-container>
        <skill-container
          :id="game.id"
          :title="game.title"
          :skills="game.skills"
        ></skill-container>
        <skill-container
          :id="desktop.id"
          :title="desktop.title"
          :skills="desktop.skills"
        ></skill-container>
      </v-col>
    </v-row>
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
            name: 'C#',
            icon: 'devicon-csharp-plain',
            isActive: true,
          },
          {
            name: '.Net Core',
            icon: 'devicon-dotnetcore-plain',
            isActive: true,
          },
          {
            name: '<p class="ma-0">PostgreSQL</p><p class="ma-0">pgAdmin</p>',
            icon: 'devicon-postgresql-plain-wordmark',
            isActive: true,
          },
          {
            name: 'Nginx',
            icon: 'devicon-nginx-original',
            isActive: true,
          },
          {
            name: 'Python',
            icon: 'devicon-python-plain-wordmark',
            isActive: false,
          },
          {
            name: 'Django',
            icon: 'devicon-django-plain',
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
            icon: 'devicon-docker-plain-wordmark',
            isActive: true,
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original-wordmark',
            isActive: true,
          },
          {
            name: 'GitLab',
            icon: 'devicon-gitlab-plain-wordmark',
            isActive: true,
          },
          {
            name: 'Visual Studio',
            icon: 'devicon-visualstudio-plain',
            isActive: true,
          },
          {
            name: 'Visual Studio Code',
            icon: 'devicon-vscode-plain-wordmark',
            isActive: true,
          },
          {
            name: 'Ubuntu',
            icon: 'devicon-ubuntu-plain-wordmark',
            isActive: true,
          },
          {
            name: 'Windows',
            icon: 'devicon-windows8-original',
            isActive: true,
          },
          {
            name: 'PyCharm',
            icon: 'devicon-pycharm-plain',
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
            isActive: false,
          },
          {
            name: 'Nuxt.js',
            icon: 'mdi-nuxt',
            isActive: false,
          },
          {
            name: 'Vue.js',
            icon: 'devicon-vuejs-plain-wordmark',
            isActive: false,
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
    }
  },
  methods: {
    onIntersect(entries, observer) {
      // console.log('test')
      // console.dir(entries)
      // console.dir(observer)
    },
  },
}
</script>

<style scoped>
</style>