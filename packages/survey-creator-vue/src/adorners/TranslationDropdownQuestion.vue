<template>
  <slot></slot>
  <div class="st-dropdown-choices--wrapper" v-if="model">
    <div class="svc-question__dropdown-choices">
      <div
        v-for="(item, index) in model.getRenderedItems()"
        :key="'translation_choice_' + index"
        :class="model.getChoiceCss()"
      >
        <SvComponent :is="model.itemComponent" :question="question" :item="item"></SvComponent>
      </div>
    </div>
    <SvComponent
      :is="'sv-action-bar-item'"
      v-if="model.needToCollapse"
      :item="model.collapseAction">
    </SvComponent>
  </div>
</template>
<script lang="ts" setup>
import { SvComponent } from "survey-vue3-ui";
import { useCreatorModel } from "@/creator-model";
import type { QuestionSelectBase } from "survey-core";
import { TranslationDropdownViewModel } from "survey-creator-core";
import { computed } from "vue";

const props = defineProps<{
  componentData: { question: QuestionSelectBase; data: any };
  componentName: string;
}>();
const question = computed(() => props.componentData.question);
const model = useCreatorModel(
  () =>
    new TranslationDropdownViewModel(
      props.componentData.question,
      props.componentData.data ? props.componentData.data.translation : undefined
    ),
  [() => props.componentData.question, () => props.componentData.data],
  (value) => value?.dispose()
);
</script>
