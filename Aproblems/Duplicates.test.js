const findDuplicates = require('./Duplicates');

describe(" Given an array of integers, 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once. Find all the elements that appear twice in the array.", () => {

    test("findDuplicates(arr)", () => {
        expect(findDuplicates([1])).toEqual([]);
    })
    test("findDuplicates(arr)", () => {
        expect(findDuplicates([4,3,2,7,8,2,3,1])).toEqual([3,2] || [2,3]);
    })
})