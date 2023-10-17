<template>
  <div class="svc-creator-tab__content">
    <div class="svc-json-editor-tab__content">
      <textarea
        class="svc-json-editor-tab__content-area"
        :aria-label="model.ariaLabel"
        :disabled="model.readOnly"
        v-model="model.text"
        @keydown="model.checkKey(model, $event)"
        ref="inputEl"
      >
      </textarea>
      <div class="svc-json-editor-tab__errros_list" v-show="model.hasErrors">
        <sv-list :model="model.errorList"></sv-list>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { TextareaJsonEditorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { ref, onMounted } from "vue";

const props = defineProps<{ model: TextareaJsonEditorModel }>();
const inputEl = ref<HTMLTextAreaElement>();
const model = props.model;
model.canShowErrors = false;
useBase(() => props.model);
onMounted(() => {
  const model = props.model;
  model.textElement = inputEl.value as HTMLTextAreaElement;
});
</script>
