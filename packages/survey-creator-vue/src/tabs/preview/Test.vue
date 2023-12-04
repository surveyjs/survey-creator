<template>
  <div
    class="svc-creator-tab__content svc-test-tab__content"
    :class="{
      'svc-creator-tab__content--with-toolbar': model.isPageToolbarVisible,
    }"
  >
    <div class="svc-plugin-tab__content" @scroll="model.onScroll()">
      <survey-simulator :model="model.simulator"></survey-simulator>
      <template v-if="model.showResults">
        <survey-results :survey="model.survey"></survey-results>
      </template>
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
import type { TestSurveyTabViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: TestSurveyTabViewModel }>();
useBase(() => props.model);
</script>
