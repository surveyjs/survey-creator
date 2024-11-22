<template>
  <div
    v-if="adorner && !adorner.isDisposed"
    class="svc-question__adorner"
    :class="adorner.rootCss()"
    @dblclick="(e) => adorner.dblclick(e)"
    @mouseover="adorner.hover($event, $event.currentTarget)"
    @mouseleave="adorner.hover($event, $event.currentTarget)"
    :data-sv-drop-target-survey-element="adorner.element.name || null"
    ref="root"
  >
    <div
      v-if="adorner.showHiddenTitle"
      :class="adorner.cssCollapsedHiddenHeader"
    >
      <SvComponent
        v-if="!!adorner.element.hasTitle"
        :is="'survey-element-title'"
        :element="adorner.element"
      />
      <div v-else :class="adorner.cssCollapsedHiddenTitle">
        <span class="svc-fake-title">{{ adorner.element.name }}</span>
      </div>
    </div>
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
        class="svc-question__drop-indicator svc-question__drop-indicator--left"
      ></div>
      <div
        class="svc-question__drop-indicator svc-question__drop-indicator--right"
      ></div>
      <div
        class="svc-question__drop-indicator svc-question__drop-indicator--top"
      ></div>
      <div
        class="svc-question__drop-indicator svc-question__drop-indicator--bottom"
      ></div>
      <div
        v-if="
          adorner.allowDragging && adorner.element.isInteractiveDesignElement
        "
        class="svc-question__drag-area"
        @pointerdown="adorner.onPointerDown($event)"
      >
        <SvComponent
          :is="'sv-svg-icon'"
          class="svc-question__drag-element"
          :iconName="'icon-drag-area-indicator_24x16'"
          :size="'auto'"
        ></SvComponent>
        <div class="svc-question__top-actions">
          <SvComponent
            :is="'sv-action-bar'"
            :model="adorner.topActionContainer"
            :handleClick="false"
          ></SvComponent>
        </div>
      </div>
      <template v-if="adorner.needToRenderContent">
        <SvComponent :is="componentName" v-bind="componentData"></SvComponent>
        <div
          v-if="adorner.isEmptyElement"
          class="svc-panel__placeholder_frame-wrapper"
        >
          <div class="svc-panel__placeholder_frame">
            <div class="svc-panel__placeholder">
              {{ adorner.placeholderText }}
            </div>
            <div
              v-if="adorner.showAddQuestionButton"
              class="svc-panel__add-new-question svc-action-button"
              v-key2click
              @click="addNewQuestion"
            >
              <SvComponent
                :is="'sv-svg-icon'"
                class="svc-panel__add-new-question-icon"
                :iconName="'icon-add_24x24'"
                :size="'auto'"
              ></SvComponent>
              <span class="svc-add-new-item-button__text">
                {{ adorner.addNewQuestionText }}
              </span>
            </div>
          </div>
        </div>
        <div
          v-if="!adorner.isEmptyElement && adorner.showAddQuestionButton"
          class="svc-panel__add-new-question-container"
        >
          <div class="svc-panel__question-type-selector-popup">
            <SvComponent
              :is="'sv-popup'"
              :model="adorner.questionTypeSelectorModel.popupModel"
            ></SvComponent>
          </div>
          <div class="svc-panel__add-new-question-wrapper">
            <SvComponent
              :is="'svc-add-new-question-btn'"
              :item="{ data: adorner }"
              :buttonClass="'svc-action-button'"
              :renderPopup="false"
            ></SvComponent>
          </div>
        </div>

        <div
          v-if="adorner.element.isInteractiveDesignElement"
          class="svc-question__content-actions"
          @focusin="adorner.select(adorner, $event)"
        >
          <SvComponent
            :is="'sv-action-bar'"
            :model="adorner.actionContainer"
            :handleClick="false"
          ></SvComponent>
        </div>
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
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
