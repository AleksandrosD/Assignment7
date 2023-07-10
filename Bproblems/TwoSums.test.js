const TwoSums = require('./TwoSums');

describe("Two sums updated", () => {

    test("TwoSums(nums,target)", () => {
        expect(TwoSums([2, 7, 11, 15], 9)).toEqual([1, 2]);
    })
    test("TwoSums(nums,target)", () => {
        expect(TwoSums([2, 3,4], 6)).toEqual([1, 3]);
    })
})