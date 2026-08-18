<template>
  <div class="svc-collab-bar">
    <div class="svc-collab-bar__left">
      <SvComponent :is="'sv-action-bar'" :model="model.actions" />
      <!-- The connection plate is markup, not an action: an action-bar item is
           always a button, and a status is not clickable. -->
      <div v-if="model.statusVisible" :class="model.getStatusCss()" role="status">
        <SvComponent :is="'sv-svg-icon'" :iconName="model.statusIconName" :size="16" />
        <span class="svc-collab-bar__status-text">{{ model.statusText }}</span>
      </div>
    </div>
    <div class="svc-collab-bar__right">
      <SvComponent :is="'sv-action-bar'" :model="model.participantActions" />
      <SvComponent :is="'sv-action-bar'" :model="model.toolActions" />
    </div>
    <!-- The Version History window is the bar's own. position:fixed, so
         rendering it here keeps it inside the themed root without affecting
         layout - the creator needs no floating-window host. -->
    <SvComponent
      :is="'svc-floating-panel'"
      v-if="model.historyPanel"
      :model="model.historyPanel"
    />
  </div>
</template>
<script lang="ts" setup>
import { SvComponent, useBase } from "survey-vue3-ui";
import type { CollabBarModel } from "survey-creator-core/collaboration";
const props = defineProps<{ model: CollabBarModel }>();
useBase(() => props.model);
</script>
