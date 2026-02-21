import fn from "./solution.ts"
import { expect, test, describe } from "bun:test"

describe("Challenge 24: Merge and sort intervals", () => {
	test("Test 01", () => {
		const received = fn([])
		const expected: number[][] = []
		expect(received).toStrictEqual(expected)
	})

	test("Test 02", () => {
		const received = fn([[5, 10]])
		const expected = [[5, 10]]
		expect(received).toStrictEqual(expected)
	})

	test("Test 03", () => {
		const received = fn([
			[1, 3],
			[2, 6],
			[8, 10],
			[15, 18]
		])

		const expected = [
			[1, 6],
			[8, 10],
			[15, 18]
		]

		expect(received).toStrictEqual(expected)
	})
})
