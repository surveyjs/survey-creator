<template>
  <div class="svc-flex-column">
    <svc-adaptive-toolbox
      v-if="model.isToolboxVisible"
      :creator="model.creator"
    ></svc-adaptive-toolbox>
  </div>
  <div
    class="svc-tab-designer"
    :class="model.getRootCss()"
    @click="model.clickDesigner"
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
        </div>
        <div
          class="svc-designer__placeholder-container"
          :data-sv-drop-target-survey-element="'newGhostPage'"
        >
          <span class="svc-designer-placeholder-text svc-text svc-text--normal">
            {{ model.placeholderText }}
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
          :style="{ maxWidth: model.survey.renderedWidth }"
        >
          <div
            v-if="model.creator.allowEditSurveyTitle"
            class="svc-designer-header"
          >
            <survey-header :survey="model.creator.survey"></survey-header>
          </div>

          <!-- ko if: survey.isShowProgressBarOnTop -->
          <!-- ko component: { name: survey.getProgressTypeComponent(), params: { model: survey } } -->
          <!-- /ko -->
          <!-- /ko -->

          <template v-if="model.creator.pageEditMode !== 'bypage'">
            <div
              v-for="page in pages"
              :key="page.id"
              class="svc-page"
              :data-sv-drop-target-survey-element="
                page != model.newPage ? page.name : 'newGhostPage'
              "
              :data-sv-drop-target-page="page.name"
            >
              <svc-page
                :survey="model.creator.survey"
                :creator="model.creator"
                :page="page"
              ></svc-page>
            </div>
          </template>
          <div
            v-if="
              model.pagesController.page2Display &&
              model.creator.pageEditMode === 'bypage'
            "
            class="svc-page"
            :data-sv-drop-target-survey-element="'newGhostPage'"
            :data-sv-drop-target-page="model.pagesController.page2Display.name"
          >
            <svc-page
              :page="model.pagesController.page2Display"
              :creator="model.creator"
            ></svc-page>
          </div>
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
            :pagesController="model.pagesController"
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
import { computed } from "vue";
const props = defineProps<{ model: TabDesignerViewModel }>();
useBase(() => props.model);
const pages = computed(() => {
  const model = props.model;
  return model.creator.survey.pages.concat(
    model.showNewPage ? [model.newPage] : []
  );
});
</script>
