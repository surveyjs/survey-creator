<template>
  <div
    role="tab"
    :id="'tab-' + item.id"
    :aria-selected="item.active"
    :aria-controls="'scrollableDiv-' + item.id"
    class="svc-tabbed-menu-item"
    :class="item.getRootCss()"
    @click="item.action"
    v-key2click
  >
    <span v-if="item.hasTitle" :class="item.getTitleCss()">
      {{ item.title }}
    </span>
    <SvComponent
      v-if="item.hasIcon"
      :is="'sv-svg-icon'"
      :iconName="item.iconName"
      :size="'auto'"
      :class="item.getIconCss()"
      :title="item.tooltip || item.title"
    ></SvComponent>
  </div>
</template>
<script setup lang="ts">
import { SvComponent, key2ClickDirective as vKey2click } from "survey-vue3-ui";
import type { TabbedMenuItem } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: TabbedMenuItem }>();
useBase(() => props.item);
</script>
