<template>
  <div class="svc-sidebar__header svc-sidebar__header--tabbed">
    <div
      class="svc-sidebar__header-container svc-sidebar__header-container--with-subtitle"
    >
      <div class="svc-sidebar__header-content">
        <div
          :class="model.buttonClassName"
          v-key2click="{ processEsc: false }"
          @click="model.action()"
        >
          <div class="svc-sidebar__header-caption">
            <span class="svc-sidebar__header-title">{{ model.title }}</span>
            <span class="svc-sidebar__header-subtitle">{{
              model.tooltip
            }}</span>
          </div>
        </div>
        <SvComponent :is="'sv-popup'" :model="model.popupModel"></SvComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  SvComponent,
  useBase,
  key2ClickDirective as vKey2click,
} from "survey-vue3-ui";
import { MenuButton } from "survey-creator-core";
const props = defineProps<{ model: MenuButton }>();

useBase(() => props.model);
</script>
