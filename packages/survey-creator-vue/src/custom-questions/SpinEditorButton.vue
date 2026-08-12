<template>
    <button
    :class="itemAction.getActionBarItemCss()"
    :aria-hidden="'true'"
    :disabled="itemAction.disabled"
    @click="item.action"
    @mousedown="item.data.onMouseDown"
    @mouseup="question.onButtonMouseUp"
    @mouseleave="question.onButtonMouseLeave"
    @blur="question.onBlur"
    @focus="question.onFocus"
    tabindex="-1"
    >
    <SvComponent
        :is="'sv-svg-icon'"
        :class="itemAction.cssClasses.itemIcon"
        :iconName="item.iconName"
        :size="'auto'"
    ></SvComponent>
    </button>
</template>
<script lang="ts" setup>
import type { Action } from 'survey-core';
import type { ISpinEditorButton } from 'survey-creator-core';
import { useBase, SvComponent } from 'survey-vue3-ui';
import { computed } from 'vue';

const props = defineProps<{ item: ISpinEditorButton }>()
const itemAction = computed(() => props.item as Action)
useBase(() => itemAction.value);
const question = computed(() => props.item.data.question)
</script>