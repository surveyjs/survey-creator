<template>
    <div :key="errorKey">
    <sv-svg-icon
        :class="cssClasses.error.icon"
        :iconName="'icon-alert_24x24'"
        :size="24"
    ></sv-svg-icon>
      <span
        :class="
          cssClasses
            ? cssClasses.error.item || undefined
            : 'panel-error-item'
        "
      >
        <survey-string :locString="error.locText" />
      </span>
    </div>
</template>

<script lang="ts" setup>
import { SurveyError } from "survey-core";
const props = defineProps<{
  errorKey: string;
  error: SurveyError;
  cssClasses: any;
  element: any;
}>();
</script>
