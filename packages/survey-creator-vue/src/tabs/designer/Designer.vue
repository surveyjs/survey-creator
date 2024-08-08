<template>
  <div class="svc-flex-column">
    <SvComponent
      :name="'svc-adaptive-toolbox'"
      v-if="model.isToolboxVisible"
      :creator="model.creator"
    />
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
          <SvComponent
            :name="'survey-header'"
            :survey="model.creator.survey"
          ></SvComponent>
        </div>
        <div
          class="svc-designer__placeholder-container"
          :data-sv-drop-target-survey-element="'newGhostPage'"
        >
          <span class="svc-designer-placeholder-text svc-text svc-text--normal">
            {{ model.placeholderText }}
          </span>
          <div
            className="svc-designer-placeholder-page"
            data-sv-drop-target-survey-element="newGhostPage"
          >
            <SvComponent
              :name="'svc-page'"
              :survey="model.creator.survey"
              :creator="model.creator"
              :page="model.newPage"
            />
          </div>
        </div>
      </template>

      <template v-if="!model.showPlaceholder">
        <div
          :class="model.designerCss"
          :style="[
            { maxWidth: model.survey.renderedWidth },
            model.creator.designTabSurveyThemeVariables,
          ]"
        >
          <div
            v-if="model.creator.allowEditSurveyTitle"
            class="svc-designer-header"
          >
            <SvComponent
              :name="'survey-header'"
              :survey="model.creator.survey"
            />
          </div>
          <!--
          <SvComponent
            v-if="survey.isShowProgressBarOnTop"
            :name="model.creator.survey.getProgressTypeComponent()"
            :survey="model.creator.survey"
          ></SvComponent>
          -->
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
              <SvComponent
                :name="'svc-page'"
                :survey="model.creator.survey"
                :creator="model.creator"
                :page="page"
              />
            </div>
          </template>
          <div
            v-if="
              model.pagesController.page2Display &&
              model.creator.pageEditMode === 'bypage'
            "
            class="svc-page"
            :data-sv-drop-target-survey-element="model.displayPageDropTarget"
            :data-sv-drop-target-page="model.pagesController.page2Display.name"
          >
            <SvComponent
              :name="'svc-page'"
              :page="model.pagesController.page2Display"
              :creator="model.creator"
            />
          </div>
          <!--
          <SvComponent
            v-if="survey.isShowProgressBarOnBottom"
            :name="model.creator.survey.getProgressTypeComponent()"
            :survey="model.creator.survey"
          ></SvComponent>
          -->
        </div>
        <div
          v-if="model.creator.showPageNavigator"
          class="svc-tab-designer__page-navigator"
        >
          <SvComponent
            :name="'svc-page-navigator'"
            :pagesController="model.pagesController"
            :pageEditMode="model.creator.pageEditMode"
          />
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
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
