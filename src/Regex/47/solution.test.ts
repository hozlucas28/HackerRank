import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 47: UK and US (part 2)", () => {
	test("Test 01", () => {
		const received = fn(
			`the odour coming out of the leftover food was intolerable
ammonia has a very pungent odor`,
			["odour"]
		)

		const expected = [2]

		expect(received).toStrictEqual(expected)
	})
})
