const missingNum = require('./MissingNum');

describe("Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the missing number.", () => {

    test("missingNum()", () => {
        expect(missingNum([3, 0, 1])).toEqual(2);
    })

    test("MissingNum()", () => {
        expect(missingNum([9,6,4,2,3,5,7,0,1])).toEqual(8);
    })

})