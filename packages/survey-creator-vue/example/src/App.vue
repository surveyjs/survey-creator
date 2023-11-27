<script setup lang="ts">
import Example from "./components/Example.vue";
import RouterPage from "./components/test/RoutePage.vue";
const isTest = !!(window as any)["%hammerhead%"];
</script>
<template>
  <Example v-if="!isTest"></Example>
  <RouterPage v-if="isTest"></RouterPage>
</template>