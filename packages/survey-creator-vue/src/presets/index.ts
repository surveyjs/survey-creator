import { ComponentFactory } from "survey-vue3-ui";

// Import presets components
import TabPresets from "./Presets.vue";
import PresetsIconItem from "./PresetsIconItem.vue";
import PresetsPropertyGrid from "./PresetsPropertyGrid.vue";

export { TabPresets };

ComponentFactory.Instance.registerComponent("svc-tab-presets", TabPresets);    
ComponentFactory.Instance.registerComponent("svc-presets-icon-item", PresetsIconItem);
ComponentFactory.Instance.registerComponent("svc-presets-property-grid", PresetsPropertyGrid);