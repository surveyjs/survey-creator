<template>
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
<script lang="ts" setup>
const props = defineProps<{
  classes?: string;
  selected?: boolean;
  disabled?: boolean;
  text: string;
  title?: string;
  allowBubble?: boolean;
  click: () => void;
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
