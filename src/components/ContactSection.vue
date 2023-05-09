<script lang="ts">
import Divider from './Divider.vue'
import Icon from './icons/Icon.vue';
import emailjs from '@emailjs/browser';

export default {
  methods: {
    sendEmail() {
      console.log(this.$refs.form)
    }
  }
}

</script>

<template>
  <div id="contact" class="section">
    <h2>Contact</h2>
    <Divider />
    <form ref="form" @submit.prevent="sendEmail">
      <div class="input-section">
        <label>Name</label>
        <input type="text" name="name">
      </div>
      <div class="input-section">
        <label>Email</label>
        <input type="text" name="email">
      </div>
      <div class="input-section">
        <label>Subject</label>
        <input type="text" name="subject">
      </div>
      <div class="input-section">
        <label>Message</label>
        <textarea name="message"></textarea>
      </div>
      <input class="submit-button" type="submit" value="Send">
    </form>
    <div class="icon-container">
      <Icon title="github2xl"></Icon>
      <Icon title="email2xl"></Icon>
    </div>
  </div>
</template>

<style scoped>
</style>
