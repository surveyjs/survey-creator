<template>
  <div class="svc-creator-tab__content svc-translation-tab" :class="model.isEmpty ? 'svc-translation-tab--empty' : ''">
    <SurfacePlaceholder v-if="model.isEmpty" :name="'translation'" :placeholderTitleText="model.placeholderTitleText" :placeholderDescriptionText="model.placeholderDescriptionText" />
    <div v-if="!model.isEmpty && stringsModel" class="st-content">
      <div class="svc-flex-column st-strings-wrapper">
        <div class="svc-flex-row st-strings-header">
          <SurveyComponent :key="stringsModel.stringsHeaderSurvey?.elementIdPrefix" :model="stringsModel.stringsHeaderSurvey"></SurveyComponent>
        </div>
        <div class="svc-flex-row svc-plugin-tab__content st-strings">
          <SurveyComponent :key="stringsModel.stringsSurvey?.elementIdPrefix" :model="stringsModel.stringsSurvey"></SurveyComponent>
        </div>
      </div>
    </div>
    <div v-if="!model.isEmpty && sideBySideModel" :class="sideBySideModel.sideBySideRootCss">
      <div class="st-side-by-side__source" :key="sideBySideModel.sourceSurvey?.elementIdPrefix" :ref="setSourceScrollElement">
        <SurveyComponent :model="sideBySideModel.sourceSurvey"></SurveyComponent>
      </div>
      <div v-if="sideBySideModel.targetSurvey" class="st-side-by-side__target" :key="sideBySideModel.targetSurvey?.elementIdPrefix" :ref="setTargetScrollElement">
        <SurveyComponent :model="sideBySideModel.targetSurvey"></SurveyComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TranslationBase, TranslationSideBySide } from "survey-creator-core";
import { computed } from "vue";
import { useBase, SurveyComponent } from "survey-vue3-ui";
import SurfacePlaceholder from "../../components/SurfacePlaceholder.vue";
const props = defineProps<{ model: TranslationBase }>();
useBase(() => props.model);
const sideBySideModel = computed<TranslationSideBySide | undefined>(() =>
  props.model.isSideBySideForm ? (props.model as TranslationSideBySide) : undefined
);
// The strings-grid model: the tab model itself in the default mode and in the side-by-side grid view.
const stringsModel = computed<TranslationBase | undefined>(() =>
  sideBySideModel.value ? undefined : props.model
);
const setSourceScrollElement = (el: unknown) => {
  sideBySideModel.value?.setSourceScrollElement(el as HTMLElement);
};
const setTargetScrollElement = (el: unknown) => {
  sideBySideModel.value?.setTargetScrollElement(el as HTMLElement);
};
</script>
