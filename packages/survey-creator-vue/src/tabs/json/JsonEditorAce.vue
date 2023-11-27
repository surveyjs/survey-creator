<template>
  <div class="svc-creator-tab__content">
    <div class="svc-json-editor-tab__content">
      <div class="svc-json-editor-tab__ace-editor" ref="inputEl"></div>
      <div class="svc-json-editor-tab__errros_list" v-show="model.hasErrors">
        <sv-list :model="model.errorList"></sv-list>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { AceJsonEditorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { onMounted, ref } from "vue";
const props = defineProps<{ model: AceJsonEditorModel }>();
const inputEl = ref<HTMLTextAreaElement>();
useBase(() => props.model);
onMounted(() => props.model.init((window as any).ace.edit(inputEl.value)));
</script>
