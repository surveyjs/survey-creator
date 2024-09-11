<template>
  <div class="svc-property-grid-placeholder">
    <div class="svc-property-grid-placeholder__header">
      <span class="svc-property-grid-placeholder__title">{{
        editorLocalization.getString("ed.propertyGridPlaceholderTitle")
      }}</span>
      <span class="svc-property-grid-placeholder__description">{{
        editorLocalization.getString("ed.propertyGridPlaceholderDescription")
      }}</span>
    </div>
    <div class="svc-property-grid-placeholder__content">
      <div class="svc-property-grid-placeholder__gap"></div>
      <div class="svc-property-grid-placeholder__image"></div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { editorLocalization as al } from "survey-creator-core";
const editorLocalization = al;
</script>
