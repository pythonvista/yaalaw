<template>
    <div class="h-screen flex justify-center items-center">
      <q-btn @click="Goto" :loading="loading" color="black ">Login as Admin</q-btn>
  
    </div>
  </template>
  
  <script>
  export default {
      data:()=>({
          url: "admin.yaalawconsult.com",
          loading: false
      }),
      setup() {
      definePageMeta({
        layout: 'home',
      });
    },
      methods:{
          Goto(){
              this.loading = true
              location.replace(this.url, '_blank')
          }
      }
  }
  </script>
  
  <style>
  
  </style>