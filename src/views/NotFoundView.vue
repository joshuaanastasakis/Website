<script setup lang="ts">
import IntroSection from '../components/IntroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import VueScrollTo from 'vue-scrollto'
import { useScroll} from '@vueuse/core'
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'

const route = useRoute()

onMounted(() => {
  const paths = ['home', 'about', 'projects', 'contact']
  let path = route.path.slice(1);
  if (path==='') path = 'home';
  console.log(path)
  if (paths.includes(path)) {
    console.log("scroll")
    VueScrollTo.scrollTo(`#${path}`, 700, {easing: 'ease', cancelable: false})
  }
})


</script>

<template>
  <div>
    <h1>Not Found</h1>
  </div>
</template>
