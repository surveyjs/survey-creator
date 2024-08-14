<template>
  <div class="svc-creator-tab__content">
    <div
      class="svc-plugin-tab__content svc-logic-tab__content"
      :class="{ 'svc-logic-tab__empty': !model.hasItems }"
    >
      <SurveyComponent :model="model.itemsSurvey"></SurveyComponent>
      <div v-if="!model.hasItems" class="svc-logic-tab__content-empty">
        <span class="svc-text">{{ model.emptyTabPlaceholder }}</span>
      </div>
      <LogicAddButton
        v-if="!model.readOnly"
        :model="model.addNewButton"
      ></LogicAddButton>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { SurveyLogicUI } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import LogicAddButton from "./LogicAddButton.vue";

const props = defineProps<{
  model: SurveyLogicUI;
}>();
useBase(() => props.model);
</script>
