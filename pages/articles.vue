<template>
  <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
      <div class="flex items-end justify-between">
        <div class="flex-1 text-center lg:text-left">
          <h2
            class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl"
          >
            Latest Blog
          </h2>
          <p
            class="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600 lg:mx-0"
          >
            Get the latest updates from YAA Law Consults, articles and events.
          </p>
        </div>
      </div>

      <div
        class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full"
      >
        <div
          v-for="(i, index) in blogs"
          :key="index"
          class="overflow-hidden bg-white rounded shadow"
        >
          <div class="p-5">
            <div class="relative">
              <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                <img
                  class="object-cover aspect-video object-top w-full h-full"
                  :src="i.img"
                  alt=""
                />
              </a>

              <div class="absolute top-4 left-4">
                <span
                  class="px-4 py-2 text-xs font-semibold tracking-widest text-gray-900 uppercase bg-white rounded-full"
                >
                  {{ i.category }}
                </span>
              </div>
            </div>
            <span
              class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase"
            >
              {{ i.date }}
            </span>
            <p class="mt-5 text-2xl font-semibold">
              <a href="#" title="" class="text-black">
                {{ i.title }}
              </a>
            </p>
            <p class="mt-4 text-base text-gray-600">
              {{ i.shortDesc }}
            </p>
            <a
              @click="Open(i)"
              title=""
              class="inline-flex cursor-pointer items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600"
            >
              Continue Reading
              <svg
                class="w-5 h-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <v-dialog
        fullscreen
        :scrim="false"
        transition="dialog-bottom-transition"
        v-model="dialog"
      >
        <v-card>
          <v-toolbar dark color="#8c4f0d">
            <v-toolbar-title class="text-white">
              {{ dform.title }}</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-toolbar-items>
              <v-btn variant="text" color="white" @click="dialog = false">
                Close
              </v-btn>
            </v-toolbar-items>
          </v-toolbar>
          <div class="p-5">
            <div class="flex justify-start items-center gap-3">
              <img
                width="300"
                class="relative rounded-md shadow-lg"
                :src="dform.img"
                alt=""
              />
              <h2
                class="text-2xl font-bold leading-tight text-black sm:text-4xl lg:text-4xl"
              >
                {{ dform.title }} <br />
                <p class="italic font-mono font-light text-sm">
                  {{ dform.shortDesc }}
                </p>
              </h2>
            </div>

            <div>
              <p
                v-html="dform.longDesc"
                class="mt-3 pr-4 text-lg leading-relaxed text-gray-600 md:mt-8"
              ></p>
            </div>
          </div>
        </v-card>
      </v-dialog>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dform: {},
    blogs: [
      {
        img: 'https://i.imgur.com/N6f3Ucm.jpg',
        date: '10/21/2023',
        category: 'Graduation',
        shortDesc:
          'YAA Law Consult congratulates Miss Precious Alo on her 2023 University of Ilorin convocation. Precious, a law graduate, joined us as a Corp member. Well done! 🎓🎉',
        longDesc:
          'The entire members of YAA Law Consult felicitate with Miss Precious Alo on the event of her convocation today, the 20th October 2023 at the University of Ilorin (Better by far), Kwara State, Nigeria. Precious, a law graduate joined YAA Law Consult as a Corp member in 2023 having been duly mobilised by National Youth Service Corps (NYSC) for a one-year mandatory service to the Nation. Congratulations to you, Precious! We rejoice with you.',
        title:
          'Celebrating Precious Alo: University Convocation and Career Milestones',
      },
    ],
  }),
  methods: {
    Open(team) {
      this.dialog = true;
      this.dform = team;
    },
  },
  setup() {
    definePageMeta({
      layout: 'home',
    });
  },
};
</script>

<style></style>
