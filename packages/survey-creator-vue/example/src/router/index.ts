import { createRouter, createWebHistory } from 'vue-router'

import  Default from "../components/test/Default.vue"
import  ThemeSwitcher from "../components/test/Default.vue"
import  ThemePreview from "../components/test/Default.vue"
import Localization from "../components/test/Localization.vue";
import ThemeTab from "../components/test/ThemeTab.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/testCafe/testcafe", component: Default },
    { path: "/testCafe/preview-theme-switcher", component: ThemeSwitcher },
    { path: "/testCafe/theme-for-preview-option", component: ThemePreview },
    // { path: "testCafe/by-page", component: TestByPageComponent },
    // { path: "testCafe/testcafe-widget", component: TestCustomWidgetComponent },
    { path: "/testCafe/testcafe_localized_ui", component: Localization },
    // { path: "testCafe/dropdown-collapse-view", component: TestDropdownCollapseComponent },
    { path: "/testCafe/testcafe-theme-tab", component: ThemeTab }  
  ]
})

export default router
