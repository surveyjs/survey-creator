<template>
  <div class="svc-side-bar__container-header">
    <div class="svc-side-bar__container-actions">
      <SvComponent :is="'sv-action-bar'" :model="model.toolbar"></SvComponent>
    </div>
    <div v-if="!!model.title" class="svc-side-bar__container-title">
      {{ model.title }}
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { SidebarHeaderModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: SidebarHeaderModel }>();
useBase(() => props.model);
</script>
