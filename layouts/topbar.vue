<template>
  <div class="top-bar fixed top-0 left-0 right-0 py-4 border-b border-b-gray-200">
    <div class="relative w-full flex justify-center items-center">
      <div
        v-if="useGlobalStore().$state.isBackBtn"
        class="absolute left-4 cursor-pointer"
        @click="router.back()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="3"
          stroke="currentColor"
          class="w-6 h-5 text-gray-500"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
      <div class="text-xl">
        <span class="font-bold">
          {{ useGlobalStore().$state.menuTitle }}
        </span>
      </div>
      <div v-if="useGlobalStore().$state.isPending" class="absolute right-4">
        <svg
          class="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            class="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            stroke-width="4"
          ></circle>
          <path
            class="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useGlobalStore } from "~~/store/global";
const router = useRouter();
</script>
