import type { App } from "vue";
import { surveyPlugin } from "survey-vue3-ui";
import SurveyCreatorComponent from "./Creator.vue";

import TabbedMenu from "./tabbed-menu/TabbedMenu.vue";
import TabbedMenuItemWrapper from "./tabbed-menu/TabbedMenuItemWrapper.vue";
import TabbedMenuItem from "./tabbed-menu/TabbedMenuItem.vue";

import SvgBundle from "./SvgBundle.vue";
function registerComponents(app: App) {
  app.component("SurveyCreatorComponent", SurveyCreatorComponent);
  app.component("svc-svg-bundle", SvgBundle);

  app.component("svc-tabbed-menu", TabbedMenu);
  app.component("svc-tabbed-menu-item-wrapper", TabbedMenuItemWrapper);
  app.component("svc-tabbed-menu-item", TabbedMenuItem);

  app.use(surveyPlugin);
}

export const surveyCreatorPlugin = {
  install(app: any) {
    registerComponents(app);
  },
};
