<template>
  <header class="border-gray-200 sticky top-0 left-0 w-full z-10 border-b-2">
    <nav class="bg-white px-4 lg:px-6 py-3">
      <div class="flex flex-wrap justify-between items-center mx-auto">
        <a
          @click="$router.push({ path: '/' })"
          class="flex flex-1 relative cursor-pointer items-center"
        >
          <img
            src="https://i.imgur.com/sxs8AvW.png"
            class="h-14 bg-white p-1 border-[1px] border-solid border-[#8c4f0d] rounded shadow-lg sm:h-14"
            alt="Flowbite Logo"
          />
        </a>
        <div class="flex flex-1 items-center justify-end lg:order-2">
          <a
            href="mailto:info@yaalawconsult.com"
            class="bg-[#8c4f0d] xs:hidden lg:flex cursor-pointer text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >Book Appointment</a
          >
          <div class="xs:flex lg:hidden">
            <q-btn round icon="menu" @click.stop="drawer = !drawer"></q-btn>
          </div>
        </div>
        <div
          class="xs:hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
        >
          <ul
            class="flex flex-col justify-center items-center w-full font-medium lg:flex-row lg:space-x-8 lg:mt-0"
          >
            <li>
              <a
              @click="$router.push({path: '/about'})"
                
                class="block pr-4 pl-3 text-black font-bold cursor-pointer hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >About</a
              >
            </li>
            <li>
              <a
              @click="$router.push({path: '/team'})"
               
                class="block pr-4 pl-3 cursor-pointer font-bold text-black hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >Our Team</a
              >
            </li>
            <li>
              <a
              @click="$router.push({path: '/gallery'})"
                class="block pr-4 pl-3 text-black font-bold cursor-pointer hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >Gallery</a
              >
            </li>
            <li>
              <a
              @click="$router.push({path: '/contact'})"
                class="block pr-4 pl-3 text-black font-bold cursor-pointer hover:text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0"
                >Contact</a
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
  <v-layout>
    <v-navigation-drawer class="relative" v-model="drawer" temporary>
      <v-list-item class="w-full">
        <div class="flex w-full py-7 justify-center items-center">
          <a
            @click="$router.push({ path: '/' })"
            class="flex relative cursor-pointer items-center"
          >
            <img
              src="https://i.imgur.com/sxs8AvW.png"
              class="h-14 bg-white p-1 border-[1px] border-solid border-[#8c4f0d] rounded shadow-lg sm:h-14"
              alt="Flowbite Logo"
            />
          </a>
        </div>
      </v-list-item>
      <v-divider></v-divider>
      <div class="p-4">
        <q-list bordered>
          <q-item :to="{ path: '/' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown" name="home" />
            </q-item-section>

            <q-item-section class="text-black">Home</q-item-section>
          </q-item>
          <q-item :to="{ path: '/about' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown" name="info" />
            </q-item-section>
            <q-item-section class="text-black">About</q-item-section>
          </q-item>
          <q-item :to="{ path: '/team' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown" name="group" />
            </q-item-section>
            <q-item-section class="text-black">Team</q-item-section>
          </q-item>
          <q-item :to="{ path: '/gallery' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown" name="image" />
            </q-item-section>
            <q-item-section class="text-black">Gallery</q-item-section>
          </q-item>
          <q-item :to="{ path: '/contact' }" clickable v-ripple>
            <q-item-section avatar>
              <q-icon color="brown" name="contact_phone" />
            </q-item-section>
            <q-item-section class="text-black">Contact Us</q-item-section>
          </q-item>
          <q-separator />
        </q-list>
      </div>
      <div class="w-full absolute bottom-10 flex flex-col justify-center items-center">
        <a
          @click="$router.push({ path: '/' })"
          class="flex relative cursor-pointer items-center"
        >
          <img
            src="https://i.imgur.com/iZLPx6U.png"
            class="h-14 bg-white p-1 border-[1px] border-solid border-[#8c4f0d] rounded shadow-lg sm:h-14"
            alt="Flowbite Logo"
          />
        </a>
        <q-item-section>YAA Law Consult</q-item-section>
      </div>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
let store;
export default {
  data: () => ({
    sheet: true,
    drawer: false,
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
