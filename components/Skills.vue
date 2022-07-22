<template>
  <v-container fluid>
    <h1 class="accent--text text--lighten-2 text-h3 mb-14 ml-16"># SKILLS</h1>
    <v-row
      justify="center"
      class="my-0"
      v-for="(_, rowNumber) in Math.ceil(skillGroups.length / 2)"
      :key="rowNumber"
    >
      <v-col
        v-for="(skillGroup, i) in skillGroups.slice(
          rowNumber * 2,
          rowNumber * 2 + 2
        )"
        :key="i"
        class="mx-5 mb-8"
        lg="5"
        md="5"
        sm="5"
        cols="10"
        ><skill-container
          :id="skillGroup.id"
          :title="skillGroup.title"
          :skills="skillGroup.skills"
        ></skill-container
      ></v-col>
    </v-row>
    <div class="mx-16 pl-13">
      <v-row align="center" class="mb-1 mx-0 mt-0"
        ><v-card
          width="20"
          height="20"
          color="accent lighten-2"
          class="rounded-sm"
        ></v-card>
        <p class="ml-3 my-0 accent--text text--lighten-2">Recently Used</p>
      </v-row>
      <v-row align="center" class="mb-1 mx-0 mt-0"
        ><v-card
          width="20"
          height="20"
          color="secondary darken-2"
          class="rounded-sm"
        ></v-card>
        <p class="ml-3 my-0 secondary--text text--darken-2">Past Experience</p>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      skillGroups: [
        {
          id: 'backend-skills',
          title: 'Backend',
          skills: [
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
              name: 'Django',
              icon: 'devicon-django-plain',
              isActive: false,
            },
          ],
        },
        {
          id: 'video-game-development-skills',
          title: 'Video Game Development',
          skills: [
            {
              name: 'Unity',
              icon: 'mdi-unity',
              isActive: true,
            },
          ],
        },
        {
          id: 'frontend-skills',
          title: 'Frontend',
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
              icon: 'devicon-vuejs-plain-wordmark',
              isActive: true,
            },

            {
              name: 'HTML',
              icon: 'devicon-html5-plain-wordmark',
              isActive: true,
            },
            {
              name: 'CSS',
              icon: 'devicon-css3-plain-wordmark',
              isActive: true,
            },
          ],
        },
        {
          id: 'desktop-application-development-skills',
          title: 'Desktop Application Development',
          skills: [
            {
              name: 'WPF',
              image: 'http://files.bitiano.com/logos/wpf-logo.png',
              isActive: false,
            },
          ],
        },
        {
          id: 'version-control-skills',
          title: 'Version Control',
          skills: [
            {
              name: 'Git',
              icon: 'devicon-git-plain-wordmark',
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
          ],
        },
        {
          id: 'operating-system-skills',
          title: 'Operating System',
          skills: [
            {
              name: 'Docker',
              icon: 'devicon-docker-plain-wordmark',
              isActive: true,
            },
            {
              name: 'Windows',
              icon: 'devicon-windows8-original',
              isActive: true,
            },
            {
              name: 'Ubuntu',
              icon: 'devicon-ubuntu-plain-wordmark',
              isActive: true,
            },
          ],
        },
        {
          id: 'programing-and-scripting-language-skills',
          title: 'Programing & Scripting Language',
          skills: [
            {
              name: 'C#',
              icon: 'devicon-csharp-plain',
              isActive: true,
            },
            {
              name: 'Python',
              icon: 'devicon-python-plain-wordmark',
              isActive: true,
            },
            {
              name: 'JavaScript',
              icon: 'devicon-javascript-plain',
              isActive: true,
            },
            {
              name: 'c',
              icon: 'devicon-c-plain',
              isActive: false,
            },
            {
              name: 'c++',
              icon: 'devicon-cplusplus-plain',
              isActive: false,
            },
            {
              name: 'java',
              icon: 'devicon-java-plain',
              isActive: false,
            },
          ],
        },
        {
          id: 'ide-skills',
          title: 'IDE',
          skills: [
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
              name: 'PyCharm',
              icon: 'devicon-pycharm-plain',
              isActive: true,
            },
          ],
        },
      ],
    }
  },
}
</script>

<style scoped>
</style>