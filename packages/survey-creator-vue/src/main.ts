import { createApp } from "vue";
import App from "./App.vue";
import { surveyCreatorPlugin } from "./index";

import "survey-core/survey-core.css";
import "survey-creator-core/survey-creator-core.css";
import { surveyPlugin } from "survey-vue3-ui";

const app = createApp(App);
app.use(surveyPlugin);
app.use(surveyCreatorPlugin);

app.mount("#app");
