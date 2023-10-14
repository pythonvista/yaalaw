<template>
  <div class="w-full">
    <swiper
      :spaceBetween="30"
      :centeredSlides="true"
      :autoplay="{
        delay: 2500,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
      :navigation="false"
      :modules="modules"
      class="mySwiper"
    >
      <swiper-slide
        class="overflow-hidden"
        v-for="(i, index) in img"
        :key="index"
      >
        <div class="flex justify-center items-center">
          <img width="250" :src="i" class="" alt="" />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
export default {
  data: () => ({
    img: [
      'https://i.imgur.com/aakMCEk.png',
      'https://i.imgur.com/o5PJUt1.png',
      'https://i.imgur.com/8MCHWm6.png',
      'https://i.imgur.com/d3nUqZp.png',
    ],
  }),
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
};
</script>

<style scoped>
.swiper {
  padding: 2.5em 0;
}

.swiper-slide {
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
