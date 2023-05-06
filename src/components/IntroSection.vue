<script lang="ts">
export default {
    methods: {
      onClick(event: Event) {
        console.log("button clicked");
        
      }
    }
}
</script>

<template>
  <div id="home">
    <span class="background-container">
      <div class="circle" id="intro-circle"></div>
    </span>
    <h1>Josh Harris</h1>
    <h4>Web Developer</h4>
  </div>
</template>

<style scoped>
</style>
