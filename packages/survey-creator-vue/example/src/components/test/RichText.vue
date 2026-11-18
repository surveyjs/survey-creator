<template>
  <Common :options="{ expandCollapseButtonVisibility: 'never', showLogicTab: true, showTranslationTab: true }" :use-slk="true"></Common>
</template>
<script lang="ts" setup>
import { onMounted } from "vue";
import { Serializer } from "survey-core";
import { RichText } from "survey-core/rich-text";
import "survey-core/rich-text.css";
import Common from "./Common.vue";

const richStringAreas = ["designer-tab", "preview-tab", "theme-tab", "translation-tab:source-survey", "translation-tab:target-survey", "matrix-cell-question-popup-editor"];

onMounted(() => {
  const creator = (window as any).creator;
  Serializer.findProperty("survey", "description").type = "html";
  Serializer.findProperty("page", "description").type = "html";
  Serializer.findProperty("question", "title").type = "inlinehtml";
  Serializer.findProperty("itemvalue", "text").type = "inlinehtml";
  creator.registerRichTextEditor(RichText);
  creator.onSurveyInstanceCreated.add((_: any, options: any) => {
    if (richStringAreas.indexOf(options.area) > -1) {
      options.survey.onTextMarkdown.add(RichText.renderStringHandler);
    }
  });
});
</script>
