<template>
  <div
    class="svc-creator-tab__content svc-test-tab__content"
    :class="{
      'svc-creator-tab__content--with-toolbar': model.isPageToolbarVisible,
    }"
  >
    <div class="svc-plugin-tab__content">
      <survey-simulator :model="model.simulator"></survey-simulator>
      <survey-results
        v-if="model.showResults"
        :survey="model.survey"
      ></survey-results>
    </div>
    <div
      v-if="model.isPageToolbarVisible"
      class="svc-plugin-tab__content-actions svc-test-tab__content-actions"
    >
      <sv-action-bar :model="model.pages"></sv-action-bar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { ThemeTabViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: ThemeTabViewModel }>();
useBase(() => props.model);
</script>
