import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { router } from "./router";
import { createPinia } from "pinia";
import { vMaska } from "maska/vue";

const pinia = createPinia();

const app = createApp(App);

app.directive("maska", vMaska);

app.use(router);
app.use(pinia);

app.mount("#app");
