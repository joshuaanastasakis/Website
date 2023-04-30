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
  <div id="home" class="section">
    home
    <button @click="onClick">Click me</button>
  </div>
</template>

<style scoped>
</style>
