<script setup lang="ts">
import Divider from './Divider.vue'
import FirebaseIcon from './icons/FirebaseIcon.vue'
import Icon from './icons/Icon.vue'
import { onMounted } from 'vue';

onMounted(() => {
  console.log("Mounted project card big")
})

const stackOptions = {
  "github": "Github",
  "react": "ReactJS",
  "python": "Django",
  "vue": "VueJS",
  "firebase": "Firebase"
}

// "github" | "react" | "python" | "vue" | "firebase";

type stackItem = keyof typeof stackOptions;

type stack = stackItem[];

const props = defineProps<{
  stack: stack | null,
  img: string | null,
  title: string | null,
  link: string | null
}>();

const defaultImage = '/public/images/noimage.png';

</script>

<template>
  <div class="project-section">
        <div class="title-container">
          <h3>{{props.title ? props.title : "COMING SOON"}}</h3>
          <div class="title-icons">
            <Icon v-for="item of props.stack" :title="item"></Icon>
          </div>
        </div>
        <a class="project-image-container" :href="props.link ? props.link : ''" :target="props.link ? '_blank' : ''" :rel="props.link ? 'noopener' : ''">
          <img class="project-image" :src="props.img ? props.img : defaultImage" />
          <div class="overlay">
            <div class="stack-container">
              <span v-for="item of props.stack?.filter(i => i!=='github')">{{ stackOptions[item] }}</span>
            </div>
          </div>
        </a>
      </div>
</template>

<style scoped>

</style>
