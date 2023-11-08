<template>
  <div
    class="svc-page"
    :data-sv-drop-target-survey-element="
      !model.isGhost ? page.name : 'newGhostPage'
    "
    :data-sv-drop-target-page="!model.isGhost ? page.name : ''"
  >
    <div
      v-if="model.page"
      :id="model.page.id"
      class="svc-page__content"
      :class="model.css"
      v-on:click="
        (e) => {
          model.select(model, e);
          e.stopPropagation();
        }
      "
      v-on:mouseover="(e) => model.hover(e, e.currentTarget)"
      v-on:mouseleave="(e) => model.hover(e, e.currentTarget)"
      data-bind="click: select, key2click, clickBubble: false, css: css, attr: { id: page.id }, event: { mouseover: function(m, e) { hover(e, $element); }, mouseleave: function(m, e) { hover(e, $element); } }"
    >
      <div class="svc-page__content-actions">
        <sv-action-bar :model="model.actionContainer"></sv-action-bar>
      </div>
      <survey-page
        :survey="model.creator.survey"
        :page="model.page"
      ></survey-page>
      <sv-action-bar :model="model.footerActionsBar"></sv-action-bar>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useCreatorModel } from "@/creator-model";
import type { SurveyModel, PageModel } from "survey-core";
import type { CreatorBase } from "survey-creator-core";
import { PageAdorner } from "survey-creator-core";
const props = defineProps<{
  creator: CreatorBase;
  survey: SurveyModel;
  page: PageModel;
}>();
const model = useCreatorModel(
  () => new PageAdorner(props.creator, props.page),
  [() => props.page],
  (value) => {
    value.dispose();
  }
);
</script>
