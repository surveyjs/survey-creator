<template>
  <div :class="item.data.containerCss">
    <span :class="item.data.additionalTitleCss">{{
      item.data.additionalTitle
    }}</span>
    <SvComponent :is="'sv-action-bar-item-dropdown'" :item="item"></SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import type { Action } from "survey-core";
defineProps<{ item: Action }>();
</script>
