<template>
  <div
    class="svc-page__add-new-question svc-btn"
    v-on:click="
      (e) => {
        item.data.addNewQuestion(item, e);
        e.stopPropagation();
      }
    "
    v-key2click
    v-on:mouseover="(e) => item.data.hoverStopper(e, e.currentTarget)"
  >
    <span class="svc-text svc-text--normal svc-text--bold">
      {{ item.data.addNewQuestionText }}
    </span>
    <button
      type="button"
      v-on:click="
        (e) => {
          item.data.questionTypeSelectorModel.action();
          e.stopPropagation();
        }
      "
      :title="item.title"
      v-key2click
      :aria-label="item.title"
      class="svc-page__question-type-selector"
    >
      <SvComponent :name="'sv-svg-icon'"
        class="svc-page__question-type-selector-icon"
        v-bind="{
          iconName: item.data.questionTypeSelectorModel.iconName,
          size: 24,
          title: item.data.questionTypeSelectorModel.title,
        }"
      ></SvComponent>
      <SvComponent :name="'sv-popup'"
        :model="item.data.questionTypeSelectorModel.popupModel"
      ></SvComponent>
    </button>
  </div>
</template>
<script lang="ts" setup>
 import { SvComponent } from "survey-vue3-ui";
import type { Action } from "survey-core";
import type {} from "survey-creator-core";
import { useBase } from "survey-vue3-ui";
const props = defineProps<{ item: Action }>();
useBase(() => props.item);
</script>
