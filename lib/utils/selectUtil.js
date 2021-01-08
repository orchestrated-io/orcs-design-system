import { find } from "lodash";

export const getOptionByValue = (options, value) => {
  return find(options, ["value", value]);
};

export default getOptionByValue;
