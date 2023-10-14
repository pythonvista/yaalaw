import VueGeolocation from 'vue-browser-geolocation';
export default defineNuxtPlugin(async (nuxtApp) => { 
    nuxtApp.vueApp.provide('VueGeolocation', VueGeolocation);
    nuxtApp.provide('VueGeolocation', VueGeolocation);
})