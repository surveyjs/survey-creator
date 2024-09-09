<template>
  <div :class="model.sideBarClassName">
    <div class="svc-sidebar-tabs__top-container">
      <div class="svc-sidebar-tabs__collapse-button">
        <svc-tab-button :model="model.expandCollapseAction"></svc-tab-button>
      </div>
      <div class="svc-sidebar-tabs__separator">
        <div></div>
      </div>
      <div class="svc-sidebar-tabs__items">
        <svc-tabs :model="model.topToolbar"></svc-tabs>
      </div>
    </div>
    <div class="svc-sidebar-tabs__bottom-container">
      <div class="svc-sidebar-tabs__items">
        <svc-tabs :model="model.bottomToolbar"></svc-tabs>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TabControlModel } from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: TabControlModel }>();

useBase(() => props.model);
</script>
