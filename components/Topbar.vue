<template>
  <div class="fixed top-0 left-0 right-0">
    <div class="w-full">
      <div v-if="isBackBtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  isBackBtn: {
    type: Boolean,
    default: false,
  },
});
</script>
