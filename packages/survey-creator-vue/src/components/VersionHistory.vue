<template>
  <div class="svc-version-history">
    <template v-for="row in model.rows" :key="row.id">
      <!-- The group header is the only interactive row. -->
      <button
        v-if="row.kind === 'group'"
        type="button"
        :class="row.css"
        :aria-expanded="row.expanded"
        v-on:click="model.toggleGroup(row.groupKey)"
      >
        <span class="svc-version-history__icon">
          <SvComponent
            :is="'sv-svg-icon'"
            :iconName="row.expanded ? 'icon-chevrondown-16x16' : 'icon-chevronright-16x16'"
            :size="16"
          />
        </span>
        <span class="svc-version-history__title">{{ row.title }}</span>
      </button>
      <div v-else :class="row.css">
        <span class="svc-version-history__title">{{ row.title }}</span>
        <span v-if="row.time" class="svc-version-history__time">{{ row.time }}</span>
      </div>
    </template>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent, useBase } from "survey-vue3-ui";
import type { VersionHistoryModel } from "survey-creator-core/collaboration";
const props = defineProps<{ model: VersionHistoryModel }>();
useBase(() => props.model);
</script>
