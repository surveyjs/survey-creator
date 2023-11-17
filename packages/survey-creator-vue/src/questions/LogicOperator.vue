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
        :aria-invalid="question.ariaInvalid"
        :aria-describedby="question.ariaDescribedBy"
      >
        <div :class="question.cssClasses.controlValue">
          <survey-string
            v-if="question.selectedItemLocText"
            :locString="question.selectedItemLocText"
          ></survey-string>
          <div>{{ question.readOnlyText }}</div>
        </div>
        <div
          v-if="question.allowClear && question.cssClasses.cleanButtonIconId"
          :class="question.cssClasses.cleanButton"
          @click="clear"
          v-show="!question.isEmpty()"
        >
          <sv-svg-icon
            :class="question.cssClasses.cleanButtonSvg"
            :iconName="question.cssClasses.cleanButtonIconId"
            :size="'auto'"
            :title="question.clearCaption"
          ></sv-svg-icon>
        </div>
      </div>
      <sv-popup :model="question.popupModel"></sv-popup>
    </template>
    <div
      disabled
      v-if="question.isReadOnly"
      :class="question.getControlClass()"
      :id="question.inputId"
    >
      <survey-string
        v-if="question.selectedItemLocText"
        :locString="question.selectedItemLocText"
      ></survey-string>
      <div>{{ question.readOnlyText }}</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
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
