import { classNames } from "./classNames";

describe("classNames", () => {
  test("with only first param", () => {
    expect(classNames("someName")).toBe("someName");
  });
  test("with additionnal class", () => {
    expect(classNames("someName", {}, ["class1", "class2"])).toBe("someName class1 class2");
  });
  test("with mods", () => {
    expect(classNames("someName", { hovered: true, scrollable: true }, ["class1", "class2"])).toBe("someName class1 class2 hovered scrollable");
  });
  test("with mods false", () => {
    expect(classNames("someName", { hovered: true, scrollable: false }, ["class1", "class2"])).toBe("someName class1 class2 hovered");
  });
  test("with mods undefined", () => {
    expect(classNames("someName", { hovered: undefined, scrollable: true }, ["class1", "class2"])).toBe("someName class1 class2 scrollable");
  });
});