<template>
  <div :class="question.cssClasses.selectWrapper">
    <template v-if="!question.isReadOnly">
      <div
        :class="question.getControlClass()"
        @click="click"
        @keyup="keyup"
        :id="question.inputId"
        :required="question.isRequired"
        :tabindex="question.isInputReadOnly ? undefined : 0"
        :disabled="question.isInputReadOnly"
        :role="dropdownModel.ariaQuestionRole"
        :aria-required="dropdownModel.ariaQuestionRequired"
        :aria-invalid="dropdownModel.ariaQuestionInvalid"
        :aria-errormessage="dropdownModel.ariaQuestionErrorMessage" 
        :aria-expanded="dropdownModel.ariaQuestionExpanded"
        :aria-label="dropdownModel.ariaQuestionLabel" 
        :aria-labelledby="dropdownModel.ariaQuestionLabelledby"
        :aria-controls="dropdownModel.ariaQuestionControls"
      >
        <div :class="question.cssClasses.controlValue">
          <SvComponent
            :is="'survey-string'"
            v-if="question.locReadOnlyText"
            :locString="question.locReadOnlyText"
          ></SvComponent>
        </div>
      </div>
      <SvComponent :is="'sv-popup'" :model="question.popupModel"></SvComponent>
    </template>
    <div
      disabled
      v-if="question.isReadOnly"
      :class="question.getControlClass()"
      :id="question.inputId"
    >
      <SvComponent
        :is="'survey-string'"
        v-if="question.locReadOnlyText"
        :locString="question.locReadOnlyText"
      ></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import { DropdownListModel, type QuestionDropdownModel } from "survey-core";
import { initLogicOperator } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { computed, ref } from "vue";
const props = defineProps<{ question: QuestionDropdownModel }>();
const root = ref<HTMLElement>();
const dropdownModel = computed(() => {
  return (
    props.question.dropdownListModel ?? new DropdownListModel(props.question)
  );
});
useQuestion(props, root, (newValue) => {
  initLogicOperator(newValue);
});
const click = (event: Event) => {
  dropdownModel.value?.onClick(event);
};
const keyup = (event: Event) => {
  dropdownModel.value?.keyHandler(event);
};
</script>
<script lang="ts">
import { RendererFactory } from "survey-core";
RendererFactory.Instance.registerRenderer(
  "dropdown",
  "logicoperator",
  "sv-logic-operator"
);
</script>
