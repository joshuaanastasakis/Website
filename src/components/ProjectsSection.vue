<script setup lang="ts">
import Divider from './Divider.vue'
import FirebaseIcon from './icons/FirebaseIcon.vue'
import ProjectCardBig from './ProjectCardBig.vue'
import { computed } from 'vue'

const projects = {
  Restify: {
    title: "Restify",
    stack: ["github", "react", "python"],
    link: "https://github.com/joshuaanastasakis/Restify",
    img: "/images/Restify.png",
  },
  Simulence: {
    title: "Simulence",
    stack: ["vue", "firebase"],
    link: "https://simulence.com/",
    img: null,
  },
  Checkout_Calculator: {
    title: "Checkout Calculator",
    stack: ["github", "vue"],
    link: "https://github.com/joshuaanastasakis/CSC301A2",
    img: "/images/Simple Checkout Price Calculator.png",
  },
}

</script>

<template>
  <div id="projects" class="section">
    <h2>Projects</h2>
    <Divider />
    <div class="main-projects-container">
      <ProjectCardBig v-for="project of projects" :title="project.title" :img="project.img" :link="project.link" :stack="project.stack" />
      <ProjectCardBig class="project-blank" v-if="Object.keys(projects).length % 2 !== 0" title="" :img="null" :link="null" :stack="null" />
    </div>
  </div>
</template>

<style scoped>

</style>
