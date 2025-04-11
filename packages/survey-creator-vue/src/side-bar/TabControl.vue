<template>
  <div :class="model.sideBarClassName">
    <div class="svc-sidebar-tabs__top-container">
      <div class="svc-sidebar-tabs__collapse-button">
        <SvComponent
          :is="'svc-tab-button'"
          :model="model.expandCollapseAction"
        ></SvComponent>
      </div>
      <div class="svc-sidebar-tabs__separator">
        <div></div>
      </div>
      <SvComponent :is="'sv-scroll'">
        <div class="svc-sidebar-tabs__items">
          <SvComponent :is="'svc-tabs'" :model="model.topToolbar"></SvComponent>
        </div>
      </SvComponent>
    </div>
    <div class="svc-sidebar-tabs__bottom-container">
      <div class="svc-sidebar-tabs__items">
        <SvComponent
          :is="'svc-tabs'"
          :model="model.bottomToolbar"
        ></SvComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { TabControlModel } from "survey-creator-core";
import { SvComponent, useBase } from "survey-vue3-ui";
const props = defineProps<{ model: TabControlModel }>();

useBase(() => props.model);
</script>
