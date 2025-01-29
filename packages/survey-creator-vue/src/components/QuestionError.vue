<template>
  <div :key="errorKey">
    <SvComponent
      :is="'sv-svg-icon'"
      :class="cssClasses.error.icon"
      :iconName="'icon-alert_24x24'"
      :size="'auto'"
    ></SvComponent>
    <span
      :class="
        cssClasses ? cssClasses.error.item || undefined : 'panel-error-item'
      "
    >
      <SvComponent :is="'survey-string'" :locString="error.locText" />
    </span>
  </div>
</template>

<script lang="ts" setup>
import { SurveyError } from "survey-core";
import { SvComponent } from "survey-vue3-ui";
defineProps<{
  errorKey: string;
  error: SurveyError;
  cssClasses: any;
  element: any;
}>();
</script>
