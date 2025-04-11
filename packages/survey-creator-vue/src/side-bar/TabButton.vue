<template>
  <div v-if="model.visible" class="svc-menu-action">
    <div
      :class="model.buttonClassName"
      :title="model.tooltip"
      @click="model.action()"
      v-key2click="{ processEsc: false, disableTabStop: model.disableTabStop }"
    >
      <div class="svc-menu-action__icon">
        <div class="svc-menu-action__icon-container">
          <SvComponent
            :is="'sv-svg-icon'"
            :iconName="model.iconName"
            :size="'auto'"
          ></SvComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuButton } from "survey-creator-core";
import {
  SvComponent,
  useBase,
  key2ClickDirective as vKey2click,
} from "survey-vue3-ui";
const props = defineProps<{ model: MenuButton }>();

useBase(() => props.model);
</script>
