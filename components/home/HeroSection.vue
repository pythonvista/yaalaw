<template>
  <div  class="relative wrap min-h-[80vh] border-b-4 border-solid border-white flex justify-center items-center p-10 ">
    <div class="absolute inset-0 lg:hidden">
      <img
        class="object-cover object-center w-full h-full opacity-50"
        src="https://i.imgur.com/6coCaU4.jpg"
        alt=""
      />
    </div>
   

    <div class="relative">
      <div class="px-6 mx-auto sm:px-8 lg:px-12 xs:w-full ">
        <div class="grid xs:items-start text-left md:items-center grid-cols-1 lg:grid-cols-2">
          <div>
            <h1
              class="font-sans text-lg xs:text-center md:text-left font-normal tracking-tight text-white text-opacity-70"
            >
              YAA Law Consult
            </h1>
            <p class="mt-6 tracking-tighter xs:text-center md:text-left text-white">
              <span class="font-sans font-normal xs:text-center xs:text-4xl md:text-7xl">Providing Quality</span
              ><br />
              <span class="font-serif italic font-normal xs:text-4xl md:text-8xl"
                >Legal Services</span
              >
            </p>
            <div class="pt-10 flex xs:justify-center md:justify-start">
              <!-- <a
            href="mailto:info@yaalawconsult.com"
            class="bg-[#8c4f0d]  xs:flex  cursor-pointer text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >Book Appointment</a
          > -->
            </div>
          </div>

          <div class="xs:hidden lg:flex justify-end items-center w-full ">
            <img
            width=""
              class="w-full mx-auto"
              src="https://i.imgur.com/6coCaU4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>

    
  </div>
</template>

<script>
export default {};
</script>

<style scoped>

.wrap{
  background:  linear-gradient(90deg, rgba(5,5,5,1) 0%, rgba(19,19,19,0.8183648459383753) 0%, rgba(0,0,0,1) 45%), url('https://i.imgur.com/QyzSgC5.jpg');
  background-size: cover;
  background-position: left;
  
}
</style>
