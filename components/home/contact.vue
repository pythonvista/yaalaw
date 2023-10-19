<template>
  <section class="py-10 bg-slate-100 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="max-w-2xl mx-auto text-center">
        <h2
          class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl"
        >
          Contact us
        </h2>
        <p
          class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-500"
        >
          You can request by contacting any of the numbers below or fill our
          online form.<br />
          To request service on any of our practices:
        </p>
      </div>

      <div class="max-w-5xl mx-auto mt-12 sm:mt-16">
        <div
          class="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3"
        >
          <div class="overflow-hidden bg-white rounded-xl">
            <div class="p-6">
              <svg
                class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <p class="mt-6 text-lg font-medium text-gray-900">
                +234 811 1111 470
              </p>
              <p class="mt-1 text-lg font-medium text-gray-900">
                +234 901 986 5853
              </p>

              <p class="mt-1 text-lg font-medium text-gray-900">
                +44 740 5646 162
              </p>
            </div>
          </div>

          <div class="overflow-hidden bg-white rounded-xl">
            <div class="p-6">
              <svg
                class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <p class="mt-6 text-md font-medium text-gray-900">
                info@yaalawconsult.com
              </p>
            </div>
          </div>

          <div class="overflow-hidden bg-white rounded-xl">
            <div class="p-6">
              <svg
                class="flex-shrink-0 w-10 h-10 mx-auto text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <p class="mt-6 text-lg font-medium leading-relaxed text-gray-900">
                Plot 767, Charles owaba Street, Wuje, Abuja, Federal Capital
                Territory.
              </p>
            </div>
          </div>
        </div>
        <div class="pt-10 flex w-full items-center justify-center">
        <a
         @click="$router.push({path: '/contact'})"
          class="bg-[#8c4f0d] xs:flex cursor-pointer text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
          >Message us today!</a
        >
      </div>
      </div>
      
    </div>
  </section>
</template>

<script>
import emailjs from '@emailjs/browser';
emailjs.init('KWxV8yAmllRrqi-Yq');
export default {
  data: () => ({
    dform: {},
    loading: false,
  }),
  computed: {
    isValid() {
      if (this.dform.fullname && this.dform.email && this.dform.message) {
        return true;
      }
      return false;
    },
  },
  methods: {
    async Send() {
      try {
        this.loading = true;
        await emailjs.send('service_qumstvh', 'template_6m4td5d', this.dform);
        this.loading = false;
        this.dform = {};
        ShowSnack('Mail Sent Successfully', 'positive');
      } catch (err) {
        console.log(err);
        this.loading = false;
        ShowSnack('Error Sending Mail', 'negative');
      }
    },
  },
};
</script>

<style></style>
