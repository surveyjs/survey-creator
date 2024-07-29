<template>
  <div :class="item.data.containerCss">
    <span :class="item.data.additionalTitleCss">{{
      item.data.additionalTitle
    }}</span>
    <sv-action-bar-item-dropdown :item="item"></sv-action-bar-item-dropdown>
  </div>
</template>
<script lang="ts" setup>
import type { Action } from "survey-core";
defineProps<{ item: Action }>();
</script>
