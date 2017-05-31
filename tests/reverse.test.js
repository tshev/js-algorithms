const algo = require("../src");

describe("reverse", () => {
  test("4 elements", () => {
    let array = [1, 2, 3, 4];
    algo.reverse(array, 0, array.length);
    expect(array[0] === 4 && array[1] === 3 && array[2] === 2 && array[3] === 1).toBe(true);
  });
});
