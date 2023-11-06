<script setup lang="ts">
import Example from "./components/Example.vue";
const isTest = !!(window as any)["%hammerhead%"];
</script>
<template>
  <Example v-if="!isTest"></Example>
</template>