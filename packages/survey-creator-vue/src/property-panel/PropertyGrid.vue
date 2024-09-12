<template>
  <div
    class="spg-container"
    :class="{ 'spg-container_search': model.searchEnabled }"
  >
    <SvComponent :is="'svc-search'" :model="model.searchManager"></SvComponent>
    <SurveyComponent
      v-if="!!model.survey"
      :survey="model.survey"
    ></SurveyComponent>
  </div>
</template>
<script lang="ts" setup>
import { SurveyComponent, SvComponent } from "survey-vue3-ui";
import type { PropertyGridViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: PropertyGridViewModel }>();
useBase(() => props.model);
</script>
