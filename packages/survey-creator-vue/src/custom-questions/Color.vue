<template>
  <div :class="question.cssClasses.root" @keydown="question.onKeyDown">
    <label :class="question.getSwatchCss()" :style="question.getSwatchStyle()">
      <sv-svg-icon
        :iconName="question.cssClasses.swatchIcon"
        :size="'auto'"
      ></sv-svg-icon>
      <input
        type="color"
        :disabled="question.isInputReadOnly"
        :class="question.cssClasses.colorInput"
        :value="question.renderedColorValue"
        tabindex="-1"
        @change="question.onColorInputChange"
      />
    </label>
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
      @keyup="question.onKeyUp"
      @blur="question.onBlur"
      @beforeinput="question.onBeforeInput"
      :value="question.renderedValue"
      :class="question.cssClasses.control"
    />
    <template v-if="question.showDropdownAction">
      <sv-action-bar-item :item="question.dropdownAction"></sv-action-bar-item>
      <sv-popup :model="question.dropdownAction.popupModel"></sv-popup>
    </template>
  </div>
</template>

<script lang="ts" setup>
import type { QuestionColorModel } from "survey-creator-core";
import { useQuestion } from "survey-vue3-ui";
import { ref } from "vue";
const props = defineProps<{ question: QuestionColorModel }>();
useQuestion(props, ref());
</script>
