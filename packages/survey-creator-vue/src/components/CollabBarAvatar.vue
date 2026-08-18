<template>
  <!-- Inside the roster popup the list item owns the click, so the avatar is a
       plain marker there; in the strip it is the clickable chip. -->
  <div v-if="item.isListItem" class="svc-collab-bar__roster-item">
    <span :class="item.getAvatarCss()">{{ item.initials }}</span>
    <span class="svc-collab-bar__roster-name">{{ item.title }}</span>
  </div>
  <button
    v-else
    :class="item.getActionBarItemCss()"
    type="button"
    v-on:click="
      (args: any) => {
        item.action(item, !!args.pointerType);
      }
    "
    v-bind:title="item.tooltip || item.title"
    v-key2click="{ processEsc: false, disableTabStop: item.disableTabStop }"
  >
    <span :class="item.getAvatarCss()">{{ item.initials }}</span>
  </button>
</template>
<script lang="ts">
export default {
  inheritAttrs: false,
};
</script>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { useBase } from "survey-vue3-ui";
import type { CollabParticipantAction } from "survey-creator-core/collaboration";
const props = defineProps<{ item: CollabParticipantAction }>();
useBase(() => props.item);
</script>
