const remDuplicates = require('./RemoveDuplicates');

describe("Remove the duplicates form the array", () => {

    test("Remove", () => {
        expect(remDuplicates([1, 1, 2])).toEqual(2);
    })
    test("Remove", () => {
        expect(remDuplicates([0,0,1,1,1,2,2,3,3,4])).toEqual(5);
    })
})