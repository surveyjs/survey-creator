<template>
  <div class="svc-flex-column">
    <svc-adaptive-toolbox v-if="model.isToolboxVisible" :creator="model.creator"></svc-adaptive-toolbox>
  </div>
  <div class="svc-tab-designer" :class="model.getRootCss()" @click="model.clickDesigner">
    <div class="svc-tab-designer_content">
      <template v-if="model.showPlaceholder">
        <div v-if="model.creator.showHeaderInEmptySurvey &&
      model.creator.allowEditSurveyTitle
      " class="svc-designer-header">
          <survey-header :survey="model.creator.survey"></survey-header>
        </div>
        <div class="svc-designer__placeholder-container" :data-sv-drop-target-survey-element="'newGhostPage'">
          <span class="svc-designer-placeholder-text svc-text svc-text--normal">
            {{ model.placeholderText }}
          </span>
          <div className="svc-designer-placeholder-page" data-sv-drop-target-survey-element="newGhostPage">
            <svc-page :survey="model.creator.survey" :creator="model.creator" :page="model.newPage">
            </svc-page>
          </div>
        </div>
      </template>

      <template v-if="!model.showPlaceholder">
        <div :class="model.designerCss"
          :style="[{ maxWidth: model.survey.renderedWidth }, model.creator.designTabSurveyThemeVariables]">
          <div v-if="model.creator.allowEditSurveyTitle" class="svc-designer-header">
            <survey-header :survey="model.creator.survey"></survey-header>
          </div>
          <!--
          <component
            v-if="survey.isShowProgressBarOnTop"
            :is="model.creator.survey.getProgressTypeComponent()"
            :survey="model.creator.survey"
          ></component>
          -->
          <template v-if="model.creator.pageEditMode !== 'bypage'">
            <div v-for="page in pages" :key="page.id" class="svc-page" :data-sv-drop-target-survey-element="page != model.newPage ? page.name : 'newGhostPage'
      " :data-sv-drop-target-page="page.name">
              <svc-page :survey="model.creator.survey" :creator="model.creator" :page="page"></svc-page>
            </div>
          </template>
          <div v-if="model.pagesController.page2Display &&
      model.creator.pageEditMode === 'bypage'
      " class="svc-page" :data-sv-drop-target-survey-element="model.displayPageDropTarget"
            :data-sv-drop-target-page="model.pagesController.page2Display.name">
            <svc-page :page="model.pagesController.page2Display" :creator="model.creator"></svc-page>
          </div>
          <!--
          <component
            v-if="survey.isShowProgressBarOnBottom"
            :is="model.creator.survey.getProgressTypeComponent()"
            :survey="model.creator.survey"
          ></component>
          -->
        </div>
        <div v-if="model.creator.showPageNavigator" class="svc-tab-designer__page-navigator">
          <svc-page-navigator :pagesController="model.pagesController" :pageEditMode="model.creator.pageEditMode">
          </svc-page-navigator>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { TabDesignerViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
const props = defineProps<{ model: TabDesignerViewModel }>();
const survey = computed(() => props.model.survey);
useBase(() => props.model);
useBase(() => survey.value);
const pages = computed(() => {
  const model = props.model;
  return survey.value.pages.concat(model.showNewPage ? [model.newPage] : []);
});
</script>
