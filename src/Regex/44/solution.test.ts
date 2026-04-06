import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 44: Split the phone numbers", () => {
	test("Test 01", () => {
		const received = fn([
			"148-809-2561957985",
			"188-547-5864327428",
			"891-454-9195497623",
			"648-42-380306686",
			"824-417-6460145493",
			"489-16-9839392781"
		])

		const expected = [
			"CountryCode=148,LocalAreaCode=809,Number=2561957985",
			"CountryCode=188,LocalAreaCode=547,Number=5864327428",
			"CountryCode=891,LocalAreaCode=454,Number=9195497623",
			"CountryCode=648,LocalAreaCode=42,Number=380306686",
			"CountryCode=824,LocalAreaCode=417,Number=6460145493",
			"CountryCode=489,LocalAreaCode=16,Number=9839392781"
		]

		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn(["1 877 2638277", "91-011-23413627"])

		const expected = [
			"CountryCode=1,LocalAreaCode=877,Number=2638277",
			"CountryCode=91,LocalAreaCode=011,Number=23413627"
		]

		expect(received).toStrictEqual(expected)
	})
})
