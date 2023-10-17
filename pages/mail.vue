<template>
  <div class="h-screen flex justify-center items-center">
    <q-btn @click="Goto" :loading="loading" color="black ">Login to webmail</q-btn>

  </div>
</template>

<script>
export default {
    data:()=>({
        url: "https://lim109.truehost.cloud:2096",
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