import { MyButton } from "./button";

const components = [MyButton];

const installer = {
  install(app) {
    components.forEach((component) => {
      app.use(component);
    });
  },
};

export default installer;
