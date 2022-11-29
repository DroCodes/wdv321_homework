// import mocha
var assert = require("chai").assert;
var compareNumbers = require("../app/validateComparison.js");

// unit tests for validateComparison
describe("validateComparison", function () {
    // test the validateComparison function
    it("should return the larger of two values", function () {
        const value1 = 5;
        const value2 = 6;
        const expected = 6;

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return the larger of two values", function () {
        const value1 = 4;
        const value2 = 3;
        const expected = 4;

        assert.equal(4, compareNumbers(4, 3));
    });
    it("should return the amounts are equal", function () {
        const value1 = 3;
        const value2 = 3;
        const expected = "The amounts are equal";

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return Please enter a number in Value 1", function () {
        const value1 = "a";
        const value2 = 5;
        const expected = "Please enter a number in Value 1";

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return Please enter a number in Value 2", function () {
        const value1 = 5;
        const value2 = "a";
        const expected = "Please enter a number in Value 2";

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return the larger number", function () {
        const value1 = -1;
        const value2 = 5;
        const expected = 5;

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return the larger number", function () {
        const value1 = +34;
        const value2 = -30;
        const expected = 34;

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return the larger number", function () {
        const value1 = -5;
        const value2 = -6;
        const expected = -5;

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return the larger number", function () {
        const value1 = 5;
        const value2 = -1;
        const expected = 5;

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return the larger number", function () {
        const value1 = 1.5;
        const value2 = 2;
        const expected = 2;

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return the larger number", function () {
        const value1 = 2;
        const value2 = 1.5;
        const expected = 2;

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return Please enter a number in Value 1", function () {
        const value1 = "5b";
        const value2 = 3;
        const expected = "Please enter a number in Value 1";

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return Please enter a number in Value 2", function () {
        const value1 = 3;
        const value2 = "5b";
        const expected = "Please enter a number in Value 2";

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return Please enter a number in Value 1", function () {
        const value1 = "";
        const value2 = 5;
        const expected = "Please enter a number in Value 1";

        assert.equal(expected, compareNumbers(value1, value2));
    });
    it("should return Please enter a number in Value 2", function () {
        const value1 = 5;
        const value2 = "";
        const expected = "Please enter a number in Value 2";

        assert.equal(expected, compareNumbers(value1, value2));
    });
});
