<template>
  <div :class="question.cssClasses.root" @keydown="question.onKeyDown">
    <input
      autocomplete="off"
      :disabled="question.isInputReadOnly"
      :id="question.inputId"
      :placeholder="question.renderedPlaceholder"
      :aria-required="question.ariaRequired"
      :aria-label="question.ariaLabel"
      :aria-invalid="question.ariaInvalid"
      :aria-describedby="question.ariaDescribedBy"
      @change="question.onChange"
      @keydown="question.onInputKeyDown"
      @keyup="question.onKeyUp"
      @blur="question.onBlur"
      @focus="question.onFocus"
      @beforeinput="question.onBeforeInput"
      :value="question.renderedValue"
      :class="question.cssClasses.control"
    />
    <span :class="question.cssClasses.buttonsContainer">
      <button
        :disabled="question.isInputReadOnly"
        :class="question.cssClasses.arrowButton"
        @click="question.onDownButtonClick"
        @mousedown="question.onDownButtonMouseDown"
        @mouseup="question.onButtonMouseUp"
        @mouseleave="question.onButtonMouseLeave"
        @blur="question.onBlur"
        @focus="question.onFocus"
        tabindex="-1"
      >
        <SvComponent
          :is="'sv-svg-icon'"
          :iconName="question.cssClasses.decreaseButtonIcon"
          :size="'auto'"
        ></SvComponent>
      </button>
      <button
        :disabled="question.isInputReadOnly"
        :class="question.cssClasses.arrowButton"
        @click="question.onUpButtonClick"
        @mousedown="question.onUpButtonMouseDown"
        @mouseup="question.onButtonMouseUp"
        @mouseleave="question.onButtonMouseLeave"
        @blur="question.onBlur"
        @focus="question.onFocus"
        tabindex="-1"
      >
        <SvComponent
          :is="'sv-svg-icon'"
          :iconName="question.cssClasses.increaseButtonIcon"
          :size="'auto'"
        ></SvComponent>
      </button>
    </span>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { QuestionSpinEditorModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { ref } from "vue";
const props = defineProps<{ question: QuestionSpinEditorModel }>();
useQuestion(props, ref<HTMLElement>());
</script>
