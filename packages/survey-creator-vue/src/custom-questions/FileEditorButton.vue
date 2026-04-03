<template>
    <div>
        <label
            :class="item.getActionBarItemCss()"
            :for="question.inputId"
            :aria-label="question.chooseButtonCaption"
            @click="question.chooseFiles"
            v-key2click
        >
        <SvComponent
            :is="'sv-svg-icon'"
            :class="item.cssClasses.itemIcon"
            :iconName="item.iconName"
            :size="'auto'"
            :title="item.title"
        ></SvComponent>
        </label>
        <input
          type="file"
          :disabled="item.disabled"
          :class="question.cssClasses.fileInput"
          :id="question.inputId"
          :aria-required="question.ariaRequired"
          :aria-label="question.ariaLabel"
          :aria-invalid="question.ariaInvalid"
          :aria-describedby="question.ariaDescribedBy"
          :multiple="false"
          :title="question.inputTitle"
          :tabindex="-1"
          :accept="question.acceptedTypes"
          @change="question.onFileInputChange"
        />
    </div>
</template>
<script lang="ts" setup>
import { key2ClickDirective as vKey2click } from "survey-vue3-ui";
import { SvComponent } from "survey-vue3-ui";
import type { QuestionFileEditorModel } from "survey-creator-core";
import type { Action } from "survey-core";
import { computed } from "vue";
const props = defineProps<{ item: Action }>();
const question = computed<QuestionFileEditorModel>(() => {
  return props.item.data.question as QuestionFileEditorModel;
});
</script>