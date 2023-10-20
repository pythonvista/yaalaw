<template>
  <section
    class="relative py-10 min-h-[60vh] overflow-hidden bg-black sm:py-16 lg:py-24 xl:py-32"
  >
    <div class="absolute  inset-0">
      <img
        class="object-cover nn w-full h-full md:object-left md:scale-150 md:origin-top-left"
        src="https://i.imgur.com/QyzSgC5.jpg"
        alt=""
      />
    </div>

    <div
      class="absolute inset-0 hidden bg-gradient-to-r md:block from-black to-transparent"
    ></div>

    <div class="absolute inset-0 block bg-black/60 md:hidden"></div>

    <div class="relative flex justify-between items-center  mx-auto sm:px-9 md:px-14">
      <div class="xs:text-center flex-1 md:text-left">
        <h2
          class="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl"
        >
         About <br class="xs:block md:hidden"> YAA Law Consult
        </h2>
        <p class="mt-4 xs:px-3 md:px-0 text-base text-gray-200">
         The cannon upon which any successful organisation predicating its objectives on continued life, prosperity and growth is based on sound and proper management, skills and formulated policies.<br>No safeguard is too much to ensure that competent hands handle and execute the key result area within the requisite regulated framework for any arising legal issue(s) or timely advise against preventive occurrences It is therefore no gainsaying that since we offer within our solid legal services pan-disciplinary knowledge in general administration and dispute resolution.
        </p>

        <div class="pt-10 flex xs:justify-center md:justify-start">
              <a
                @click="$router.push({path: '/about' })"
                class="bg-[#8c4f0d] xs:flex cursor-pointer text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                >Read More</a
              >
            </div>
      </div>
      <div class="flex-1 xs:hidden md:flex justify-center  items-center">
        <img width="60%" class="bg-white p-5 rounded-md shadow-md" src="https://i.imgur.com/sxs8AvW.png" alt="">
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>

.nn{
  opacity: 0.3;
}

</style>
