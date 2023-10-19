<template>
  <section
    class="py-10 px-4 bg-white flex flex-col justify-center items-center sm:py-16 lg:py-10"
  >
    <h1 class="text-black mb-10 text-2xl font-bold underline ">Image Gallery</h1>

    <div class="grid xs:grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3">
      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/E0gCntQ.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
        class="vertical"
      >
        <img src="https://i.imgur.com/QtPnh4g.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
        class="horizontal"
      >
        <img src="https://i.imgur.com/Jlpnij5.jpg" />
      </a>

     

      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/uLPVZll.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
        class="big"
      >
        <img src="https://i.imgur.com/9rjU1Hn.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/CS6CaaF.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
        class="vertical"
      >
        <img src="https://i.imgur.com/IySgA5E.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/0NQ3qw1.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
        class="horizontal"
      >
        <img src="https://i.imgur.com/5QHm7z1.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/LnBzR6s.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
        class="big"
      >
        <img src="https://i.imgur.com/9uXdzRg.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/Nk0eXG7.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
        class="horizontal"
      >
        <img src="https://i.imgur.com/bmZ2G7a.jpg" />
      </a>

      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/DP9UKVc.jpg" />
      </a>
      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/4ro6Hcx.jpg" />
      </a>
      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/J6H7oeb.jpg" />
      </a>
      <a
        href=""
        data-lightbox="homePortfolio"
      >
        <img src="https://i.imgur.com/Zn5WC0J.jpg" />
      </a>
      
    </div>

   
  </section>

  <template> </template>
</template>

<script>
export default {
  setup() {
    definePageMeta({
      layout: 'home',
    });
  },
}
</script>
<style scoped>

a{
  height: 100%;
}
img{
  height: 100%;
  object-fit:cover ;
}
</style>