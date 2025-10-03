import { ComponentFactory } from "survey-vue3-ui";

// Import presets components
import TabPresets from "./Presets.vue";
import PresetsIconItem from "./PresetsIconItem.vue";
import PresetsPropertyGrid from "./PresetsPropertyGrid.vue";
import type { App } from "vue";

export { TabPresets };

export const surveyCreatorPresetsPlugin = {
  install(app: App) {
    app.component("svc-tab-presets", TabPresets);
    app.component("svc-presets-icon-item", PresetsIconItem);
    app.component("svc-presets-property-grid", PresetsPropertyGrid);
    ComponentFactory.Instance.registerComponent("svc-tab-presets", "svc-tab-presets");    
    ComponentFactory.Instance.registerComponent("svc-presets-icon-item", "svc-presets-icon-item");
    ComponentFactory.Instance.registerComponent("svc-presets-property-grid", "svc-presets-property-grid");
  },
};