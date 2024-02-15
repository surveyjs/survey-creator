import { createRouter, createWebHistory } from 'vue-router'

import Default from "../components/test/Default.vue"
import ThemeSwitcher from "../components/test/ThemeSwitcher.vue"
import ThemePreview from "../components/test/ThemePreview.vue"
import Localization from "../components/test/Localization.vue";
import ThemeTab from "../components/test/ThemeTab.vue";
import NoLicense from "../components/test/NoLicense.vue";
import ByPage from "../components/test/ByPage.vue";
import DropdownCollapse from "../components/test/DropdownCollapse.vue";
import CustomWidget from "../components/test/CustomWidget.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/testCafe/testcafe", component: Default },
    { path: "/testCafe/preview-theme-switcher", component: ThemeSwitcher },
    { path: "/testCafe/theme-for-preview-option", component: ThemePreview },
    { path: "/testCafe/by-page", component: ByPage },
    { path: "/testCafe/testcafe-widget", component: CustomWidget },
    { path: "/testCafe/testcafe_localized_ui", component: Localization },
    { path: "/testCafe/dropdown-collapse-view", component: DropdownCollapse },
    { path: "/testCafe/testcafe-theme-tab", component: ThemeTab },
    { path: "/testCafe/testcafe-no-license", component: NoLicense }
  ]
})

export default router
