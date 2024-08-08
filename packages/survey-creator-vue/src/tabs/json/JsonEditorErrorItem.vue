<template>
  <SvComponent :name="'sv-svg-icon'"
    :iconName="item.iconName"
    :size="item.iconSize"
    :class="'svc-json-error__icon'"
  ></SvComponent>
  <div class="svc-json-error__container">
    <div class="svc-json-error__title">
      <SvComponent :name="'survey-string'" :locString="item.locTitle"></SvComponent>
    </div>
    <button
      type="button"
      v-if="item.data.showFixButton"
      @click="fixError"
      v-key2click
      :title="item.data.fixButtonTitle"
      :aria-label="item.data.fixButtonTitle"
      class="svc-json-error__fix-button"
    >
      <SvComponent :name="'sv-svg-icon'"
        :iconName="item.data.fixButtonIcon"
        :size="'auto'"
      ></SvComponent>
    </button>
  </div>
</template>
<script lang="ts" setup>
 import { SvComponent } from "survey-vue3-ui";
import type { Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: Action }>();
useBase(() => props.item);
const fixError = (event: Event) => {
  event.stopPropagation();
  props.item.data.fixError();
};
</script>
