<template>
  <div class="svc-menu-action">
    <div :class="buttonClassName" :title="model.tooltip" @click="model.action()">
      <div class="svc-menu-action__icon">
        <div class="svc-menu-action__icon-container">
          <sv-svg-icon
            :iconName="model.iconName"
            :size="24"
          ></sv-svg-icon>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Action, CssClassBuilder } from "survey-core";
import { useBase } from "survey-vue3-ui";
import { computed } from "vue";
const props = defineProps<{ model: Action }>();
const buttonClassName = computed<string>(
  () => {
    const className = new CssClassBuilder()
      .append("svc-menu-action__button")
      .append("svc-menu-action__button--selected", !!props.model.active)
      .toString();
    return className;
  }
);
useBase(() => props.model);
</script>
