import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import MyComponents from "components";

createApp(App).use(MyComponents).mount("#app");
