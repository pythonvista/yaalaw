<template>
  <div>
    <Header :uid="uid" :phone="phone"></Header>
    <div class="wrap min-h-screen">
      <slot />
    </div>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import { onAuthStateChanged } from 'firebase/auth';
import Header from '~/components/utils/Header.vue';
let store;
let crud;
export default {
  components: {
    Header,
  },
  data: () => ({
    uid: '',
    phone: '',
  }),
  computed: {},
  created() {
    let nuxt = useNuxtApp();
    store = useLoungeStore();
    let auth = nuxt.$authfunc;
    crud = nuxt.$crud;
    onAuthStateChanged(auth.UserState(), async (user) => {
      if (user) {
        const uid = user.uid;
        this.uid = uid;
          this.phone = user.phoneNumber;
        if (this.phone != '+2349055231353') {
          ShowSnack('Access Denied Not Admin');
          this.$router.push({ path: '/' });
        }
          const doc = await crud.getSingleDoc('AIXUSER', user.phoneNumber);
        console.log(doc)
        store.SetActiveUser(uid, true);
        store.SetPhone(user.phoneNumber);
        store.SetUserData(doc.data() ? doc.data() : {});
      } else {
        ShowSnack('Not Authenticated');
        this.$router.push({ path: '/' });
      }
    });
  },
};
</script>

<style></style>
