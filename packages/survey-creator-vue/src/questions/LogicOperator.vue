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
        :role="question.ariaRole"
        :aria-required="question.ariaRequired"
        :aria-label="question.ariaLabel"
        :aria-labelledby="question.ariaLabelledBy"
        :aria-invalid="question.ariaInvalid"
        :aria-errormessage="question.ariaErrormessage"
        :aria-expanded="question.ariaExpanded"
      >
        <div :class="question.cssClasses.controlValue">
          <SvComponent
            :is="'survey-string'"
            v-if="question.selectedItemLocText"
            :locString="question.selectedItemLocText"
          ></SvComponent>
          <div>{{ question.readOnlyText }}</div>
        </div>
        <div
          v-if="question.allowClear && question.cssClasses.cleanButtonIconId"
          :class="question.cssClasses.cleanButton"
          @click="clear"
          v-show="!question.isEmpty()"
        >
          <SvComponent
            :is="'sv-svg-icon'"
            :class="question.cssClasses.cleanButtonSvg"
            :iconName="question.cssClasses.cleanButtonIconId"
            :size="'auto'"
            :title="question.clearCaption"
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
        v-if="question.selectedItemLocText"
        :locString="question.selectedItemLocText"
      ></SvComponent>
      <div>{{ question.readOnlyText }}</div>
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
const clear = (event: Event) => {
  dropdownModel.value?.onClear(event);
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
