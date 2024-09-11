<template>
  <div class="svc-side-bar__container-header svc-sidebar__header-container">
    <div class="svc-side-bar__container-title">{{model.caption}}</div>
  </div>
</template>

<script lang="ts" setup>
import { SidebarPageModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarPageModel }>();
useBase(() => props.model);
</script>

<ng-template #template>
</ng-template>