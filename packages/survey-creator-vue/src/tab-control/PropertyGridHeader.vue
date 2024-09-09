<template>
  <div class="svc-sidebar__header svc-sidebar__header--tabbed">
    <div class="svc-sidebar__header-container svc-sidebar__header-container--with-subtitle">
      <div class="svc-sidebar__header-content" @click="model.action()">
        <div :class="model.buttonClassName">
          <div class="svc-sidebar__header-caption">
            <span class="svc-sidebar__header-title">{{model.title}}</span>
            <span class="svc-sidebar__header-subtitle">{{model.tooltip}}</span>
          </div>
        </div>
        <sv-popup :model="model.popupModel"></sv-popup>
        <!--<sv-ng-popup [popupModel]="model.popupModel" [getTarget]="getTarget"></sv-ng-popup>-->
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { getActionDropdownButtonTarget } from "survey-core";
import { useBase } from "survey-vue3-ui";
import { MenuButton } from "survey-creator-core";
const props = defineProps<{ model: MenuButton }>();

useBase(() => props.model);
</script>
