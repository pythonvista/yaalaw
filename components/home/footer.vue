<template>
  <footer class="bg-white text-grey-600 py-4 marker:py-4">
    <div class="flex justify-center items-center">
      <div>
        <p>&copy; {{ currentYear }} YAA Law Consult. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  data() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
/* No custom styles needed */
</style>
