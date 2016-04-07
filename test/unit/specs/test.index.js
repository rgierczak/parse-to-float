'use strict';

var parseToFloat = require('../../../index');

describe('General', function () {
    it('should throw error when an expression is invalid type', function () {
        expect(function () {
            parseToFloat('test');
        }).toThrow();
    });

    it("should't work", function () {
        expect(function () {
            parseToFloat(234.43, "test")
        }).toThrow();
    });

    it('should works', function () {
        expect(parseToFloat(234.43)).toEqual(234.43);
        expect(parseToFloat(234.1234, 3)).toEqual(234.123);
        expect(parseToFloat(234.12345, 4)).toEqual(234.1234);
        expect(parseToFloat(234)).toEqual(234);
        expect(parseToFloat(234.00)).toEqual(234);
        expect(parseToFloat(234.00)).toEqual(234.00);
    })
});
