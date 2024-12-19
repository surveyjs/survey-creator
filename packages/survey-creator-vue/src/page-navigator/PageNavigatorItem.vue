<template>
  <div class="svc-page-navigator-item">
    <div
      role="button"
      class="svc-page-navigator-item-content"
      @click="click($event)"
      v-key2click
      :class="{
        'svc-page-navigator-item--selected': model.active,
        'svc-page-navigator-item--disabled': model.disabled,
      }"
    >
      <div class="svc-page-navigator-item__dot" :title="model.title"><div class="svc-page-navigator-item__dot-content"></div></div>

      <div class="svc-page-navigator-item__banner">
        <span class="svc-page-navigator-item__text">{{
          model.title
        }}</span>
        <span class="svc-page-navigator-item__dot"><span class="svc-page-navigator-item__dot-content"></span></span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import type { Action } from "survey-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: Action }>();
useBase(() => props.model);
const click = (event: MouseEvent) => {
  props.model.action();
  event.stopPropagation();
  event.preventDefault();
};
</script>
