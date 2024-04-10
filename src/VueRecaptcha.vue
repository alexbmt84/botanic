<template>
    <div>
      <form @submit.prevent="submitForm">
        <label>
          Name:
          <input type="text" v-model="name">
        </label>
        <label>
          Email:
          <input type="email" v-model="email">
        </label>
        <vue-recaptcha ref="recaptcha" @verify="onVerify"></vue-recaptcha>
        <button type="submit">Submit</button>
      </form>
    </div>
  </template>
  <script>
    import Vue from 'vue'
    import VueRecaptcha from 'vue-recaptcha'
    
    Vue.component('vue-recaptcha', VueRecaptcha)
    
    export default {
      data() {
        return {
          name: '',
          email: ''
        }
      },
      methods: {
        submitForm() {
          this.$refs.recaptcha.execute()
        },
        onVerify(response) {
          // Verify the response with your server and submit the form
          console.log(response)
        }
      }
    }
  </script>

