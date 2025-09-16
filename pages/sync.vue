<template>
  <div></div>
</template>

<script setup>
import { useGlobalStore } from "~~/store/global";
onBeforeMount(() => {
  useGlobalStore().$state.menuTitle = "Sychronisation";
  useGlobalStore().$state.isBackBtn = true;
  useGlobalStore().$state.isMenuVisible = true;
});
</script>
