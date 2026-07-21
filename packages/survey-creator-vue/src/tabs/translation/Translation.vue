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
    <div v-if="!model.isEmpty && sideBySideModel && !sideBySideModel.showSurveyStrings" class="st-side-by-side">
      <div class="st-side-by-side__source" :key="sideBySideModel.sourceSurvey?.elementIdPrefix">
        <SurveyComponent :model="sideBySideModel.sourceSurvey"></SurveyComponent>
      </div>
      <div class="st-side-by-side__target" :key="sideBySideModel.destinationSurvey?.elementIdPrefix">
        <SurveyComponent :model="sideBySideModel.destinationSurvey"></SurveyComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Translation, TranslationSideBySide } from "survey-creator-core";
import { computed } from "vue";
import { useBase, SurveyComponent } from "survey-vue3-ui";
import SurfacePlaceholder from "../../components/SurfacePlaceholder.vue";
const props = defineProps<{ model: Translation }>();
useBase(() => props.model);
const sideBySideModel = computed<TranslationSideBySide | undefined>(() =>
  props.model.isSideBySide ? (props.model as TranslationSideBySide) : undefined
);
// The strings-grid model: the tab model itself in the default mode, the scoped survey-level
// strings model when the side-by-side mode shows the synthetic "Survey Strings" entry.
const stringsModel = computed<Translation | undefined>(() => {
  if (!props.model.isSideBySide) return props.model;
  const model = props.model as TranslationSideBySide;
  return model.showSurveyStrings ? model.surveyStringsTranslation : undefined;
});
</script>
