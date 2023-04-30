<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AboutSection from './components/AboutSection.vue'
import { onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const currentPath = ref('home');

function checkRoute(r: string) {
  const paths = ['', 'about', 'projects', 'contact']
  let path = route.path.slice(1);

  return paths.includes(path) && path===r;
}

function handleChangePath(newPath:string) {
  currentPath.value = newPath;
  return checkRoute(newPath==='home' ? '' : newPath)
}

</script>

<template>
  <header>
      <nav>
        <RouterLink :class="{'active': currentPath==='home'}" exact :to="{path: '/'}">Home</RouterLink>
        <RouterLink :class="{'active': currentPath==='about'}" exact :to="{path: '/about'}">About</RouterLink>
        <RouterLink :class="{'active': currentPath==='projects'}" exact :to="{path: '/projects'}">Projects</RouterLink>
        <RouterLink :class="{'active': currentPath==='contact'}" exact :to="{path: '/contact'}">Contact</RouterLink>
      </nav>
  </header>
  <main>
    <RouterView @change-path="handleChangePath"/>
  </main>
  <footer></footer>

</template>

<style scoped>

</style>
