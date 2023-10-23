<template>
  <div>
    <Header ></Header>
    <div class="wrap min-h-screen">
      <slot />
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import Header from '~/components/utils/Header.vue';

export default {
  components: {
    Header,
  },
  data: () => ({
    
  }),
  computed: {},
  created() {
    
  },
  mounted() {
    const { $listen } = useNuxtApp();
    $listen('opennav', () => {
      this.sheet = !this.sheet;
      store.SetNav(this.sheet);
    });
    AOS.init({
      offset: 200,
      duration: 600,
      delay: 400,
    });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
body, #app{

  font-family: 'Quicksand', sans-serif !important;
}


</style>
