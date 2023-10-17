<template>
  <div class="svc-creator-tab__content svc-translation-tab">
    <div class="st-content">
      <div v-if="model.isEmpty" class="st-no-strings">
        <span>{{ model.noStringsText }}</span>
      </div>
      <div v-if="!model.isEmpty" class="svc-flex-column st-strings-wrapper">
        <div class="svc-flex-row st-strings-header">
          <SurveyComponent :model="model.stringsHeaderSurvey"></SurveyComponent>
        </div>
        <div class="svc-flex-row svc-plugin-tab__content st-strings">
          <SurveyComponent :model="model.stringsSurvey"></SurveyComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Translation } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";

const props = defineProps<{ model: Translation }>();
useBase(() => props.model);
</script>
