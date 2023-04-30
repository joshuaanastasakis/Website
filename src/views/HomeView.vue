<script setup lang="ts">
import IntroSection from '../components/IntroSection.vue'
import AboutSection from '../components/AboutSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
import ContactSection from '../components/ContactSection.vue'
import VueScrollTo from 'vue-scrollto'
import { useRouter, useRoute } from 'vue-router'
import { ref, onMounted } from 'vue'
import { useScroll } from '../hooks/useScroll.js'

const route = useRoute()
const router = useRouter()
const scroll = useScroll;

const emit = defineEmits(['change-path'])

let currentPath = 'home';

function updatePath(path: string) {
  currentPath = path;
  history.pushState({}, '', path==='home' ? '/' : `/${path}`);
  emit('change-path', path)
}

onMounted(() => {
  const paths = ['home', 'about', 'projects', 'contact']
  let path = route.path.slice(1);
  if (path==='') path = 'home';
  if (paths.includes(path)) {
    VueScrollTo.scrollTo(`#${path}`, 700, {easing: 'ease', cancelable: false})
  }
})

scroll((elements:any) => {
  const sorted = elements.sort((a:any,b:any) => {
    const aval = Math.abs(a.val);
    const bval = Math.abs(b.val);
    return aval > bval ? 1 : aval < bval ? -1 : 0;
  });
  const closest = sorted[0];
  if (closest.name!== currentPath) {
    updatePath(closest.name);
  }
})

</script>

<template>
    <IntroSection />
    <AboutSection />
    <ProjectsSection />
    <ContactSection />
</template>
