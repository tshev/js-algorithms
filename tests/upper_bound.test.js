const algo = require("../src");

describe("upperBound", () => {
  test("integers", () => {
    const array = [1, 2, 3, 4];
    expect(algo.upperBound(array, 0, array.length, 3, (x, y) => x < y)).toBe(3);
  });

  test("objects", () => {
    const array = [{ val: 1 }, { val: 2 }, { val: 3 }, {val: 4 }];
    expect(algo.upperBound(array, 0, array.length, 3, (x, y) => x.val < y)).toBe(3);
  });
});
