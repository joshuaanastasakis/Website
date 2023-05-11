<script lang="ts">
import Divider from './Divider.vue'
import Icon from './icons/Icon.vue';
import emailjs from '@emailjs/browser';
// import SECRETS from '../../SECRETS.js'

export default {
  data() {
    return {
      name: '',
      error_name: false,
      email: '',
      error_email: false,
      message: '',
      error_message: false,
      validated: false,
      disableButton: true,
    }
  },
  computed: {
    disableSendButton() {
      return (this.name.length===0 || this.email.length<5 || this.message.length===0) || this.disableButton;
    }
  },
  methods: {
    sendEmail() {
      console.log(this.$refs.form)
      if (this.validateInputs()) {
        this.disableButton = true;
        emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID as string, import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string, this.$refs.form as HTMLFormElement, import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string)
        .then((res) => {
          console.log(res)
          this.$toast.open({
            message: "Email sent!",
            type: "success"
          });
          this.disableButton = false;
          this.name='';
          this.email='';
          this.message='';
        }, (error) => {
          console.log(error)
          this.$toast.open({
            message: "Something went wrong",
            type: "error"
          });
        });
      }
      
    },
    validateInputs() {
      if (this.name.length===0 && this.email.length===0 && this.message.length===0) {
        this.disableButton = true;
        this.error_name=false;
        this.error_email=false;
        this.error_message=false;
        return false;
      }
      if (this.name.length===0) {
        this.error_name=true;
      } else {
        this.error_name=false;
      }
      if (this.email.length < 5) {
        this.error_email=true;
      } else {
        this.error_email=false;
      }
      if (this.message.length === 0) {
        this.error_message=true;
      } else {
        this.error_message=false;
      }
      this.disableButton = false;
      return !(this.error_name || this.error_email || this.error_message);
    }
  },
  watch: {
    name: {
      handler: function(val, oldVal) {
        this.validateInputs();
      }
    },
    email: {
      handler: function(val, oldVal) {
        this.validateInputs();
      }
    },
    message: {
      handler: function(val, oldVal) {
        this.validateInputs();
      }
    },
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
        <input :class="{'error': error_name}" type="text" name="name" v-model="name">
      </div>
      <div class="input-section">
        <label>Email</label>
        <input :class="{'error': error_email}" type="email" name="email" v-model="email">
      </div>
      <div class="input-section">
        <label>Message</label>
        <textarea :class="{'error': error_message}" name="message" v-model="message"></textarea>
      </div>
      <input :disabled="disableSendButton" class="submit-button" type="submit" value="Send Email">
    </form>
    <div class="icon-container">
      <Icon title="github2xl" :href="'https://github.com/joshuaanastasakis'"></Icon>
      <Icon title="email2xl"></Icon>
      <Icon title="linkedin2xl"></Icon>
    </div>
  </div>
</template>

<style scoped>
</style>
