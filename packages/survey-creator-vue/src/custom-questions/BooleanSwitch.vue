<template>
  <div
    class="spg-boolean-switch"
    role="checkbox"
    :aria-required="question.ariaRequired"
    :aria-label="question.ariaLabel"
    :aria-invalid="question.ariaInvalid"
    :aria-errormessage="question.ariaErrormessage"
    @click="question.value = !question.value"
  >
    <div
      class="spg-boolean-switch__button"
      tabindex="0"
      :class="question.value ? 'spg-boolean-switch__button--checked' : ''"
      v-key2click="{ disableTabStop: true }"
    >
      <div class="spg-boolean-switch__thumb">
        <div
          class="spg-boolean-switch__thumb-circle spg-boolean-switch__thumb--left"
        ></div>
      </div>
      <div class="spg-boolean-switch__thumb">
        <div
          class="spg-boolean-switch__thumb-circle spg-boolean-switch__thumb--right"
        ></div>
      </div>
    </div>
    <div class="spg-boolean-switch__caption">
      <div class="spg-boolean-switch__title">
        <SvComponent :is="'survey-string'" :locString="question.locTitle" />
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { RendererFactory } from "survey-core";
import { ref } from "vue";
import {
  useQuestion,
  SvComponent,
  key2ClickDirective as vKey2click,
} from "survey-vue3-ui";
defineOptions({ inheritAttrs: false });
const props = defineProps<{ question: any }>();
const root = ref(null);
useQuestion(props, root);
</script>

<script lang="ts">
RendererFactory.Instance.registerRenderer(
  "boolean",
  "switch",
  "sv-boolean-switch"
);
</script>
