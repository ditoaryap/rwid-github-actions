import { arraySum } from "../src/array-sum";

describe("array sum", () => {
  it("return correct value", () => {
    expect(arraySum([1, 2, 3, 4, 5])).toBe(15);
  });
});
