<template>
  <div
    class="z-[999] translate-y-8 main-layout fixed bottom-0 left-0 right-0 px-5 border-t border-t-gray-200"
  >
    <div class="min-w-full flex justify-between">
      <div class="w-1/3 flex justify-center">
        <NuxtLink class="py-4 w-1/3" to="/motards">
          <img src="/img/moto.png" class="w-6 opacity-40" alt="" />
        </NuxtLink>
      </div>
      <div class="w-1/3 -translate-y-8 flex justify-center items-center">
        <NuxtLink class="py-4" to="/#_">
          <img src="/img/add.png" class="w-14 opacity-90" alt="" />
        </NuxtLink>
      </div>
      <div class="w-1/3 flex justify-center">
        <NuxtLink class="py-4" to="/settings">
          <img src="/img/settings.png" class="w-6 opacity-40" alt="" />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
<script setup></script>

<style lang="scss" scoped>
.router-link-active.router-link-exact-active {
  img {
    opacity: 1 !important;
  }
}
</style>
