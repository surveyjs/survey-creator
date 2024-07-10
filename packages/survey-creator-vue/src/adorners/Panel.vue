<template>
  <div
    v-if="adorner"
    class="svc-question__adorner"
    :class="adorner.rootCss()"
    @dblclick="(e) => adorner.dblclick(e)"
    @mouseover="adorner.hover($event, $event.currentTarget)"
    @mouseleave="adorner.hover($event, $event.currentTarget)"
    :data-sv-drop-target-survey-element="adorner.element.name || null"
    ref="root"
  >
    <div
      :class="adorner.css()"
      v-key2click="{ disableTabStop: true }"
      @click="
        adorner.element.isInteractiveDesignElement
          ? adorner.select(adorner, $event)
          : null
      "
    >
      <div
        v-if="
          adorner.allowDragging && adorner.element.isInteractiveDesignElement
        "
        class="svc-question__drag-area"
        @pointerdown="adorner.onPointerDown($event)"
      >
        <sv-svg-icon
          class="svc-question__drag-element"
          :iconName="'icon-drag-area-indicator_24x16'"
          :size="24"
        ></sv-svg-icon>
        <div class="svc-question__top-actions">
          <sv-action-bar
            :model="adorner.topActionContainer"
            :handleClick="false"
          ></sv-action-bar>
        </div>
      </div>
      <component :is="componentName" v-bind="componentData"></component>
      <div v-if="adorner.isEmptyElement" class="svc-panel__placeholder_frame-wrapper">
        <div class="svc-panel__placeholder_frame">
          <div class="svc-panel__placeholder">{{ adorner.placeholderText }}</div>
          <div
            v-if="adorner.showAddQuestionButton"
            class="svc-panel__add-new-question svc-action-button"
            v-key2click
            @click="addNewQuestion"
          >
            <sv-svg-icon
              class="svc-panel__add-new-question-icon"
              :iconName="'icon-add_24x24'"
              :size="24"
            ></sv-svg-icon>
            <span class="svc-text svc-text--normal svc-text--bold">
              {{ adorner.addNewQuestionText }}
            </span>
          </div>
        </div>
      </div>
      <div
        v-if="!adorner.isEmptyElement && adorner.showAddQuestionButton"
        class="svc-panel__add-new-question-container"
      >
        <div class="svc-panel__question-type-selector-popup"><sv-popup
              :model="adorner.questionTypeSelectorModel.popupModel"
            ></sv-popup>
        </div>
        <div class="svc-panel__add-new-question-wrapper">
          <div
            class="svc-panel__add-new-question svc-action-button"
            v-key2click
            @click="addNewQuestion"
          >
            <sv-svg-icon
              class="svc-panel__add-new-question-icon"
              :iconName="'icon-add_24x24'"
              :size="24"
            ></sv-svg-icon>
            <span class="svc-text svc-text--normal svc-text--bold">
              {{ adorner.addNewQuestionText }}
            </span>
          </div>
          <button
            type="button"
            :title="adorner.addNewQuestionText"
            v-key2click
            @click="selectQuestionType"
            class="svc-panel__question-type-selector"
          >
            <sv-svg-icon
              class="svc-panel__question-type-selector-icon"
              :iconName="adorner.questionTypeSelectorModel.iconName"
              :size="24"
              ></sv-svg-icon>
          </button>
        </div>
      </div>

      <div
        v-if="adorner.element.isInteractiveDesignElement"
        class="svc-question__content-actions"
        @focusin="adorner.select(adorner, $event)"
      >
        <sv-action-bar
          :model="adorner.actionContainer"
          :handleClick="false"
        ></sv-action-bar>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { Question } from "survey-core";
import {
  QuestionAdornerViewModel,
  type SurveyCreatorModel,
} from "survey-creator-core";
const props = defineProps<{
  componentName: string;
  componentData: any;
}>();
const adorner = useCreatorModel(
  () =>
    new QuestionAdornerViewModel(
      props.componentData.data as SurveyCreatorModel,
      props.componentData.element as Question,
      null as any
    ),
  [() => props.componentData.data, () => props.componentData.element],
  (value) => {
    value.dispose();
  }
);
const addNewQuestion = (event: Event) => {
  event.stopPropagation();
  adorner.value.addNewQuestion();
};
const selectQuestionType = (event: any) => {
  event.stopPropagation();
  adorner.value.questionTypeSelectorModel?.action(
    adorner.value.questionTypeSelectorModel,
    event
  );
};
// svc-panel
</script>
