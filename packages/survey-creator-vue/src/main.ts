import { createApp } from "vue";
import App from "./App.vue";
import { surveyCreatorPlugin } from "./index";

import "survey-core/defaultV2.css";
import "survey-creator-core/survey-creator-core.css";
import { surveyPlugin } from "survey-vue3-ui";

const app = createApp(App);
app.use(surveyPlugin);
app.use(surveyCreatorPlugin);

const mountedApp = app.mount("#app");
