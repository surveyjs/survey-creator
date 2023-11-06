<template>
  <svc-adaptive-toolbox
    v-if="model.isToolboxVisible"
    :creator="model.creator"
  ></svc-adaptive-toolbox>
  <div
    class="svc-tab-designer"
    :class="model.getRootCss()"
    data-bind="css: getRootCss(), click: clickDesigner"
  >
    <div class="svc-tab-designer_content">
      <template v-if="model.showPlaceholder">
        <div
          v-if="
            model.creator.showHeaderInEmptySurvey &&
            model.creator.allowEditSurveyTitle
          "
          class="svc-designer-header"
        >
          <survey-header :survey="model.creator.survey"></survey-header>
          <!-- ko template: { name: 'survey-header', data: survey } -->
          <!-- /ko -->
        </div>
        <div
          class="svc-designer__placeholder-container"
          data-bind="attr: { 'data-sv-drop-target-survey-element': 'newGhostPage' }"
        >
          <span
            class="svc-designer-placeholder-text svc-text svc-text--normal"
            data-bind="text: placeholderText"
          >
          </span>
          <svc-page
            class="svc-designer-placeholder-page"
            :survey="model.creator.survey"
            :creator="model.creator"
            :page="model.newPage"
          >
          </svc-page>
        </div>
      </template>

      <template v-if="!model.showPlaceholder">
        <div
          :class="model.designerCss"
          data-bind="css: designerCss, style:{maxWidth: survey.renderedWidth}"
        >
          <div
            v-if="model.creator.allowEditSurveyTitle"
            class="svc-designer-header"
          >
            <survey-header :survey="model.creator.survey"></survey-header>
            <!-- ko template: { name: 'survey-header', data: survey } -->
            <!-- /ko -->
          </div>

          <!-- ko if: survey.isShowProgressBarOnTop -->
          <!-- ko component: { name: survey.getProgressTypeComponent(), params: { model: survey } } -->
          <!-- /ko -->
          <!-- /ko -->

          <template v-if="model.creator.pageEditMode !== 'bypage'">
            <svc-page
              v-for="(page, index) in model.creator.survey.pages"
              :key="index"
              class="svc-page"
              data-bind="attr: { 'data-sv-drop-target-survey-element': $data.name, 'data-sv-drop-target-page': $data.name }"
              :survey="model.creator.survey"
              :creator="model.creator"
              :page="page"
            ></svc-page>
            <svc-page
              v-if="model.showNewPage"
              class="svc-page"
              data-bind="attr: { 'data-sv-drop-target-survey-element': 'newGhostPage' }"
              :survey="model.creator.survey"
              :creator="model.creator"
              :page="model.newPage"
            ></svc-page>
          </template>

          <svc-page
            v-if="
              model.pagesController.page2Display &&
              model.creator.pageEditMode === 'bypage'
            "
            class="svc-page"
            data-bind="attr: { 'data-sv-drop-target-survey-element': 'newGhostPage', 'data-sv-drop-target-page': pagesController.page2Display.name }"
            params="survey: survey, page: pagesController.page2Display, creator: creator"
          ></svc-page>

          <!-- ko if: survey.isShowProgressBarOnBottom -->
          <!-- ko component: { name: survey.getProgressTypeComponent(), params: { model: survey } } -->
          <!-- /ko -->
          <!-- /ko -->
        </div>
        <div
          v-if="model.creator.showPageNavigator"
          class="svc-tab-designer__page-navigator"
        >
          <svc-page-navigator
            :controller="model.pagesController"
            :pageEditMode="model.creator.pageEditMode"
          >
          </svc-page-navigator>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { TabDesignerViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: TabDesignerViewModel }>();
useBase(() => props.model);
</script>
