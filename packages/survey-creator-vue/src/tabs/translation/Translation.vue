<template>
  <div class="svc-creator-tab__content svc-translation-tab" :class="model.isEmpty ? 'svc-translation-tab--empty' : ''">
    <SurfacePlaceholder v-if="model.isEmpty" :name="'translation'" :placeholderTitleText="model.placeholderTitleText" :placeholderDescriptionText="model.placeholderDescriptionText" />
    <div v-if="!model.isEmpty" class="st-content">
      <div class="svc-flex-column st-strings-wrapper">
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
import { useBase, SurveyComponent } from "survey-vue3-ui";
import SurfacePlaceholder from "../../components/SurfacePlaceholder.vue";
const props = defineProps<{ model: Translation }>();
useBase(() => props.model);
</script>
