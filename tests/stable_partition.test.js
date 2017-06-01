const algo = require("../src");

describe("stable partition", () => {
  test("odd and even numbers", () => {
    let array = [1, 2, 3, 4];
    const partitionPoint = algo.stablePartition(array, 0, array.length, x => x % 2 === 0);
    expect(partitionPoint).toBe(2);
    expect(array[0] === 2 && array[1] === 4 && array[2] === 1 && array[3] === 3).toBe(true);
  });
});
