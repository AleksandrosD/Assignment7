const OneDuplicate = require('./OneDuplicate');

describe("Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive. There is only one duplicate number in nums, return this duplicate number.", () => {

    test("OneDuplicate(arr)", () => {
        expect(OneDuplicate([1, 3, 4, 2, 2])).toEqual(2);
    })
    test("OneDuplicate(arr)", () => {
        expect(OneDuplicate([3,1,3,4,2])).toEqual(3);
    })
})