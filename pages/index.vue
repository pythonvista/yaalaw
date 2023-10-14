<template>
  <div>
   <HomeHeroSection id="home"></HomeHeroSection>
    <HomeAbout id="about"></HomeAbout>
    <HomeWorks></HomeWorks>
    <HomePlans  id="practise"></HomePlans>
    <HomeForhealthcare  id="teams"></HomeForhealthcare>
    <HomeFeatures></HomeFeatures>
    <HomeNumbers></HomeNumbers>
    <HomeBlog></HomeBlog>
    <HomeContact id="contact"></HomeContact>
  </div>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: 'home',
    });
  },
};
</script>

<style></style>
