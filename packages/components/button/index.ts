import Button from "./src/button.vue";

export const MyButton = {
  install(app) {
    app.component("MyButton", Button);
  },
};
