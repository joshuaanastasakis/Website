<script setup lang="ts">


const props = defineProps<{
  title: string,
  href?: string,
}>();
</script>

<template>
  <i v-if="props.title === 'github'" class="fa-brands fa-github fa-xl"></i>
  <a v-else-if="props.title === 'github2xl'" class="fa-brands fa-github fa-2xl" :href="props.href" target='_blank' rel='noopener'></a>
  <i v-else-if="props.title === 'react'" class="fa-brands fa-react fa-xl"></i>
  <i v-else-if="props.title === 'python'" class="fa-brands fa-python fa-xl"></i>
  <i v-else-if="props.title === 'vue'" class="fa-brands fa-vuejs fa-xl"></i>
  <svg v-else-if="props.title === 'firebase'" id="firebase-icon" xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-firebase" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"/> <path d="M4.53 17.05l6.15 -11.72h-.02c.38 -.74 1.28 -1.02 2.01 -.63c.26 .14 .48 .36 .62 .62l1.06 2.01" /> <path d="M15.47 6.45c.58 -.59 1.53 -.59 2.11 -.01c.22 .22 .36 .5 .41 .81l1.5 9.11c.1 .62 -.2 1.24 -.76 1.54l-6.07 2.9c-.46 .25 -1.01 .26 -1.46 0l-6.02 -2.92c-.55 -.31 -.85 -.92 -.75 -1.54l1.96 -12.04c.12 -.82 .89 -1.38 1.7 -1.25c.46 .07 .87 .36 1.09 .77l1.24 1.76" /> <path d="M4.57 17.18l10.93 -10.68" /> </svg>
  <a v-else-if="props.title === 'email2xl'" class="fa-solid fa-envelope fa-2xl" href="mailto:joshuaanastasakis@gmail.com"></a>
  <a v-else-if="props.title === 'linkedin2xl'" class="fa-brands fa-linkedin fa-2xl" href="https://www.linkedin.com/in/joshua-anastasakis-a8029471/" target='_blank' rel='noopener'></a>

</template>

<style scoped>
</style>
