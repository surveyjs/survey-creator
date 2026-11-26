<template>
  <SvComponent
    :is="'sv-svg-icon'"
    :iconName="item.iconName"
    :size="item.iconSize"
    :class="'svc-json-error__icon'"
  ></SvComponent>
  <div class="svc-json-error__container">
    <div class="svc-json-error__title" :title="item.data.error?.text" @mousedown="onTitleMouseDown">
      <SvComponent
        :is="'survey-string'"
        :locString="item.locTitle"
      ></SvComponent>
    </div>
    <SvComponent :is="'sv-action-bar'" :model="item.data.actions"></SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent, useBase } from "survey-vue3-ui";
import type { Action } from "survey-core";
const props = defineProps<{ item: Action }>();
useBase(() => props.item);
// the list cancels mousedown, which also cancels a text selection
const onTitleMouseDown = (event: Event) => {
  event.stopPropagation();
};
</script>
