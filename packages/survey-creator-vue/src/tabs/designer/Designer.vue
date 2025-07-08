<template>
  <div class="svc-flex-column">
    <SvComponent
      :is="'svc-toolbox'"
      v-if="model.isToolboxVisible"
      :model="model.creator"
    />
  </div>
  <div
    class="svc-tab-designer"
    :class="model.getRootCss()"
    @click="model.clickDesigner"
  >
    <SvComponent :is="'sv-scroll'">
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
              :is="'survey-header'"
              :survey="model.creator.survey"
            ></SvComponent>
          </div>
          <div
            class="svc-designer__placeholder-container"
            :data-sv-drop-target-survey-element="'newGhostPage'"
          >
            <SurfacePlaceholder
              :name="'designer'"
              :placeholderTitleText="model.placeholderTitleText"
              :placeholderDescriptionText="model.placeholderDescriptionText"
            />
            <div
              className="svc-designer-placeholder-page"
              data-sv-drop-target-survey-element="newGhostPage"
            >
              <SvComponent
                :is="'svc-page'"
                :survey="model.creator.survey"
                :creator="model.creator"
                :page="model.newPage"
                :isGhost="true"
              />
            </div>
          </div>
        </template>

        <template v-if="!model.showPlaceholder">
          <div
            :class="model.designerCss"
            :style="[
              { maxWidth: model.survey.renderedWidth },
              model.surfaceCssVariables,
            ]"
          >
            <div
              v-if="model.creator.allowEditSurveyTitle"
              class="svc-designer-header"
            >
              <SvComponent :is="'survey-header'" :survey="model.creator.survey" />
            </div>
            <template v-if="model.creator.pageEditMode !== 'bypage'">
              <div
                v-for="page in model.pages"
                :key="page.id"
                class="svc-page"
                :data-sv-drop-target-survey-element="
                  page != model.newPage ? page.name : 'newGhostPage'
                "
                :data-sv-drop-target-page="page.name"
              >
                <SvComponent
                  :is="'svc-page'"
                  :survey="model.creator.survey"
                  :creator="model.creator"
                  :page="page"
                  :isGhost="page == model.newPage"
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
                :is="'svc-page'"
                :page="model.pagesController.page2Display"
                :creator="model.creator"
                :isGhost="model.pagesController.page2Display == model.newPage"
              />
            </div>
          </div>
          <div v-if="model.showSurfaceTools" class="svc-tab-designer__tools">
            <div
              v-if="model.creator.showPageNavigator"
              class="svc-tab-designer__page-navigator"
            >
              <SvComponent
                :is="'svc-page-navigator'"
                :pagesController="model.pagesController"
                :pageEditMode="model.creator.pageEditMode"
              />
              </div>
              <div v-if="model.showSurfaceToolbar" class="svc-tab-designer__toolbar">
                <SvComponent :is="'sv-action-bar'" :model="model.surfaceToolbar" />
              </div>
            </div>
        </template>
      </div>
    </SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { TabDesignerViewModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
import SurfacePlaceholder from "../../components/SurfacePlaceholder.vue";
const props = defineProps<{ model: TabDesignerViewModel }>();
const survey = computed(() => props.model.survey);
useBase(() => props.model);
useBase(() => survey.value);
</script>