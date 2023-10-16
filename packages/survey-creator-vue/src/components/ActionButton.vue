<template>
  <span
    v-if="disabled"
    class="svc-action-button svc-action-button--disabled"
    :class="classes"
    :title="title"
    >{{ text }}</span
  >
  <span
    v-if="!disabled"
    role="button"
    class="svc-action-button"
    @click="onClick"
    v-key2click
    :title="title"
    :class="{ 'svc-action-button--selected': selected, classes }"
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
</script>
