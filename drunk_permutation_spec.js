drunkPermutation = require("./drunk_permutation");

describe("Permutation", function() {
  it("ensures uniqueness in an Array", function() {
    arr = [1, 1, 2, 3, 3, 4];

    res = drunkPermutation.ensureUniqueness(arr);

    expect(res.length).toBe(4);
    expect(res).toContain(4);
    expect(res).toContain(3);
    expect(res).toContain(2);
    expect(res).toContain(1);
  });

  it("randomizes an Array", function() {
    arr = [1, 2, 3, 4];

    res = drunkPermutation.randomizeArray(arr);

    expect(res.length).toBe(4);
    expect(res).toEqual(arr);

  });

  it("permutates a given list of 0 nodes completely", function() {
    numerOfNodes = 0;

    res = drunkPermutation.permutateNodeTuples(numerOfNodes);

    console.log(res);
    expect(res.length).toBe(1);
    expect(res[0].length).toBe(0);
  });

  it("permutates a given list of 1 node completely", function() {
    numerOfNodes = 1;

    res = drunkPermutation.permutateNodeTuples(numerOfNodes);
    expect(res).toContain([1]);
    expect(res.length).toBe(1);
  });
  it("permutates a given list of 2 nodes completely", function() {
    numerOfNodes = 2;

    res = drunkPermutation.permutateNodeTuples(numerOfNodes);

    expect(res).toContain([1,2]);
    expect(res).toContain([2,1]);
  });
  //it("permutates a given list of 3 nodes completely", function() {
  //  numerOfNodes = 3;

  //  res = drunkPermutation.permutateNodeTuples(numerOfNodes);

  //  expect(res).toContain([[1],[2],[3]]);
  //  expect(res).toContain([[2],[1],[3]]);
  //  expect(res).toContain([[2],[3],[1]]);
  //  expect(res).toContain([[3],[2],[1]]);
  //  expect(res).toContain([[3],[1],[2]]);
  //});
});

describe("Calculation", function() {
  it("", function() {
  });
});
