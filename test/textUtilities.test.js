const {expect} = require("chai");
const {titleCase} = require("../src/textutilities");

let titleCaseResult = titleCase("the mouse is anoying");
describe("textUtilities", function () {
	it("Return should be type string", () => {
		expect(titleCaseResult).to.be.a("string");
	});

	it("Should return to capitalized form", () => {
		expect(titleCaseResult).to.be.equal("The Mouse Is Anoying");
	});
});
