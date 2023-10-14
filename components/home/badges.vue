<template>
  <section class="py-10 bg-white sm:py-16 lg:py-24">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
        >
          MEDFESTCARE BADGES
        </h2>
        <p
          class="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600"
        >
          Become a superpro user by attaining certain heights and perks.
        </p>
      </div>

      <div class="max-w-sm  mx-auto mt-8 sm:mt-16">
        <div class="space-y-3">
          <div
            v-for="(i, index) in badges"
            :key="index"
            class="overflow-hidden transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-50"
          >
            <div class="px-3 py-5 sm:p-4">
              <div class="flex items-center">
                <div>
                  <img width="100" :src="i.icon" alt="">
                </div>
                <div  class="ml-2 flex flex-col gap-2 mr-auto">
                  <p class="text-md font-semibold text-black">{{ i.title }}</p>    
                  <p class="text-xs text-gray-600">{{ i.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://play.google.com/store/apps/details?id=com.medfestcareng.medfestcare"
          title=""
          class="inline-flex items-center justify-center w-full px-12 py-4 mt-6 font-semibold text-white transition-all duration-200 rounded-md bg-gradient-to-r from-fuchsia-600 to-blue-600 hover:opacity-80 focus:opacity-80"
          role="button"
        >
          Donate Now
        </a>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    badges: [
      {
        icon: 'https://i.imgur.com/cPGxwv0.png',
        title: 'Ultimate Philanthropic Grandeur',
        desc: 'Five top donors for the 10th times',
      },
      {
        icon: 'https://i.imgur.com/917Zh21.png',
        title: 'Very Health Subcriber',
        desc: 'Must have subcribed for VHS',
      },
      {
        icon: 'https://i.imgur.com/K5zxUKK.png',
        title: 'Veteran',
        desc: 'Active subcriber for 10 years',
      },
      {
        icon: 'https://i.imgur.com/GM49yjE.png',
        title: 'Philanthropist',
        desc: 'Top 5 donors for thr free health care program in atleast 1year ',
      },
    ],
  }),
};
</script>

<style>

</style>
