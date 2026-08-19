<template>
  <div
    v-if="item.visible"
    :class="item.rowCss"
    :role="item.rowRole || undefined"
    :aria-expanded="item.ariaExpanded"
  >
    <span v-if="item.hasMarkerText" :class="item.markerCss">{{ item.markerText }}</span>
    <span v-else-if="item.hasMarkerIcon" class="svc-collab-row__icon">
      <SvComponent
        :is="'sv-svg-icon'"
        :iconName="item.markerIconName"
        :size="item.markerIconSize"
      />
    </span>
    <span class="svc-collab-row__title">{{ item.title }}</span>
    <span v-if="item.hasSubtitle" class="svc-collab-row__subtitle">{{ item.subtitle }}</span>
  </div>
</template>
<script lang="ts">
// sv-list also passes `model` (the ListModel) and `itemData`; without this they
// would be spread onto the root div as stray attributes.
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { SvComponent, useBase } from "survey-vue3-ui";
import type { CollabRowAction } from "survey-creator-core/collaboration";
const props = defineProps<{ item: CollabRowAction }>();
useBase(() => props.item);
</script>
