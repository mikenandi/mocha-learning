const {expect} = require("chai");
const {checkForShip} = require("../src/gameLogic/shipMethods");

describe("checkForShip", function () {
	it("Should correctly report no ship at a given players coordinate", () => {
		let player = {
			ships: [
				{
					locations: [[0, 0]],
				},
			],
		};

		expect(checkForShip(player, [9, 9])).to.be.false;
	});

	it("Should correctly report ship at a given players coordinate", () => {
		let player = {
			ships: [
				{
					locations: [
						[0, 0],
						[0, 1],
					],
				},
			],
		};

		expect(checkForShip(player, [0, 0])).to.be.true;
	});

	it("Should correctly handle multiple inputs ship at a given players coordinate", () => {
		let player = {
			ships: [
				{
					locations: [
						[0, 0],
						[0, 1],
					],
				},
			],
		};

		expect(checkForShip(player, [0, 1])).to.be.true;
		expect(checkForShip(player, [0, 0])).to.be.true;
	});

	it("should be pending when it is run around");
});
