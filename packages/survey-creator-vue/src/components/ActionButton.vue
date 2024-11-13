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
      :class="getButtonCss()"
      :title="title"
      ><SvComponent :is="'sv-svg-icon'" :iconName="iconName" :size="'auto'"></SvComponent
    ></span>
    <span
      role="button"
      @click="onClick"
      v-key2click
      :class="getButtonCss()"
      :title="title"
      ><SvComponent :is="'sv-svg-icon'" :iconName="iconName" :size="'auto'"></SvComponent
    ></span>
  </template>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click, SvComponent } from "survey-vue3-ui";
import { CssClassBuilder } from "survey-core";
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
  const buttonClasses = new CssClassBuilder()
      .append(props.classes || "")
      .append("svc-action-button")
      .append("svc-action-button--icon", !!props.iconName)
      .append("svc-action-button--selected", !!props.selected)
      .append("svc-action-button--disabled", !!props.disabled)
      .toString();
  return buttonClasses;
};
</script>
