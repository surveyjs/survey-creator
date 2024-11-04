<template>
  <template v-if="!iconName">
    <span
      v-if="disabled"
      class="svc-action-button svc-action-button--disabled"
      :class="classes"
      :title="title"
      >{{ text }}</span
    >
    <span
      role="button"
      class="svc-action-button"
      @click="onClick"
      v-key2click
      :class="getButtonCss()"
      :title="title"
      >{{ text }}</span
    >
  </template>
  <template v-if="iconName">
    <span
      v-if="disabled"
      class="svc-action-button svc-action-button--disabled"
      :class="classes"
      :title="title"
      ><SvComponent :is="'sv-svg-icon'" :iconName="iconName" :size="'auto'"></SvComponent
    ></span>
    <span
      role="button"
      class="svc-action-button"
      @click="onClick"
      v-key2click
      :class="getButtonCss()"
      :title="title"
      ><SvComponent :is="'sv-svg-icon'" :iconName="iconName" :size="'auto'"></SvComponent
    ></span>
  </template>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
const props = defineProps<{
  classes?: string;
  selected?: boolean;
  disabled?: boolean;
  text: string;
  title?: string;
  allowBubble?: boolean;
  click: () => void;
  iconName?: string;
}>();

const onClick = (event: Event) => {
  props.click();
  if (!props.allowBubble) {
    event.stopPropagation();
  }
};
const getButtonCss = () => {
  return props.classes + (props.selected ? " svc-action-button--selected" : "");
};
</script>
