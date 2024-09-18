<template>
  <div class="svc-side-bar__container-header svc-sidebar__header-container">
    <div v-if="!model.subTitle" class="svc-side-bar__container-title">{{ model.title }}</div>
    <div v-if="!!model.subTitle" class="svc-sidebar__header-caption">
      <span class="svc-sidebar__header-title">{{ model.title }}</span>
      <span class="svc-sidebar__header-subtitle">{{ model.subTitle }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SidebarHeaderModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarHeaderModel }>();
useBase(() => props.model);
</script>

<ng-template #template>
</ng-template>
