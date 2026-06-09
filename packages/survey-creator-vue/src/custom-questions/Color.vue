<template>
  <div :class="question.cssClasses.root" @keydown="question.onKeyDown" ref="root">
    <div :class="question.cssClasses.colorSwatch">
      <Swatch
        :className="question.getSwatchCss()"
        :swatchIcon="question.cssClasses.swatchIcon"
        :iconClassName="question.cssClasses.iconClassName"
        :color="question.renderedValue"
        :showIcon="true"
        :colorInputValue="question.renderedColorValue"
        :colorInputClassName="question.cssClasses.colorInput"
        :inputDisabled="question.isInputReadOnly"
        :colorInputChange="onColorInputChange"
        :arias="swatchArias"
      />
    </div>
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
    <SvComponent :is="'sv-action-bar'" v-if="question.hasVisibleInputActions" :model="question.inputActionsContainer"></SvComponent>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { SvComponent } from "survey-vue3-ui";
import type { QuestionColorModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { ref } from "vue";
import Swatch from "./Swatch.vue";

const props = defineProps<{ question: QuestionColorModel }>();
const root = ref<HTMLElement>();
useQuestion(props, root);

const onColorInputChange = (event: Event) => props.question.onColorInputChange(event);
const swatchArias = computed(() => ({
  "aria-required": props.question.a11y_input_ariaRequired,
  "aria-labelledby": props.question.a11y_input_ariaLabelledBy,
  "aria-label": props.question.a11y_input_ariaLabel,
  "aria-invalid": props.question.a11y_input_ariaInvalid,
  "aria-describedby": props.question.a11y_input_ariaDescribedBy,
}));
</script>
