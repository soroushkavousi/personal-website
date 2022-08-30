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
          :id="mainStack.id"
          :title="mainStack.title"
          :skills="mainStack.skills"
        ></skill-container>
        <skill-container
          :id="experienceStack.id"
          :title="experienceStack.title"
          :skills="experienceStack.skills"
        ></skill-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      mainStack: {
        id: 'main-stack',
        title: 'Main Stack',
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
            name: 'Docker',
            icon: 'devicon-docker-plain-wordmark',
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
            name: 'Unity',
            icon: 'mdi-unity',
            isActive: true,
          },
          {
            name: 'GitHub',
            icon: 'devicon-github-original-wordmark',
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
        ],
      },
      experienceStack: {
        id: 'experience-stack',
        title: 'Experience Stack',
        skills: [
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
          {
            name: 'PyCharm',
            icon: 'devicon-pycharm-plain',
            isActive: false,
          },
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
          {
            name: 'GitLab',
            icon: 'devicon-gitlab-plain-wordmark',
            isActive: false,
          },
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