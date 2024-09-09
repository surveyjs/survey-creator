<template>
  <div class="svc-sidebar__header svc-sidebar__header--tabbed">
    <div class="svc-sidebar__header-container svc-sidebar__header-container--with-subtitle">
      <div class="svc-sidebar__header-content" @click="model.action()">
        <div :class="buttonClassName">
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
import type { ActionContainer } from "survey-core";
import { Action, CssClassBuilder, getActionDropdownButtonTarget } from "survey-core";
import { computed } from "vue";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ model: Action }>();
const buttonClassName = computed<string>(
  () => {
    return new CssClassBuilder()
      .append("svc-sidebar__header-button")
      .append("svc-sidebar__header-button--with-subtitle")
      .append("svc-sidebar__header-button--pressed", props.model.pressed)
      .toString();
  }
);
useBase(() => props.model);
</script>
