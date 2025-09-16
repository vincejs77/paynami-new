<template>
  <input type="file" @change="onChangeFile()" name="file" accept="image/*" />
</template>

<script setup>
const emit = defineEmits(["update:modelValue"]);
const onChangeFile = (event) => {
  emit("update:modelValue", event.target.files[0]);
};
</script>
