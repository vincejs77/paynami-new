<template>
  <div
    class="bg-gray-900 p-container relative py-[100px] h-screen flex justify-center items-center"
  >
    <div class="relative flex justify-center items-center">
      <StreamBarcodeReader class="fixed" @decode="onDecode"></StreamBarcodeReader>
      <div class="b-t"></div>
      <div class="b-l"></div>
      <div class="b-b"></div>
      <div class="b-r"></div>
    </div>
  </div>
</template>

<script setup>
import { useGlobalStore } from "~/store/global";
import { StreamBarcodeReader } from "vue-barcode-reader";
const router = useRouter();

function onDecode(result) {
  router.push("/motards/" + result);
}

onBeforeMount(() => {
  useGlobalStore().$state.isPending = true;
  useGlobalStore().$state.menuTitle = "Lecture QR-Code";
  useGlobalStore().$state.isBackBtn = true;
  useGlobalStore().$state.isMenuVisible = true;
});

onBeforeUnmount(() => {
  useGlobalStore().$state.isPending = false;
});
</script>

<style>
.scanner-container {
  @apply relative border-4 border-white rounded-xl;
}

.scanner-container video {
  @apply rounded-xl overflow-hidden;
}

.laser {
  background-color: white !important;
  box-shadow: 0 0 4px white !important;
  height: 2px !important;
}

.overlay-element {
  @apply rounded-xl;
  background-color: rgba(17, 24, 39, 0.609) !important;
  top: 0 !important;
  right: 0 !important;
  left: 0 !important;
  height: 100% !important;
}

.b-t {
  @apply absolute h-2 z-50 w-auto left-8 right-8 -top-1 bg-gray-900;
}

.b-b {
  @apply absolute h-2 z-50 w-auto left-8 right-8 -bottom-1 bg-gray-900;
}

.b-l {
  @apply absolute h-auto z-50 w-2 top-8 bottom-8 -left-1 bg-gray-900;
}

.b-r {
  @apply absolute h-auto z-50 w-2 top-8 bottom-8 -right-1 bg-gray-900;
}
</style>
