
let store;
export const AuthHandler = async (id, router) => {
  let nuxt = useNuxtApp();
  store = useLoungeStore();
  let crud = nuxt.$crud;
  try {
    store.SetActiveUser(id, true);
    const res = await crud.getSingleDoc('USERS', id);
    RouteUser(res.data().account, router);
    store.SetUserData(res.data());
    return { success: true };
  } catch (err) {
    console.log(err);
  }
};

export const AuthHandlerMini = async (id) => {
  let nuxt = useNuxtApp();
  store = useLoungeStore();
  let crud = nuxt.$crud;
  try {
    store.SetActiveUser(id, true);
    const res = await crud.getSingleDoc('USERS', id);
    store.SetUserData(res.data());
    return { success: true };
  } catch (err) {
    console.log(err);
  }
};

function RouteUser(usertype, router) {
  switch (usertype) {
    case 'client':
      router.push({ path: '/client' });
      break;

    case 'advertiser':
      router.push({ path: '/advertiser' });
      break;

    case 'agency':
      router.push({ path: '/agency' });
      break;
    case 'admin':
      router.push({ path: '/admin' });
      break;
    default:
      ShowSnack('Cannot Route User. Registration Type Missing', 'negative');
        router.push({ path: '/' });
      break;
  }
}
