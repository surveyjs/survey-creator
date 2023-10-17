<template>
  <sv-svg-icon
    :iconName="item.iconName"
    :size="item.iconSize"
    :class="'svc-json-error__icon'"
  ></sv-svg-icon>
  <div class="svc-json-error__container">
    <div class="svc-json-error__title">
      <survey-string :locString="item.locTitle"></survey-string>
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
      <sv-svg-icon
        :iconName="item.data.fixButtonIcon"
        :size="'auto'"
      ></sv-svg-icon>
    </button>
  </div>
</template>
<script lang="ts" setup>
import type { Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: Action }>();
useBase(() => props.item);
const fixError = (event: Event) => {
  event.stopPropagation();
  props.item.data.fixError();
};
</script>
