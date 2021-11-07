import "./assets/styles/main.css";
import "vfonts/IBMPlexSans.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/router";

createApp(App).use(router).mount("#app");
