import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 21: Count connected components in network", () => {
	test("Test 01", () => {
		const received = fn(
			[
				[0, 1],
				[2, 3]
			],
			4
		)

		const expected = 2

		expect(received).toBe(expected)
	})

	test("Test 02", () => {
		const received = fn([[0, 1]], 2)
		const expected = 1
		expect(received).toBe(expected)
	})

	test("Test 03", () => {
		const received = fn(
			[
				[0, 1],
				[1, 2],
				[0, 2]
			],
			3
		)

		const expected = 1

		expect(received).toBe(expected)
	})
})
