<template>
  <div class="svc-menu-action">
    <div
      :class="model.buttonClassName"
      :title="model.tooltip"
      @click="model.action()"
    >
      <div class="svc-menu-action__icon">
        <div class="svc-menu-action__icon-container">
          <SvComponent
            :is="'sv-svg-icon'"
            :iconName="model.iconName"
            :size="24"
          ></SvComponent>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { MenuButton } from "survey-creator-core";
import { SvComponent, useBase } from "survey-vue3-ui";
const props = defineProps<{ model: MenuButton }>();

useBase(() => props.model);
</script>
