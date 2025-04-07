<template>
  <div :class="question.cssClasses.root" @keydown="question.onKeyDown">
    <label :class="question.getSwatchCss()" :style="question.getSwatchStyle()">
      <SvComponent
        :is="'sv-svg-icon'"
        :iconName="question.cssClasses.swatchIcon"
        :size="'auto'"
      ></SvComponent>
      <input
        type="color"
        :disabled="question.isInputReadOnly"
        :class="question.cssClasses.colorInput"
        :value="question.renderedColorValue"
        tabindex="-1"
        @change="question.onColorInputChange"
        :aria-required="question.a11y_input_ariaRequired"
        :aria-labelledby="question.a11y_input_ariaLabelledBy"
        :aria-label="question.a11y_input_ariaLabel"
        :aria-invalid="question.a11y_input_ariaInvalid"
        :aria-describedby="question.a11y_input_ariaDescribedBy"
      />
    </label>
    <input
      autocomplete="off"
      :disabled="question.isInputReadOnly"
      :id="question.inputId"
      :placeholder="question.renderedPlaceholder"
      :aria-required="question.a11y_input_ariaRequired"
      :aria-labelledby="question.a11y_input_ariaLabelledBy"
      :aria-label="question.a11y_input_ariaLabel"
      :aria-invalid="question.a11y_input_ariaInvalid"
      :aria-describedby="question.a11y_input_ariaDescribedBy"
      @change="question.onChange"
      @keyup="question.onKeyUp"
      @blur="question.onBlur"
      @beforeinput="question.onBeforeInput"
      :value="question.renderedValue"
      :class="question.cssClasses.control"
    />
    <template v-if="question.showDropdownAction">
      <div aria-hidden="true" :class="question.cssClasses.choicesButtonWrapper">
        <SvComponent
          :is="'sv-action-bar-item'"
          :item="question.dropdownAction"
        ></SvComponent>
      </div>
      <SvComponent
        :is="'sv-popup'"
        :model="question.dropdownAction.popupModel"
      ></SvComponent>
    </template>
  </div>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { QuestionColorModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { ref } from "vue";
const props = defineProps<{ question: QuestionColorModel }>();
useQuestion(props, ref());
</script>
