<template>
  <div
    class="svc-creator-tab__content svc-test-tab__content"
    :class="{
      'svc-creator-tab__content--with-toolbar': model.isPageToolbarVisible,
    }"
  >
    <SurfacePlaceholder v-if="model.survey.isEmpty" :name="'theme'" :placeholderTitleText="model.placeholderTitleText" :placeholderDescriptionText="model.placeholderDescriptionText" />
    <div v-if="!model.survey.isEmpty" class="svc-plugin-tab__content">
      <SvComponent
        :is="'survey-simulator'"
        :model="model.simulator"
      ></SvComponent>
      <SvComponent
        :is="'survey-results'"
        v-if="model.showResults"
        :survey="model.survey"
      ></SvComponent>
    </div>
    <div
      v-if="model.isPageToolbarVisible"
      class="svc-plugin-tab__content-actions svc-test-tab__content-actions"
    >
      <SvComponent :is="'sv-action-bar'" :model="model.pages"></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { ThemeTabViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import SurfacePlaceholder from "../../components/SurfacePlaceholder.vue";
const props = defineProps<{ model: ThemeTabViewModel }>();
useBase(() => props.model);
</script>
