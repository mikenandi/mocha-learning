const {assert, expect} = require("chai");
const {sayHello, addNumbers} = require("../src/app");

describe("App function", function () {
	describe("sayHello()", function () {
		it("App should return hello", () => {
			let result = sayHello();

			assert.equal(result, "hello");
		});

		it("Return type should be of type string", () => {
			let result = sayHello();

			assert.typeOf(result, "string");
		});
	});

	describe("addNumbers()", function () {
		it("Add numbers should be above 5", () => {
			let result = addNumbers(5, 5);

			assert.isAbove(result, 5);
		});

		it("Add number should return type number", () => {
			let result = addNumbers(5, 8);

			assert.typeOf(result, "number");
		});
	});
});
