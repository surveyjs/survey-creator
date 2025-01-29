import { createApp } from 'vue'
import "survey-core/default.css";
import "survey-creator-core/survey-creator-core.css";
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router);

app.mount('#app')
