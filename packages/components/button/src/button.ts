import { fromPairs } from "lodash";
import { warn } from "vue";

const buttonTypes = [
  "default",
  "primary",
  "success",
  "warning",
  "info",
  "danger",
  "",
];

const buildProp = (prop, key) => {
  const { type, values } = prop;
  const _validator = values
    ? (val) => {
        let valid = false;
        if (values) {
          valid = values.includes(val);
        }

        if (!valid) {
          warn(`Invalid prop: ${key}`);
        }
        return valid;
      }
    : undefined;

  return {
    type,
    validator: _validator,
  };
};

const buildProps = (props) =>
  fromPairs(
    Object.entries(props).map(([key, option]) => [key, buildProp(option, key)])
  );

export const buttonProps = buildProps({
  type: {
    type: String,
    values: buttonTypes,
    default: "",
  },
});
