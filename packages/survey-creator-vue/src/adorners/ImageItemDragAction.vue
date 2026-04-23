<template>
  <span :class="item.getActionBarItemCss()" @pointerdown="item.data.model.onPointerDown($event)">
    <SvComponent :is="'sv-svg-icon'" :iconName="item.iconName" :size="item.iconSize"  :class="item.cssClasses.itemIcon"></SvComponent>
  </span>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { Action } from "survey-core";
defineProps<{
  item: Action
}>();
</script>
