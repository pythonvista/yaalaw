<template>
  <section
    class="py-10 bg-white flex flex-col justify-center items-center sm:py-16 lg:py-10"
  >
    <h1 class="text-black">Image Gallery</h1>
    <div class="containern">
      <!--------------rij 1 div 1  top-left --------------------->
      <div class="thumbnail thumbnails2">
        <img
          class="ani-1 im1"
          src="https://i.imgur.com/5QHm7z1.jpg"
          alt="Image 1"
          @click="openImage('im1')"
        />
      </div>
      <!--------------- rij 1 div 2 middle --------------------->
      <div class="thumbnail thumbnails1">
        <img
          class="ani-1 im2"
          src="https://i.imgur.com/E0gCntQ.jpg"
          alt="Image 2"
          @click="openImage('im2')"
        />
        <img
          class="ani-1 im3"
          src="https://i.imgur.com/LnBzR6s.jpg"
          alt="Image 3"
          @click="openImage('im3')"
        />
        <img
          class="ani-1 im4"
          src="https://i.imgur.com/QtPnh4g.jpg"
          alt="Image 4"
          @click="openImage('im4')"
        />
      </div>
      <!------------- rij 1 div 3 top-right --------------------->
      <div class="thumbnail thumbnails2">
        <img
          class="ani-1 im5"
          src="https://i.imgur.com/9uXdzRg.jpg"
          alt="Image 5"
          @click="openImage('im5')"
        />
      </div>
      <!--------------- rij 2 div 1 moet column naar beneden 2 afbeeldingen tot  height 437 px  --------------------->
      <div class="thumbnail thumbnails4">
        <img
          class="ani-1 im6"
          src="https://i.imgur.com/Jlpnij5.jpg"
          alt="Image 6"
          @click="openImage('im6')"
        />
        <img
          class="ani-1 ani19"
          src="https://i.imgur.com/Nk0eXG7.jpg"
          alt="Image 7"
          @click="openImage('ani19')"
        />
        <img
          class="ani-1 ani18"
          src="https://i.imgur.com/bmZ2G7a.jpg"
          alt="Image 8"
          @click="openImage('ani18')"
        />
      </div>

      <div class="thumbnail" id="large-thumbnail">
        <img src="https://i.imgur.com/DP9UKVc.jpg" alt="Image 1" />
        <!-- Images will be displayed here -->
      </div>
      <div class="thumbnail thumbnails4">
        <img
          class="ani-1 im7"
          src="https://i.imgur.com/uLPVZll.jpg"
          alt="Image 9"
          @click="openImage('im7')"
        />
        <img
          class="ani-1 im8"
          src="https://i.imgur.com/4ro6Hcx.jpg"
          alt="Image 10"
          @click="openImage('im8')"
        />
        <img
          class="ani-1 im9"
          src="https://i.imgur.com/9rjU1Hn.jpg"
          alt="Image 11"
          @click="openImage('im9')"
        />
      </div>
      <div class="thumbnail thumbnails2">
        <img
          class="ani-1 im10"
          src="https://i.imgur.com/J6H7oeb.jpg"
          alt="Image 12"
          @click="openImage('im10')"
        />
      </div>
      <div class="thumbnail thumbnails1">
        <img
          class="ani-1 im11"
          src="https://i.imgur.com/CS6CaaF.jpg"
          alt="Image 13"
          @click="openImage('im11')"
        />
        <img
          class="ani-1 im12"
          src="https://i.imgur.com/Zn5WC0J.jpg"
          alt="Image 14"
          @click="openImage('im12')"
        />
        <img
          class="ani-1 im13"
          src="https://i.imgur.com/IySgA5E.jpg"
          alt="Image 15"
          @click="openImage('im13')"
        />
      </div>
      <div class="thumbnail thumbnails2">
        <img
          class="ani-1 im14"
          src="https://i.imgur.com/0NQ3qw1.jpg"
          alt="Image 16"
          @click="openImage('im14')"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: () => ({
    dform: {},
    dialog: false,
  }),
  methods: {
    openImage(image) {
      const largeThumbnail = document.getElementById('large-thumbnail');
      const newimg = document.querySelector(`.${image}`);
      console.log(newimg.src);
      largeThumbnail.innerHTML = '';
      largeThumbnail.innerHTML = `<img src="${newimg.src}"/>`;
    },
  },
  setup() {
    definePageMeta({
      layout: 'home',
    });
  },
};
</script>


<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&display=swap');

body {
  background-color: #000;
}

h1 {
  color: #fff;
  font-size: 24px;
  font-family: 'Inter', sans-serif;
}

.containern {
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* 3 kolommen met gelijke breedte */
  grid-gap: 0px; /* Ruimte tussen de kolommen */
  width: 1090px;
  border: 5px solid rgb(178, 190, 8);
  border-radius: 5px;
  padding-top: 5px;
  padding-bottom: 5px;
}
.containern > div {
  /* Stijl voor alle kolommen */
  border: 1px solid black;
  text-align: center;
}

#large-thumbnail{
  max-height: 500px;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

}
#large-thumbnail, img{
 
  

}

.large-thumbnail img{
  width: 100%;
  object-fit: cover;
  
}
.containern > div:nth-child(5) {
  /* Stijl voor de middelste kolom (rij 2, kolom 2) */
  width: 640px;
  max-height: 500px;
  overflow: hidden;
}

.thumbnail1,
.thumbnail2 {
  border: 1px solid black;
  padding: 10px;
  text-align: center;
}

.thumbnails1 {
  display: flex;
  justify-content: space-between;
}

.thumbnails1 img {
  /*thumbnail afmeting*/
  width: 207px;
  height: 137px;
  cursor: pointer;
  opacity: 0.5;
}

.ani-1 {
  animation: spin 0.4s linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.thumbnails1 img:hover {
  opacity: 1;
}

.thumbnails2 {
  /*thumbnail afmeting*/
  display: grid (3, 1fr);
  align-content: space-between;
}

.thumbnails2 img {
  /*thumbnail afmeting*/
  width: 200px;
  height: 137px;
  cursor: pointer;
  opacity: 0.5;
}

.thumbnails2 img:hover {
  opacity: 1;
}

.thumbnails4 {
  /*thumbnail afmeting*/
  display: grid;
  justify-content: center;
}

.thumbnails4 img {
  /*thumbnail afmeting*/
  width: 200px;
  height: 137px;
  cursor: pointer;
  opacity: 0.5;
}

.thumbnails4 img:hover {
  opacity: 1;
}

.large-thumbnail {
  width: 640px;
  max-height: 437px;
  overflow: hidden;
  display: flex;
}

.thumbnail img {
  max-width: 100%;
  max-height: 100%;
}

@media only screen and (max-width: 1200px) {
  .containern {
    width: 580px;
  }
  .containern > div:nth-child(5) {
    /* Stijl voor de middelste kolom (rij 2, kolom 2) */
    width: 270px;
  }
  .thumbnails1 img {
    width: 100px;
    height: 67px;
  }
  .thumbnails4 img {
    width: 100px;
    height: 67px;
  }
  .thumbnails2 img {
    width: 100px;
    height: 67px;
  }
}

@media only screen and (max-width: 700px) {
  .containern {
    width: 100%;
  }
}
</style>
