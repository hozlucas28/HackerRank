import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 31: Next Greater Element with Position Offset", () => {
	test("Test 01", () => {
		const received = fn([2, 1, 2, 4, 3])
		const expected = [
			[4, 3],
			[2, 1],
			[4, 1],
			[-1, -1],
			[-1, -1]
		]
		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn([5])
		const expected = [[-1, -1]]
		expect(received).toStrictEqual(expected)
	})
})
