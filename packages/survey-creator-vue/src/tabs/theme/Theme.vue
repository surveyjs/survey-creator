<template>
  <div
    class="svc-creator-tab__content svc-test-tab__content"
    :class="{
      'svc-creator-tab__content--with-toolbar': model.isPageToolbarVisible,
    }"
  >
    <div class="svc-plugin-tab__content">
      <SvComponent :name="'survey-simulator'" :model="model.simulator"></SvComponent>
      <SvComponent :name="'survey-results'"
        v-if="model.showResults"
        :survey="model.survey"
      ></SvComponent>
    </div>
    <div
      v-if="model.isPageToolbarVisible"
      class="svc-plugin-tab__content-actions svc-test-tab__content-actions"
    >
      <SvComponent :name="'sv-action-bar'" :model="model.pages"></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
 import { SvComponent } from "survey-vue3-ui";
import type { ThemeTabViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: ThemeTabViewModel }>();
useBase(() => props.model);
</script>
