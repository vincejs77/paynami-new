<template>
  <div id="app" class="relative">
    <div class="bg-gray-200 top-0 h-1.5 z-[99999] fixed left-0 right-0">
      <NuxtLoadingIndicator color="false" :height="h" />
    </div>
    <NuxtLayout :name="topbar"> </NuxtLayout>

    <div v-if="useGlobalStore().$state.isMenuVisible">
      <NuxtLayout :name="main"> </NuxtLayout>
    </div>

    <main class="pt-0 pb-[0px]">
      <!-- <StatesEnMaintenance /> -->
      <NuxtPage />
    </main>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";
const nuxtApp = useNuxtApp();

nuxtApp.hook("page:start", () => {
  useGlobalStore().$state.isLoading = true;
  // console.log(useGlobalStore().$state.isLoading);
});

let logCookie = useCookie("log-store");

if (logCookie.value == undefined) {
  logCookie.value = 0;
}

const h = 4;
const topbar = "topbar";
const main = "main";

const router = useRouter();
/*

if (logCookie.value == 0) {
  router.push("/login");
} else if (logCookie.value == 1) {
  router.push("/motards");
} else {
  router.push("/");
}
*/
onBeforeUpdate(() => {
  console.log(useGlobalStore().$state.isAuth);
});

nuxtApp.hook("page:finish", () => {
  useGlobalStore().$state.isLoading = false;
  // console.log(useGlobalStore().$state.isLoading);
  // if (logCookie.value == 0) {
  //   router.push("/login");
  // }
});
</script>

<style scoped>
.nuxt-loading-indicator {
  @apply bg-gray-800;
}
</style>
