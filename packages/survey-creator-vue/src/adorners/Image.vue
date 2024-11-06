<template>
  <div
    class="svc-image-question-controls"
    v-if="!model.isUploading && !model.isEmptyElement"
  >
    <template v-if="model.allowEdit">
      <input
        type="file"
        aria-hidden="true"
        tabindex="-1"
        :accept="model.acceptedTypes"
        class="svc-choose-file-input"
      />
      <span
        class="svc-context-button"
        v-key2click
        :title="undefined"
        :aria-label="undefined"
      >
        <SvComponent
          :is="'sv-svg-icon'"
          :iconName="'icon-choosefile'"
          :size="'auto'"
          @click="model.chooseFile(model)"
        ></SvComponent>
      </span>
    </template>
  </div>
  <div
    class="svc-image-question__loading-placeholder"
    v-if="model.isUploading && !model.isEmptyElement"
  >
    <div class="svc-image-question__loading">
      <SvComponent :is="'sv-loading-indicator'"></SvComponent>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import type { QuestionImageModel } from "survey-core";
import type { QuestionImageAdornerViewModel } from "survey-creator-core";

defineProps<{
  model: QuestionImageAdornerViewModel;
  element: QuestionImageModel;
}>();
</script>
