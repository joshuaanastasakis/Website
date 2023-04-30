<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import AboutSection from './components/AboutSection.vue'
import { onMounted, computed } from 'vue';
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue';

const route = useRoute();
const router = useRouter();

const currentPath = ref('home');

onMounted(() => {
  const paths = ['home', 'about', 'projects', 'contact']
  let path = route.path.slice(1);
  if (path==='') path = 'home';
  // console.log(path)
  if (paths.includes(path)) {
    // console.log("scroll")
  }
})

function checkRoute(r: string) {
  const paths = ['', 'about', 'projects', 'contact']
  let path = route.path.slice(1);
  // console.log(route)
  // if (path==='') path = 'home';
  // console.log(path)
  // currentPath=path;
  return paths.includes(path) && path===r;
}

function handleChangePath(newPath:string) {
  // console.log(`handle path change to ${newPath}`)
  currentPath.value = newPath;
  // console.log(`currentPath = ${currentPath}`)

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
        <!-- <RouterLink :class="{'active': checkRoute('')}" exact :to="{path: '/'}">Home</RouterLink>
        <RouterLink :class="{'active': checkRoute('about')}" exact :to="{path: '/about'}">About</RouterLink>
        <RouterLink :class="{'active': checkRoute('projects')}" exact :to="{path: '/projects'}">Projects</RouterLink>
        <RouterLink :class="{'active': checkRoute('contact')}" exact :to="{path: '/contact'}">Contact</RouterLink> -->
      </nav>
  </header>
  <main>
    <RouterView @change-path="handleChangePath"/>
  </main>
  <footer></footer>

</template>

<style scoped>

</style>
