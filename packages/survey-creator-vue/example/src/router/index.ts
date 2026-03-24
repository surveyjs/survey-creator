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
import Presets from "../components/test/Presets.vue";
import CreatorThemes from "../components/test/CreatorThemes.vue";
import Example from '@/components/Example.vue';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", component: Example },
    { path: "/test-pages/default", component: Default },
    { path: "/test-pages/preview-theme-switcher", component: ThemeSwitcher },
    { path: "/test-pages/theme-for-preview-option", component: ThemePreview },
    { path: "/test-pages/by-page", component: ByPage },
    { path: "/test-pages/widget", component: CustomWidget },
    { path: "/test-pages/localized_ui", component: Localization },
    { path: "/test-pages/dropdown-collapse-view", component: DropdownCollapse },
    { path: "/test-pages/theme-tab", component: ThemeTab },
    { path: "/test-pages/no-license", component: NoLicense },
    { path: "/test-pages/presets", component: Presets },
    { path: "/test-pages/creator-themes", component: CreatorThemes }
  ]
})

export default router
