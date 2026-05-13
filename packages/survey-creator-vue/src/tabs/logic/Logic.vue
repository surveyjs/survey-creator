<template>
  <div class="svc-creator-tab__content svc-logic-tab">
    <div
      class="svc-plugin-tab__content svc-logic-tab svc-logic-tab__content"
      :class="{ 'svc-logic-tab--empty': !model.hasItems }"
    >
      <template v-if="model.hasItems">
        <SurveyComponent :model="model.itemsSurvey"></SurveyComponent>
        <SvComponent v-if="!model.readOnly" :is="'sv-action-bar'" :model="model.contentActionsContainer"></SvComponent>
      </template>
      <div v-if="!model.hasItems" class="svc-logic-tab__content-empty">
        <SurfacePlaceholder :name="'logic'" :placeholderTitleText="model.placeholderTitleText" :placeholderDescriptionText="model.placeholderDescriptionText" />
        <SvComponent v-if="!model.readOnly" :is="'sv-action-bar'" :model="model.contentActionsContainer"></SvComponent>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { SurveyLogicUI } from "survey-creator-core";
import { useBase, SurveyComponent, SvComponent } from "survey-vue3-ui";
import SurfacePlaceholder from "../../components/SurfacePlaceholder.vue";

const props = defineProps<{
  model: SurveyLogicUI;
}>();
useBase(() => props.model);
</script>
