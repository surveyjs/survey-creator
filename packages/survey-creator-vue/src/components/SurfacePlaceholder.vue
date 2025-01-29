<template>
  <div class="svc-surface-placeholder">
    <div class="svc-surface-placeholder__image" :class="'svc-surface-placeholder__image--' + name"></div>
    <div class="svc-surface-placeholder__text">
      <div class="svc-surface-placeholder__title">{{placeholderTitleText}}</div>
      <div class="svc-surface-placeholder__description">{{placeholderDescriptionText}}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  name: string;
  placeholderTitleText: string;
  placeholderDescriptionText: string;
}>();
</script>
