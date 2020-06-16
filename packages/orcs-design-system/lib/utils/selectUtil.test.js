import { getOptionByValue } from "./selectUtil";

describe("get option by value", () => {
  const options = [
    {
      label: "1",
      value: "abc"
    },
    {
      label: "2",
      value: "def"
    }
  ];

  test("return option from value", () => {
    const option = getOptionByValue(options, "def");

    expect(option).toBe(options[1]);
  });

  test("return nothing if value not found", () => {
    const option = getOptionByValue(options, "xyz");

    expect(option).toBe(undefined);
  });
});
