<template>
  <div class="svc-creator-tab__content">
    <div class="svc-json-editor-tab__content">
      <div class="svc-json-editor-tab__monaco-editor" ref="inputEl"></div>
      <div class="svc-json-editor-tab__errros_list" v-show="model.hasErrors">
        <SvComponent :is="'sv-list'" :model="model.errorList"></SvComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { MonacoJsonEditorModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
import { onMounted, ref } from "vue";
const props = defineProps<{ model: MonacoJsonEditorModel }>();
const inputEl = ref<HTMLDivElement>();
useBase(() => props.model);
onMounted(() => props.model.init(inputEl.value as HTMLDivElement));
</script>
