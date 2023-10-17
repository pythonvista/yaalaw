<template>
  <header class="border-gray-200 sticky top-0 left-0 w-full z-10 border-b-2">
    <nav class="bg-white px-4 lg:px-6 py-3">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a
          @click="$router.push({ path: '/' })"
          class="flex flex-1 relative cursor-pointer items-center"
        >
          <img
            src="@/assets/logo.jpg"
            class="h-6 sm:h-9"
            alt="Flowbite Logo"
          />

         
        </a>
        <div class="flex flex-1 items-center justify-end lg:order-2">
          <a
            href="mailto:info@yaalawconsult.com"
            class="bg-[#8c4f0d] md:flex xs:hidden cursor-pointer text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >Book Appointment</a
          >

          <a
            href="mailto:info@yaalawconsult.com"
            class="bg-[#8c4f0d]  xs:flex lg:hidden cursor-pointer text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >Book Appointment</a
          >
        </div>
        <div
          class="xs:hidden  justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul
            class="flex flex-col justify-center items-center w-full font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
                href="#about"
                class="block pr-4 pl-3 text-black font-bold cursor-pointer hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >About</a
              >
            </li>
            <li>
              <a
                href="#practise"
                class="block pr-4 pl-3 cursor-pointer font-bold text-black hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >Practise Area</a
              >
            </li>
             <li>
              <a
                href="#teams"
                class="block pr-4 pl-3 text-black font-bold cursor-pointer hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >Our Team</a
              >
            </li>
            <li>
              <a
                href="#contact"
                class="block pr-4 pl-3 text-black font-bold cursor-pointer hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
let store;
export default {
  data: () => ({
    sheet: true,
  }),
  props: ['uid'],
  methods: {
    OpenNav() {
      const { $event } = useNuxtApp();
      $event('opennav');
    },
  },
  created() {
    store = useLoungeStore();
  },
  computed: {
    nav() {
      return store.nav;
    },
  },
};
</script>

<style></style>
