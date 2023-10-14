import '@/assets/js/three.min.js';
import '@/assets/js/panolens.min.js';
import '@/assets/js/main.js';

export default defineNuxtPlugin(async (nuxtApp) => {

const CreatePana = (img)=>{
    return new PANOLENS.ImagePanorama(img)
}

const CreateViewer = (panoimage)=>{
    return new PANOLENS.Viewer({
        container: panoimage,
        autoRotate: true,
        controlBar: false
    })

}

  nuxtApp.vueApp.provide('CreatePana', CreatePana);
  nuxtApp.provide('CreatePana', CreatePana);
  nuxtApp.vueApp.provide('CreateViewer', CreateViewer);
  nuxtApp.provide('CreateViewer', CreateViewer);
});
